import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props) => {
  const url = "http://localhost:5000"
  const notesIntial = [];
  const [notes, setnotes] = useState(notesIntial);

  //getnotes
  const getnote = async() => {
    const response = await fetch(`${url}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('authtoken')
      },
    });
    const json = await response.json();
    setnotes(json);
  }

  
     //addnotes
  const addnote = async (title, description, tag) => {
    const response = await fetch(`${url}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('authtoken')
      },
      body: JSON.stringify({title, description, tag})
    });
    const note= await response.json()
    setnotes(notes.concat(note));
  }

  //deletenotes
  const deletenote = async (id) => {
    const response = await fetch(`${url}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('authtoken')
      },
    });
    
    console.log(response);
    const newnotes = notes.filter((note) => { return note._id !== id })
    setnotes(newnotes)
  }


     //editnotes
  const editnote = async (id, title, description, tag) => {
    const response = await fetch(`${url}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('authtoken')
      },
    });
    console.log(response);
    let newNotes=JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag
        break;
      }
      
    }
    setnotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addnote, deletenote, editnote, getnote }}>
      {props.children}
    </NoteContext.Provider>

  )
}
export default NoteState;