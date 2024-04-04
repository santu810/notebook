import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props) => {
  const url = "http://localhost:5000"
  const notesIntial = [];

  const getnote = async () => {

    const response = await fetch(`${url}/api/notes/fetchnotes`, {
      method: "GET",


      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjlkM2UyYmM2ZTQzMjhkYWFkMzMwYSIsImlhdCI6MTcxMDk1Nzg2NH0.uaz9IErot_qINZcb3c0dieC3xMrkqsXxo5PRKMKUgzY"
      },


    });
    const json = await response.json();
    console.log(json);
    setnotes(json);
  }

  const [notes, setnotes] = useState(notesIntial);

  const addnote = async (title, description, tag) => {


    const response = await fetch(`${url}/api/notes/addnotes`, {
      method: "POST",


      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjlkM2UyYmM2ZTQzMjhkYWFkMzMwYSIsImlhdCI6MTcxMDk1Nzg2NH0.uaz9IErot_qINZcb3c0dieC3xMrkqsXxo5PRKMKUgzY"
      },

      body: JSON.stringify(title, description, tag)
    });

    const json = response.json();
    const note = {
      "_id": "65fb2509da877cdf24ad3f32",
      "user": "65f9d3e2bc6e4328daad330a",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-03-20T18:03:53.915Z",
      "__v": 0
    };
    setnotes(notes.concat(note));
  }

  const deletenote = async (id) => {


    const response = await fetch(`${url}/api/notes/deletenotes/${id}`, {
      method: "POST",


      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjlkM2UyYmM2ZTQzMjhkYWFkMzMwYSIsImlhdCI6MTcxMDk1Nzg2NH0.uaz9IErot_qINZcb3c0dieC3xMrkqsXxo5PRKMKUgzY"
      },


    });
    const json = response.json();

    const newnotes = notes.filter((note) => { return note._id !== id })
    setnotes(newnotes)
  }

  const editnote = async (id, title, description, tag) => {


    const response = await fetch(`${url}/api/notes/updatenotes/${id}`, {
      method: "POST",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjlkM2UyYmM2ZTQzMjhkYWFkMzMwYSIsImlhdCI6MTcxMDk1Nzg2NH0.uaz9IErot_qINZcb3c0dieC3xMrkqsXxo5PRKMKUgzY"
      },


    });
    const json = response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag
      }
    }
  }

  return (
    <NoteContext.Provider value={{ notes, addnote, deletenote, editnote, getnote }}>
      {props.children}
    </NoteContext.Provider>

  )
}
export default NoteState;