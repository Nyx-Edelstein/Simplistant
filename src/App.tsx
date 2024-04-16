import { useMemo, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

import * as API from "API/api";
import Page from "Enum/Page";
import LoginPage from "Pages/LoginPage"
import MainContent from "Pages/MainContent"
import MessagePage from "Pages/MessagePage"
import RecoverPage from "Pages/RecoverPage"
import RegisterPage from "Pages/RegisterPage"
import "./App.css"

function App() {
    const [LoggedIn, setLoggedIn] = useState<boolean>(false);
    const [Message, setMessage] = useState<string>("");
    const [CurrentPage, setCurrentPage] = useState<Page>(Page.Loading);

    const load = (page: Page) => {
        setCurrentPage(Page.Loading);
        if (page === Page.Main) {
            API.LoggedIn().then(result => {
                if (typeof result == "string") {
                    setMessage(result);
                } else if (typeof result == "number") {
                    //shouldn't ever happen
                } else {
                    setLoggedIn(result);
                }

                console.log(LoggedIn);
                console.log(Message);
                
                if (Message === "" && LoggedIn) {
                    setCurrentPage(Page.Main);
                } else if (Message === "" && !LoggedIn) {
                    setCurrentPage(Page.Login);
                } else {
                    setCurrentPage(Page.Message);
                }
            });
        } else {
            setCurrentPage(page);
        }
    }

    useMemo(() => {
        load(Page.Main);
    }, []);

    return (
        <div className="center-screen">
            {CurrentPage == Page.Loading ? (
                <PulseLoader color="#1eccff" />
            ) : (<div></div>)}
            <LoginPage visible={CurrentPage === Page.Login} load={load} />
            <MainContent visible={CurrentPage === Page.Main} load={load} />
            <MessagePage visible={CurrentPage === Page.Message} load={load}
                title="Error" message="Testing" type="error" />
            <RecoverPage visible={CurrentPage === Page.Recover} load={load} />
            <RegisterPage visible={CurrentPage === Page.Register} load={load} />
        </div>
    );
}

export default App
