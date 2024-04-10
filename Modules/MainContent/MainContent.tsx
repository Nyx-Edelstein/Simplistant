import "./MainContent.css"

import Logo from "Assets/logo.png"

interface Props {

}

const MainContent: React.FC<Props> = (): JSX.Element => {
    //Main content:
    // - widget bar on left
    // - workspace in center
    // - omnisearch in top
    // - name and profile button in top left
    return (
        <div>
            <img src={Logo} height="128" alt=""></img>
            <p>Hello</p>
        </div>
    );
}

export default MainContent