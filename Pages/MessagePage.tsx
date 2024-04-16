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
    return visible ? (
        <div>
            {title}
            {message}
            {type}
            {/*<Modal open={visible}>*/}
            {/*    <Modal.Header>{title}</Modal.Header>*/}
            {/*    <Modal.Body>*/}
            {/*        {message}*/}
            {/*    </Modal.Body>*/}
            {/*    <Modal.Actions>*/}
            {/*        <Button color={type}>Ok</Button>*/}
            {/*    </Modal.Actions>*/}
            {/*</Modal>*/}
        </div>
    ) : (<div></div>);
}

export default MessagePanel