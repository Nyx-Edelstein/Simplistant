import { useMemo, useState } from "react";
import "./App.css"

import MainContent from "Modules/MainContent/MainContent"
import LoginPanel from "Modules/LoginPanel/LoginPanel"
import ErrorPanel from "Modules/ErrorPanel/ErrorPanel"

import { LoggedIn } from "api";

function App() {

    const [loggedIn, setloggedIn] = useState<boolean>(false);
    const [errorMessage, seterrorMessage] = useState<string>("");

    //Check if logged in
    //Attempt to log in if not
    //Display login screen if not logged in
    //Otherwise, go to main content
    useMemo(() => {
        LoggedIn().then(result => {
            if (typeof result == "string") {
                seterrorMessage(result);
            } else if (typeof result == "boolean") {
                setloggedIn(result);
            }
        });
    }, []);
    
    const content = (loggedIn ? <MainContent /> : errorMessage === "" ? <LoginPanel/> : <ErrorPanel message={errorMessage}/>);
    return <div>{content}</div>;
}

export default App
