import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState=(props)=>{
    
const notesIntial=[
    {
      "_id": "65fb2509da877cdf24ad3f32",
      "user": "65f9d3e2bc6e4328daad330a",
      "title": "santu biopic",
      "description": "inspiration",
      "tag": "biopic",
      "date": "2024-03-20T18:03:53.915Z",
      "__v": 0
    },
    {
      "_id": "65fb2509da877cdf24ad3f32",
      "user": "65f9d3e2bc6e4328daad330a",
      "title": "santu biopic",
      "description": "inspiration",
      "tag": "biopic",
      "date": "2024-03-20T18:03:53.915Z",
      "__v": 0
    },
    {
      "_id": "65fb2509da877cdf24ad3f32",
      "user": "65f9d3e2bc6e4328daad330a",
      "title": "santu biopic",
      "description": "inspiration",
      "tag": "biopic",
      "date": "2024-03-20T18:03:53.915Z",
      "__v": 0
    },
    {
      "_id": "65fb2509da877cdf24ad3f32",
      "user": "65f9d3e2bc6e4328daad330a",
      "title": "santu biopic",
      "description": "inspiration",
      "tag": "biopic",
      "date": "2024-03-20T18:03:53.915Z",
      "__v": 0
    }
  ]
        const [notes,setnotes]=useState(notesIntial);

   const addnote=(title,description,tag)=>{
    const note= {
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
    return(
         <NoteContext.Provider value={{notes,addnote}}>
          {props.children}
         </NoteContext.Provider>

    )
}
export default NoteState;