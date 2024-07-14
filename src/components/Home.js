import React from 'react'
import Notes from './Notes';


function Home(props) {
  const {showalert}=props
  return (
    <div>
      <div className="container">
        <Notes showalert={showalert}/>
      </div>

    </div>
  )
}

export default Home
