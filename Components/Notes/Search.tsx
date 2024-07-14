import * as React from "react";
import { useMemo, useState } from "react";

import CatalogIcon from "Assets/catalog.png"
import IncludeArchivedIcon from "Assets/include_archived.png"
import ExcludeArchivedIcon from "Assets/exclude_archived.png"
import "./Search.css"

interface Props {
    getCatalog: () => void;
    search: (query: string, includeArchived: boolean) => void;
}

const Search: React.FC<Props> = ({ getCatalog, search }): JSX.Element => {
    const [SearchQuery, setSearchQuery] = useState<string>("");
    const [IncludeArchived, setIncludeArchived] = useState<boolean>(false);
    const [LastKeypress, setLastKeypress] = useState<number>(Date.now());
    var [SearchQueued, setSearchQueued] = useState<boolean>(false);

    useMemo(() => {
        //Every 100ms, check if a search is queued, and if so, do a search 2 seconds after the last keypress
        const interval = setInterval(() => {
            if (!SearchQueued) return;
            const elapsed = (Date.now() - LastKeypress);
            console.log(elapsed);
            if (elapsed <= 2000) return;
            console.log("Performing search:")
            console.log(SearchQuery)
            console.log(IncludeArchived)
            SearchQueued = false;
            setSearchQueued(false);
            search(SearchQuery, IncludeArchived);
            
        }, 100);

        //Clearing the interval to prevent memory leaks
        //(I don't know how this works it just does apparently)
        return () => clearInterval(interval);
    }, []);

    const onSearchQueryChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        const query = e.currentTarget.value;
        setSearchQuery(query);
        if (query.length >= 3) {
            setSearchQueued(true);
            setLastKeypress(Date.now());
        }
    };

    const SearchOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;
        search(SearchQuery, IncludeArchived);
        setSearchQueued(false);
    }

    return (
        <div className="search-bar">
            <button className="catalog-btn btn btn-neutral" onClick={_ => getCatalog()}>
                <div className="tooltip tooltip-right" data-tip="Get catalog (all notes)">
                    <img src={CatalogIcon} alt=""></img>
                </div>
            </button>
            <input type="text" placeholder="Search Notes..." className="search-input input input-bordered input-md flex w-full" value={SearchQuery} onChange={onSearchQueryChanged} onKeyDown={SearchOnEnter} />
            <label className="archive-btn btn btn-circle swap swap-flip">
                <input type="checkbox" checked={IncludeArchived} onChange={e => setIncludeArchived(e.target.checked)} />
                {
                    IncludeArchived
                        ? <div className="tooltip tooltip-left" data-tip="Include archived notes">
                            <img src={IncludeArchivedIcon} alt="" width="32px"></img>
                        </div>
                        : <div className="tooltip tooltip-left" data-tip="Exclude archived notes">
                            <img src={ExcludeArchivedIcon} alt="" width="32px"></img>
                        </div>
                }
            </label>
        </div>
    );
}

export default Search