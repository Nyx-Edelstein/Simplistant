import * as React from "react";
import { useState } from "react";

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

    const onSearchQueryChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        const query = e.currentTarget.value;
        setSearchQuery(query);
    };

    const SearchOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;
        search(SearchQuery, IncludeArchived);
    }

    return (
        <div>
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
        </div>
    );
}

export default Search