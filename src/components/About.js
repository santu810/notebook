import React,{useContext} from 'react'
import NoteContext from '../context/NoteContext';



function About() {
  const context=useContext(NoteContext);
  return (
    <div>
      <h1>this is about {context.name} and {context.class}</h1>
    </div>
  )
}

export default About
