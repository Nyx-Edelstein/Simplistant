import * as React from "react";
import { useState } from "react"
import PulseLoader from "react-spinners/PulseLoader";

import * as API from "API/api"
import * as DTO from "API/dto"
import Search from "Components/Notes/Search";
import SearchResults from "Components/Notes/SearchResults";
import NoteView from "Components/Notes/NoteView";
import NewNoteIcon from "Assets/new_note.png";
import SaveAllIcon from "Assets/save_all.png";
import SortIcon from "Assets/sort.png";
import CloseBeforeIcon from "Assets/close_before.png";
import CloseOtherIcon from "Assets/close_other.png";
import CloseAfterIcon from "Assets/close_after.png";
import CloseAllIcon from "Assets/close_all.png";
import "./Notes.css"

interface Props {
}

interface TabData {
    id: string,
    title: string,
    note: DTO.Note | undefined,
    dirty: boolean
}

const Notes: React.FC<Props> = (): JSX.Element => {
    const [SearchSummaries, setSearchSummaries] = useState<DTO.SearchSummary[]>([]);
    const [OpenTabs, setOpenTabs] = useState<TabData[]>([]);
    const [ActiveTab, setActiveTab] = useState<string>("");
    const [Loading, setLoading] = useState<boolean>(false);

    const getCatalog = () => {
        console.log("catalog");
        changeTab("");
        setLoading(true);
        API.GetNotesCatalog().then(result => {
            if (typeof result == "string") {
                //todo: Shouldn't happen...
                console.log(`Unknown error, probably http related: ${result}`);
            } else if (typeof result == "number") {
                //todo: Shouldn't happen...
                //unauthorized?? redirect to login??
                console.log(`Unauthorized? (result = ${result})`);
            } else {
                setSearchSummaries(result.summaries);
            }
            setLoading(false);
        })
    }

    const search = (query: string, includeArchived: boolean) => {
        console.log("search");
        changeTab("");
        setLoading(true);
        API.SearchNotes(query, includeArchived).then(result => {
            if (typeof result == "string") {
                //todo: Shouldn't happen...
                console.log(`Unknown error, probably http related: ${result}`);
            } else if (typeof result == "number") {
                //todo: Shouldn't happen...
                //unauthorized?? redirect to login??
                console.log(`Unauthorized? (result = ${result})`);
            } else {
                setSearchSummaries(result.summaries);
            }
            setLoading(false);
        });
    }

    const addTab = (id: string, title: string) => {
        const existingTab = OpenTabs.find(t => t.id === id);
        if (existingTab === undefined) {
            const newTab: TabData = {
                id: id,
                title: (title.length < 20 ? title : title.slice(0, 17) + "..."),
                note: undefined,
                dirty: (Math.random() < 0.5)
            };
            var newTabs = [...OpenTabs, newTab];
            setOpenTabs(newTabs);
        }
        //Todo: maybe give some visual indicator that the note is already open?
    }

    const openTab = (id: string, title: string) => {
        console.log("openTab")
        addTab(id, title);
        changeTab(id);
    }

    const changeTab = (tab: string) => {
        var tabs = document.getElementsByClassName("notes-tab");
        console.log("-")
        console.log(`switching to ${tab}`)
        Array.from(tabs).forEach(t => {
            if (t.id === tab) {
                console.log(`active tab: ${t.id}`)
                t.classList.remove("bg-base-100");
                t.classList.add("bg-accent")
            } else {
                console.log(`inactive tab: ${t.id}`)
                t.classList.remove("bg-accent");
                t.classList.add("bg-base-100");
            }
        });
        setActiveTab(tab);
    }

    const closeTab = (tab: string) => {
        const tab_i = OpenTabs.findIndex(t => t.id === tab);
        if (tab_i >= 0) {
            const tab = OpenTabs[tab_i];
            const close = () => {
                if (ActiveTab === tab.id) {
                    changeTab("");
                }
                const before = OpenTabs.slice(0, tab_i);
                const after = OpenTabs.slice(tab_i + 1);
                setOpenTabs([...before, ...after]);
            }

            if (tab.dirty) { confirmCloseModal("This note has pending edits that will be lost.", "Close Note", "Keep Open", close) }
            else { close(); }
        }
    }

    const confirmCloseModal = (message: string, confirm: string, cancel: string, callback: () => void) => {
        message;
        confirm;
        cancel;
        callback();
        //todo: implement modal
    }

    const getActiveNote: () => JSX.Element = () => {
        //Find note corresponding to open tab
        const data = OpenTabs.find(t => t.id === ActiveTab);
        if (data === undefined) {
            // shouldn't happen ???
            return <div/>;
        }

        //Lazy load notes
        if (data.note === undefined) {
            setLoading(true);
            API.GetNote(data.id).then(result => {
                if (typeof (result) === "string") {
                    //todo: error handling
                    console.log(`Unknown error, probably http related: ${result}`);
                }
                else if (typeof (result) === "number") {
                    //unauthorized?? redirect to login??
                    console.log(`Unauthorized? (result = ${result})`);
                } else if (result.status === DTO.ResponseStatus.Error) {
                    //todo: error handling
                    console.log(`Result from API call was Error (.Net Exception)`);
                } else {
                    data.note = result.note
                }
                setLoading(false);
            })
            //When Loading is set to false following the API call, this will trigger a rerender
            //At this point data.note should no longer be undefined
            return <PulseLoader color="#1eccff" />;
        }

        //Map note data to note component based on state
        return <NoteView note={data.note} />
    }

    const newNote = () => { };
    const saveAllNotes = () => { };
    const sortTabs = () => { };
    const closeTabsBefore = () => { };
    const closeTabsAfter = () => { };
    const closeOtherTabs = () => { };
    const closeAllTabs = () => { };

    //Map tab data to tab elements
    const tabs = OpenTabs.map(tab =>
        <a className="notes-tab bg-base-100 text-neutral-content" id={tab.id} onClick={() => changeTab(tab.id)}>
            <span className="tab-dirty-indicator"><b className={tab.dirty ? "invisible" : ""}>*</b></span>
            <span className="tab-title">{tab.title}</span>
            <button className="btn btn-circle btn-xs btn-ghost tab-close-btn"
                onClick={e => { closeTab(tab.id); e.stopPropagation(); }}>✖</button>
        </a>
    );

    return (
        /* todo: keybindings for navigation? */
        <div className="">
            <div onFocus={() => changeTab("")}>
                <Search getCatalog={getCatalog} search={search} />
            </div>
            <div className="tabs-nav">
                <div className="tabs-container bg-base-200" >
                    <div>{tabs}</div>
                </div>
            </div>
            {/* Todo: Buttons functionality:
                * new note
                * save all
                * sort A-Z
                * close all before
                * close all after
                * close all but current
                * close all
            */}
            <div className="utility-btns bg-base-200">
                <button className="btn btn-ghost btn-sm" onClick={_ => newNote}>
                    <div className="tooltip tooltip-top" data-tip="New note">
                        <img src={NewNoteIcon} />
                    </div>
                </button>
                <button className="btn btn-ghost btn-sm" onClick={_ => saveAllNotes}>
                    <div className="tooltip tooltip-top" data-tip="Save all">
                        <img src={SaveAllIcon} />
                    </div>
                </button>
                <button className="btn btn-ghost btn-sm" onClick={_ => sortTabs}>
                    <div className="tooltip tooltip-top" data-tip="Sort tabs">
                        <img src={SortIcon} />
                    </div>
                </button>
                <button className="btn btn-ghost btn-sm" onClick={_ => closeTabsBefore}>
                    <div className="tooltip tooltip-top" data-tip="Close tabs to the left">
                        <img src={CloseBeforeIcon} />
                    </div>
                </button>
                <button className="btn btn-ghost btn-sm" onClick={_ => closeOtherTabs}>
                    <div className="tooltip tooltip-top" data-tip="Close all other tabs">
                        <img src={CloseOtherIcon} />
                    </div>
                </button>
                <button className="btn btn-ghost btn-sm" onClick={_ => closeTabsAfter}>
                    <div className="tooltip tooltip-top" data-tip="Close tabs to the right">
                        <img src={CloseAfterIcon} />
                    </div>
                </button>
                <button className="btn btn-ghost btn-sm" onClick={_ => closeAllTabs}>
                    <div className="tooltip tooltip-top" data-tip="Close all tabs">
                        <img src={CloseAllIcon} />
                    </div>
                </button>
            </div>
            <div>
                {
                    Loading ? <PulseLoader color="#1eccff" />
                        : ActiveTab === "" ? <SearchResults results={SearchSummaries} addTab={addTab} openTab={openTab} />
                        : getActiveNote()
                }
            </div>
        </div>
    );
}

export default Notes