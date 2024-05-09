import { useState } from "react"

import * as API from "API/api"
import * as DTO from "API/dto"
import Page from "Enum/Page"
import Content from "Enum/Content"
import Notes from "Components/Notes"
import AccountSettings from "Components/AccountSettings"

import AccountSettingsIcon from "Assets/account_settings.png";
import NotesIcon from "Assets/notes.png";
import LogoutIcon from "Assets/logout.png";
import "./ContentPage.css"

interface Props {
    load: (page: Page) => void;
}

const ContentPage: React.FC<Props> = ({ load }): JSX.Element => {
    const [CurrentContent, setCurrentContent] = useState<Content>(Content.Notes);

    const onNotesClicked = (_: React.MouseEvent<HTMLAnchorElement>): void => {
        setCurrentContent(Content.Notes);
    }

    const onSettingsClicked = (_: React.MouseEvent<HTMLAnchorElement>): void => {
        setCurrentContent(Content.Settings);
    }

    const onLogoutClicked = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.persist();
        API.Logout().then(response => {
            if (typeof response === "number") {
                //Shouldn't ever happen
            }
            else if (typeof response === "string") {
                //Show an error??
            } else if (response.status === DTO.ResponseStatus.Success) {
                load(Page.Login);
            }
        });
    };

    return (
        <div className="main-content">
            <div className="sidebar bg-base-200 rounded">
                <div className="menu">
                    <ul>
                        <li>
                            <a className="tooltip tooltip-right" data-tip="Notes" onClick={onNotesClicked}>
                                <img src={NotesIcon} alt="" width="32px"></img>
                            </a>
                        </li>
                    </ul>
                </div>
                <div></div>
                <div className="menu">
                    <div className="divider"></div>
                    <ul>
                        <li>
                            <a className="tooltip tooltip-right" data-tip="Account Settings" onClick={onSettingsClicked}>
                                <img src={AccountSettingsIcon} alt="" width="32px"></img>
                            </a>
                            <a className="tooltip tooltip-right" data-tip="Logout" onClick={onLogoutClicked}>
                                <img src={LogoutIcon} alt="" width="32px"></img>
                            </a>
                        </li>
                    </ul>
                    <br />
                </div>
            </div>
            <div className="selected-component">
                {
                    CurrentContent === Content.Notes ? <Notes/>
                  : CurrentContent === Content.Settings ? <AccountSettings/>
                  : <div/>
                }
            </div>
        </div>
    );
}

export default ContentPage