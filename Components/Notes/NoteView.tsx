import * as React from "react";

import * as DTO from "API/dto";
import "./NoteView.css"

interface Props {
    note: DTO.Note
}

const NoteView: React.FC<Props> = ({ note }): JSX.Element => {
    return (
        <h1>{note.title}</h1>
    );
}

export default NoteView