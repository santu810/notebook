import React,{useContext} from 'react'
import NoteContext from '../context/NoteContext'

function Noteitem(props) {
    const {note,updatenote}=props;
    const context=useContext(NoteContext);
    const {deletenote}=context;
  return (
    <div className='col-md-3'>
      <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <p className="card-text">{note.tag}</p>
   <i className="fa-sharp fa-solid fa-trash mx-3" style={{cursor:"pointer"}}  onClick={()=>{deletenote(note._id)}}></i>
   <i className="fa-regular fa-pen-to-square"  style={{cursor:"pointer"}} onClick={()=>{updatenote(note)}}></i>
  
  </div>
</div>
    </div>
  )
}
 
export default Noteitem
