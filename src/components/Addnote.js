import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext'

function Addnote() {
    const [note,setnote]=useState({title:"",description:"",tag:""});
    const {addnote}=useContext(NoteContext);
   const handleclick=(e)=>{
           e.preventDefault();
        addnote(note.title,note.description,note.tag);
   }
   const onchange=(e)=>{
     setnote({...note,[e.target.name]:e.target.value})
   }
  return (
    <div>
      <h2>Add a note</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" name='title' onChange={onchange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea className="form-control" id="description" name='description' rows="2" onChange={onchange}></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">tag</label>
        <textarea className="form-control" id="tag" name='tag' rows="2" onChange={onchange}></textarea>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
    </div>
  )
}

export default Addnote
