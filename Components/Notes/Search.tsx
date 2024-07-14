import * as React from "react";
import { useMemo } from "react";

//import * as API from "API/api"
//import * as DTO from "API/dto"
import "./Search.css"

interface Props {
    doSearch: (query: string, includeArchived: boolean) => void;
    addTab: (id: string, title: string) => void;
    openTab: (id: string, title: string) => void;
}

const Search: React.FC<Props> = ({ doSearch, addTab, openTab }): JSX.Element => {
    doSearch;
    addTab;
    openTab;
    //const [SearchQuery, setSearchQuery] = useState<string>("");
    //const [LastKeypress, setLastKeypress] = useState<Date>(new Date());
    //const [SearchQueued, setSearchQueued] = useState<boolean>(false);

    useMemo(() => {
        //useMemo, setInterval
        //  * check every x ms if searchQueued and time elapsed is > 3s
        //  * if conditions, do search
    }, []);

    //Top: search bar (button on right: get catalog)
    //  * on keypress:
    //    * change to search tab
    //    * if searchquery length >= 3
    //    * set lastkeypress
    //    * set searchqueued = true
    //    * else
    //    * set searchqueued = false
    //    * on enter: immediately do search
    return (
        <div>
        </div>
    );
}

export default Search