import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav';
import Footer from "./Footer.jsx";
import CreateNote from './CreateNote';
import NoteBox from './NoteBox';
import react, { useState } from 'react';

function App() {
  const [allNotes, setAllNotes] = useState([]);

  const addItem = (note) => {
    setAllNotes((prev1) => {
      return [...prev1, note]
    });

  }

  const deleteNote = (id) => {


    const tempList = allNotes.filter((x, index) => index !== id);
    setAllNotes(tempList);
  }

  return (
    <>
      <Nav />
      <div className='createNoteBox'>
        <CreateNote data={addItem} />
      </div>
      <div className='line'>
        <hr style={{ width: "70%", height: "0.2rem", align: "center" }}></hr>
      </div>
      <p className="h3" style={{ textAlign: "center" }}> Saved Notes</p>
      <div className='NoteBox'>
        {allNotes.map((val, index) => {
          return (
            <>
              <NoteBox
                key={index}
                id={index}
                addNote={val}
                delete={deleteNote}

              />
            </>
          );

        })}
        {/*  */}
      </div>
      <Footer />

    </>
  );
}

export default App;
