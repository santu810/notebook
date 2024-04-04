import NoteContext from '../context/NoteContext'
import React, { useContext, useEffect } from 'react'
import Noteitem from './Noteitem';
import Addnote from './Addnote';




function Notes() {
    const context=useContext(NoteContext);
    const {notes,addnote,getnote}=context;

    useEffect(() => {
     getnote()
    }, []);

  return (
    <>
    <Addnote/>
    <div className="row my-3">
  <h2>view notes</h2>
     {notes.map((note)=>{
      return <Noteitem  note={note}/>
     })}
</div>
</>
  )
}

export default Notes
