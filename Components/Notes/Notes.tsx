import * as React from "react";
import { useState } from "react"
import PulseLoader from "react-spinners/PulseLoader";

import * as API from "API/api"
import * as DTO from "API/dto"
import Search from "Components/Notes/Search";
import SearchResults from "Components/Notes/SearchResults";
import NoteView from "Components/Notes/NoteView";
import NoteEdit from "Components/Notes/NoteEdit";
import NoteCreate from "Components/Notes/NoteCreate";
import "./Notes.css"

interface Props {
}

interface TabData {
    id: string,
    title: string,
    note: DTO.Note | undefined,
    state: "view" | "edit" | "create",
    dirty: boolean
}

const Notes: React.FC<Props> = (): JSX.Element => {
    const [SearchSummaries, setSearchSummaries] = useState<DTO.SearchSummary[]>([]);
    const [OpenTabs, setOpenTabs] = useState<TabData[]>([]);
    const [ActiveTab, setActiveTab] = useState<string>("");
    const [Loading, setLoading] = useState<boolean>(false);

    const getCatalog = () => {
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
                title: (title.length < 15 ? title : title.slice(0, 12) + "..."),
                note: undefined,
                state: "view",
                dirty: false
            };
            var newTabs = [...OpenTabs, newTab];
            setOpenTabs(newTabs);
        }
        //Todo: maybe give some visual indicator that the note is already open?
    }

    const openTab = (id: string, title: string) => {
        addTab(id, title);
        changeTab(id);
    }

    const changeTab = (tab: string) => {
        var prevTab = document.getElementById(ActiveTab);
        prevTab?.classList.remove("tab-active");
        var newTab = document.getElementById(tab);
        if (newTab !== null) {
            newTab.classList?.add("tab-active");
        }
        setActiveTab(tab);
    }

    const closeTab = (tab: string) => {
        const tab_i = OpenTabs.findIndex(t => t.id === tab);
        if (tab_i > 0) {
            const tab = OpenTabs[tab_i];
            if (tab.dirty) { confirmCloseModal() }
            else {
                const before = OpenTabs.slice(0, tab_i);
                const after = OpenTabs.slice(tab_i + 1);
                setOpenTabs([...before, ...after]);
                if (ActiveTab === tab.id) {
                    changeTab("");
                }                
            }
        }
    }

    const confirmCloseModal = () => {
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
        return data.state === "view" ? <NoteView note={data.note} />
            : data.state === "edit" ? <NoteEdit note={data.note} />
            : <NoteCreate note={data.note} />
    }

    //Map tab data to tab elements
    var tabClass = (n: number) => n == 0 ? "tab tab-active" : "tab";
    const tabs = OpenTabs.map((tab, i) =>
        <a className={tabClass(i)} style={{ width: "100px" }} id={tab.id} onClick={() => changeTab(tab.id)}>
            <span>{tab.title}</span>
            {tab.dirty && <span>(*)</span>}
            <button className="btn btn-circle" style={{ right: 0, position: "relative" }} onClick={() => closeTab(tab.id)}>
                ✖
            </button>
        </a>
    );

    return (
        /* todo: keybindings for navigation? */
        <div className="">
            <div onFocus={() => changeTab("")}>
                <Search getCatalog={getCatalog} search={search} />
            </div>
            {/* Todo: Buttons:
                * new note
                * sort A-Z
                * save all
                * close all before
                * close all after
                * close all but current
                * close all
            */}
            <div className="tabs-nav">
                <div className="tabs tabs-boxed tabs-container" >
                    <div>{tabs}</div>
                </div>
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