import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateNote from "./CreateNote";

const NoteBox = (Props) => {
    const onDelete=()=>{
        
        Props.delete(Props.id);

    }
    return (
        <>
            <div className="box2">
                <h2 style={{ borderBottom: "1pt solid black", fontSize: "20px" }}> {Props.addNote.title}</h2>
                <div style={{ width: "95%", height: "90%", textAlign: "center" }}>
                    {Props.addNote.text}
                </div>

                <button onClick={onDelete} style={{ alignSelf: "center" }}><DeleteForeverIcon /></button>
            </div>
        </>
    );
}

export default NoteBox;
