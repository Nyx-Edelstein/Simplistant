import "./App.css"

import MainContent from "Modules/MainContent/MainContent"
import LoginPanel from "Modules/LoginPanel/LoginPanel"

function App() {

    //Check if logged in
    //Attempt to log in if not
    const loggedIn = true;

    //Display login screen if not logged in
    //Otherwise, go to main content
    return (
        <div>
            {loggedIn ? <MainContent /> : <LoginPanel />}
        </div>
    );
}

export default App
