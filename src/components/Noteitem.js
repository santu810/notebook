import React from 'react'

function Noteitem(props) {
    const {note}=props;
  return (
    <div className='col-md-3'>
      <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <p className="card-text">{note.tag}</p>
   <i className="fa-sharp fa-solid fa-trash mx-3" style={{cursor:"pointer"}}></i>
   <i className="fa-regular fa-pen-to-square" style={{cursor:"pointer"}}></i>
  
  </div>
</div>
    </div>
  )
}
 
export default Noteitem
