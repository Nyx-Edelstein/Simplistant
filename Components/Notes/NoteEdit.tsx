import * as React from "react";

import NoteComponent from "Enum/NoteComponent";
import "./NoteEdit.css"

interface Props {
    load: (component: NoteComponent) => void;
}

const NoteEdit: React.FC<Props> = ({ load }): JSX.Element => {
    load;
    return (
        <div>
        </div>
    );
}

export default NoteEdit