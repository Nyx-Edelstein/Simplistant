import * as React from "react";

import * as DTO from "API/dto";
import "./NoteCreate.css"

interface Props {
    note: DTO.Note
}

const NoteCreate: React.FC<Props> = ({ note }): JSX.Element => {
    note;
    return (
        <div>
        </div>
    );
}

export default NoteCreate