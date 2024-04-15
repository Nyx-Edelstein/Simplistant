import "./MainContent.css"

import Logo from "Assets/logo.png"

interface Props {

}

const MainContent: React.FC<Props> = (): JSX.Element => {
    return (
        <div>
            <img src={Logo} height="128" alt=""></img>
            <p>Hello</p>
        </div>
    );
}

export default MainContent