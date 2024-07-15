import * as React from "react";
//import { useState, useMemo } from "react";

//import * as API from "API/api"
import * as DTO from "API/dto"
import "./Search.css"

interface Props {
    results: DTO.SearchSummary[];
    addTab: (id: string, title: string) => void;
    openTab: (id: string, title: string) => void;
}

const SearchResults: React.FC<Props> = ({ results, addTab, openTab }): JSX.Element => {
    results;
    addTab;
    openTab;

    const summaries = results.map(r =>
        <div onClick={_ => openTab(r.noteId, r.title)} onContextMenu={e => { e.preventDefault(); addTab(r.noteId, r.title) } }>
            <div className="card bg-base-200 shadow-xl" style={{ margin: "10px 10px 5px 0px", padding: "10px" }}>
                <h2 className="card-title"><u>{r.title}</u></h2>
                <p><b>Tags: </b>{r.tags.length == 0 ? "none" : r.tags.join(", ")}</p>
            </div>
        </div>
    );

    //scrollable search results
    //  * on click: open a tab for the item
    //  * 
    return (
        <div>
            {summaries}
        </div>
    );
}

export default SearchResults
