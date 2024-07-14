import NoteContext from '../context/NoteContext'
import React, { useContext, useEffect,useRef,useState } from 'react'
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import { useNavigate } from 'react-router-dom';




function Notes(props) {
  let navigate = useNavigate();
  const context = useContext(NoteContext);
  const { notes, getnote,editnote} = context;
  const [note,setnote]=useState({id:"",etitle:"",edescription:"",etag:""})
  const ref=useRef(null)
  const refclose=useRef(null);

  const updatenote=(currentnote)=>{
      ref.current.click();
      setnote({id:currentnote._id,etitle:currentnote.title,
    edescription:currentnote.description,
    etag:currentnote.tag})
  }

  useEffect(() => {
    if(localStorage.getItem('authtoken')){
    getnote();
    }
     else{
      navigate('/login');
     }
    // eslint-disable-next-line
  }, []);

  const handleclick=(e)=>{
    e.preventDefault();
    editnote(note.id,note.etitle,note.edescription,note.etag)
    ref.current.click();
    props.showalert("Notes updated Succesfully","success");
    
}

const onchange=(e)=>{
setnote({...note,[e.target.name]:e.target.value})
}

  return (
    <>
      <Addnote showalert={props.showalert}/>

      
<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="mb-3">
        <label htmlFor="etitle" className="form-label">Title</label>
        <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onchange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="edescription" className="form-label">Description</label>
        <textarea className="form-control" id="description" name='edescription' value={note.edescription} rows="2" onChange={onchange}></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="etag" className="form-label">tag</label>
        <textarea className="form-control" id="etag" name='etag' rows="2" value={note.etag} onChange={onchange}></textarea>
      </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" ref={refclose} className="btn btn-primary" onClick={handleclick}>Save changes</button>
      </div>
    </div>
  </div>
</div>
      <div className="row my-3">
        <h2>view notes</h2>
        {notes.map((note) => {
          return <Noteitem  key={note._id} showalert={props.showalert} updatenote={updatenote} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes
