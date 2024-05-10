import { useMemo, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

import * as API from "API/api";
import Page from "Enum/Page";
import LoginPage from "Pages/LoginPage"
import ContentPage from "Pages/ContentPage"
import ErrorPage from "Pages/ErrorPage"
import RecoverPage from "Pages/RecoverPage"
import RegisterPage from "Pages/RegisterPage"
import "./App.css"

function App() {
    var [LoggedIn, setLoggedIn] = useState<boolean>(false);
    var [Message, setMessage] = useState<string>("");
    const [CurrentPage, setCurrentPage] = useState<Page>(Page.Loading);

    const load = (page: Page) => {
        setCurrentPage(Page.Loading);
        if (page === Page.Content) {
            API.LoggedIn().then(result => {
                if (typeof result == "string") {
                    Message = result;
                    setMessage(Message);
                    //LoggedIn = true;
                    //setLoggedIn(true);
                } else if (typeof result == "number") {
                    //shouldn't ever happen
                    setMessage("Something went wrong.");
                } else {
                    LoggedIn = result;
                    setLoggedIn(result);
                }

                if (Message === "" && LoggedIn) {
                    setCurrentPage(Page.Content);
                } else if (Message === "" && !LoggedIn) {
                    setCurrentPage(Page.Login);
                } else {
                    setCurrentPage(Page.Error);
                }
            });
        } else {
            setCurrentPage(page);
        }
    }

    useMemo(() => {
        load(Page.Content);
    }, []);

    return (
        <div className="center-screen">
            {
                CurrentPage === Page.Loading ? <PulseLoader color="#1eccff" />
              : CurrentPage === Page.Login ? <LoginPage load={load}/>
              : CurrentPage === Page.Content ? <ContentPage load={load}/>
              : CurrentPage === Page.Error ? <ErrorPage load={load} message={Message}/>
              : CurrentPage === Page.Recover ? <RecoverPage load={load}/>
              : CurrentPage === Page.Register ? <RegisterPage load={load}/>
              : <ErrorPage load={load} message="Something went wrong. :/"/>
            }
        </div>
    );
}

export default App
