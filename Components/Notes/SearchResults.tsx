import * as React from "react";
//import { useState, useMemo } from "react";

//import * as API from "API/api"
import * as DTO from "API/dto"
import "./Search.css"

interface Props {
    results: DTO.SearchSummary[];
}

const SearchResults: React.FC<Props> = ({ results }): JSX.Element => {
    results;

    //scrollable search results
    //  * on click: open a tab for the item
    //  * 
    return (
        <div>
        </div>
    );
}

export default SearchResults