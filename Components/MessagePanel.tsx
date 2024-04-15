import "./MessagePanel.css"

import { useState, useMemo } from "react"
import { Button, Modal } from "react-daisyui";

interface Props {
    title: string;
    message: string;
    type: "info" | "success" | "warning" | "error";
}

const MessagePanel: React.FC<Props> = ({ title, message, type }): JSX.Element => {
    const [visible, setvisible] = useState<boolean>(true);
    useMemo(() => {
        console.log("hi");
    }, [])
    return (
        <div>
            <Modal open={visible}>
                <Modal.Header>{title}</Modal.Header>
                <Modal.Body>
                    {message}
                </Modal.Body>
                <Modal.Actions>
                    <Button color={type} onClick={() => setvisible(false)}>Ok</Button>
                </Modal.Actions>
            </Modal>
        </div>
    );
}

export default MessagePanel