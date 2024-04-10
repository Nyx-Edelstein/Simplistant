import "./App.css"

import MainContent from "../Modules/MainContent/MainContent"
import LoginPanel from "../Modules/LoginPanel/LoginPanel"

function App() {

    //Check if logged in
    var loggedIn = false;

    //Attempt to log in if not

    //Display login screen if not logged in
    //Otherwise, go to main page
    const content = loggedIn ? (<MainContent/>) : (<LoginPanel/>);

    //Main page:
    // - widget bar on left
    // - workspace in center
    // - omnisearch in top
    // - name and profile button in top left
    return (
        <div>
            <img src="/src/assets/Simplistant-Logo.png" height="128" alt=""></img>
            <p>Hello</p>
        </div>
    );
}

export default App
