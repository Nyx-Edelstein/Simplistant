import * as React from "react";

import NoteComponent from "Enum/NoteComponent";
import "./NoteView.css"

interface Props {
    load: (component: NoteComponent) => void;
}

const NoteView: React.FC<Props> = ({ load }): JSX.Element => {
    load;
    return (
        <div>
        </div>
    );
}

export default NoteView