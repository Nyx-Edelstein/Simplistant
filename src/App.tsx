import { useMemo, useState } from "react";
import "./App.css"

import * as API from "../API/api";
import LoginPanel from "Components/LoginPanel"
//import MainContent from "Components/MainContent"
import MessagePanel from "Components/MessagePanel"
//import RegisterPanel from "Components/RegisterPanel"
//import SidePanel from "Components/SidePanel"

function App() {
    const [loggedIn, setloggedIn] = useState<boolean>(false);
    const [errorMessage, seterrorMessage] = useState<string>("");

    useMemo(() => {
        API.LoggedIn().then(result => {
            if (typeof result == "string") {
                seterrorMessage(result);
            } else if (typeof result == "boolean") {
                setloggedIn(result);
            }
        });
    }, []);

    const overlayPanel = !loggedIn && errorMessage === ""
        ? <LoginPanel/>
        : <MessagePanel title="Error" message={errorMessage} type="error"/>;

    return (
        <div>{overlayPanel}</div>
    );
}

export default App
