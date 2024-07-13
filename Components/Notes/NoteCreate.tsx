import * as React from "react";

import NoteComponent from "Enum/NoteComponent";
import "./NoteCreate.css"

interface Props {
    load: (component: NoteComponent) => void;
}

const NoteCreate: React.FC<Props> = ({ load }): JSX.Element => {
    load;
    return (
        <div>
        </div>
    );
}

export default NoteCreate