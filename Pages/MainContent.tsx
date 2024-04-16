import Page from "Enum/Page"

import "./MainContent.css"
import Logo from "Assets/logo.png"

interface Props {
    visible: boolean;
    load: (page: Page) => void;
}

const MainContent: React.FC<Props> = ({ visible, load }): JSX.Element => {
    load;
    return visible ? (
        <div className={visible ? "" : "hidden"}>
            <img src={Logo} height="128" alt=""></img>
            <p>Hello</p>
        </div>
    ) : (<div></div>);
}

export default MainContent