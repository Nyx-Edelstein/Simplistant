import * as React from "react";
import { useState } from "react"

import * as API from "API/api"
import * as DTO from "API/dto"
import NoteTabContent from "Enum/NoteTabContent";
import Search from "Components/Notes/Search";
//import SearchResults from "Components/Notes/SearchResults";
//import NoteView from "Components/Notes/NoteView";
//import NoteEdit from "Components/Notes/NoteEdit";
//import NoteCreate from "Components/Notes/NoteCreate";
import "./Notes.css"

interface Props {
}

const Notes: React.FC<Props> = (): JSX.Element => {
    const [ActiveTab, setActiveTab] = useState<string>("");
    const [SearchResults, setSearchResults] = useState<DTO.SearchSummary[]>([]);
    const [TabContentType, setTabContentType] = useState<NoteTabContent>(NoteTabContent.Search);

    //const load = (noteId: string) => {
    //    noteId;
    //    //Fetch note if it isn't in the list
    //    setOpenNotes;
    //    //setCurrentComponent(component);
    //}

    //const search = (query: string) => {
    //    query;
    //    setResults;
    //}

    const changeTab = (tab: string) => {
        //Unhighlight previously clicked tab & highlight clicked tab
        var prevTab = document.getElementById(ActiveTab);
        prevTab?.classList.remove("tab-active");
        var newTab = document.getElementById(tab);
        if (newTab !== null) {
            newTab.classList.add("tab-active");
            setActiveTab(tab);
        }        

        //Change active content
        var tabContents = document.getElementById("tab-contents");
        if (tabContents != null) {
            tabContents.textContent = `Open tab: ${tab}`;
        }

        //todo: implement this
        setTabContentType;
    }

    const search = (query: string, includeArchived: boolean) => {
        API.SearchNotes(query, includeArchived).then(result => {
            if (typeof result == "string") {
                //Shouldn't happen...
            } else if (typeof result == "number") {
                //Shouldn't happen...
            } else {
                setSearchResults(result.summaries);
                changeTab("search");
            }
        });
    }

    SearchResults;
    //Todo: 
    //Map SearchResults to element?
    var tabClass = (n: number) => n == 0 ? "tab tab-active" : "tab";
    const tabs = [...Array(10).keys()].map(i =>
        <a className={tabClass(i)} style={{ width: "100px" }} id={`tab-${i}`} onClick={() => changeTab(`tab-${i}`)}>{`Tab ${i}`}</a>
    );

    TabContentType;
    //todo: change visibility based on tab content type

    return (
        <div className="">
            <Search doSearch={search} />
            <div className="tabs-nav">
                <div className="tabs tabs-boxed tabs-container" >
                    <div>{tabs}</div>
                </div>
            </div>
            <div id="tab-contents">TEXT HERE</div>
        </div>
    );
}

export default Notes