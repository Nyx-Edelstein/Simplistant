import { useState } from "react"

import Page from "Enum/Page"
import Content from "Enum/Content"
import Notes from "Components/Notes"
import AccountSettings from "Components/AccountSettings"

import NotesIcon from "Assets/notes.png";
import AccountSettingsIcon from "Assets/account_settings.png";
import "./ContentPage.css"

interface Props {
    load: (page: Page) => void;
}

const ContentPage: React.FC<Props> = ({ load }): JSX.Element => {
    load;

    const [CurrentContent, setCurrentContent] = useState<Content>(Content.Notes);

    const onNotesClicked = (_: React.MouseEvent<HTMLAnchorElement>): void => {
        setCurrentContent(Content.Notes);
    }

    const onSettingsClicked = (_: React.MouseEvent<HTMLAnchorElement>): void => {
        setCurrentContent(Content.Settings);
    }

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