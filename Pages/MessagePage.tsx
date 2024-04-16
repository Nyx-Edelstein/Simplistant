import Page from "Enum/Page"
import "./MessagePage.css"

interface Props {
    visible: boolean;
    load: (page: Page) => void;
    title: string;
    message: string;
    type: "info" | "success" | "warning" | "error";
}

const MessagePanel: React.FC<Props> = ({ visible, load, title, message, type }): JSX.Element => {
    load;
    const color = `bg-${type}`;
    return visible ? (
        <div>
            <input type="checkbox" id="message_modal" className="modal-toggle" checked/>
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className={color}>
                        <h1 className="font-bold">{title}</h1>
                    </div>
                    <div className="bg-base-200">
                        <p>{message}</p>
                        <br/>
                        <p>Please try again later. If the problem persists, contact the site administrator.</p>
                    </div>
                </div>
            </div>
        </div>
    ) : (<div></div>);
}

export default MessagePanel