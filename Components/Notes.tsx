import { useState, useEffect } from "react"
import PulseLoader from "react-spinners/PulseLoader";

import * as API from "API/api"

import Logo from "Assets/logo.png"
import "./Notes.css"

interface Props {

}

const Notes: React.FC<Props> = (): JSX.Element => {

    const [Username, setUsername] = useState<string>("");

    useEffect(() => {
        API.GetCurrentUser().then(result => {
            if (typeof result == "number") {
                //shouldn't ever happen
            } else if (typeof result == "string") {
                setUsername(result);
            }
        });
    }, []);

    const loadingElement = (
        <PulseLoader color="#1eccff" />
    );
    
    return (Username === "" ? loadingElement : (
        <div className="center-component">
            <div style={{ width: 325 }}>
                <img src={Logo} alt=""></img>
                <h1>Hello, {Username}.</h1>
                <br />
                <p>This site is still in progress. Come back later.</p>
            </div>
        </div>
    ));
}

export default Notes