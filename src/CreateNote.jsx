import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        text: "",
    });

    const input = (event) => {
        const { name, value } = event.target;

        setNote((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });

    }
    const submitTask = (event) => {
        event.preventDefault();
        if (note.title!=="") {

            props.data(note);
            setNote(
                {
                    title: "",
                    text: ""
                }
            );


        }
        else{
            alert("Enter a Task")
        }

    }
    return (
        <>

            <div >
                <form className="box1" onSubmit={submitTask}>
                    <input className="input1" type="text" placeholder="Title" name="title" onChange={input} value={note.title}></input>

                    <textarea style={{fontSize:"1.5rem"}} rows={4} cols={41} placeholder="Enter the Details" onChange={input} name="text" value={note.text}></textarea>

                    <button style={{fontSize:"1.5rem"}} type="submit"><AddIcon/></button>

                </form>
            </div>

        </>
    );
}

export default CreateNote;
