import { useState, useEffect } from "react"

import * as API from "API/api"
import Page from "Enum/Page"
import Logo from "Assets/logo.png"
import "./MainContent.css"

interface Props {
    visible: boolean;
    load: (page: Page) => void;
}

const MainContent: React.FC<Props> = ({ visible, load }): JSX.Element => {
    load;

    const [Username, setUsername] = useState<string>("");

    useEffect(() => {
        API.GetCurrentUser().then(result => {
            if (typeof result == "number")  {
                //shouldn't ever happen
            } else if (typeof result == "string") {
                setUsername(result);
            }
        });  
    }, []);

    return visible ? (
        <div style={{width: 325}}>
            <img src={Logo} alt=""></img>
            <h1>Hello, {Username}.</h1>
            <br />
            <p>This site is still in progress. Come back later.</p>
        </div>
    ) : (<div></div>);
}

export default MainContent