import * as React from "react";

import * as DTO from "API/dto";
import "./NoteEdit.css"

interface Props {
    note: DTO.Note
}

const NoteEdit: React.FC<Props> = ({ note }): JSX.Element => {
    note;
    return (
        <div>
        </div>
    );
}

export default NoteEdit