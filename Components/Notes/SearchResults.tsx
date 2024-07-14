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

    //scrollable search results
    //  * on click: open a tab for the item
    //  * 
    return (
        <div>
        </div>
    );
}

export default SearchResults