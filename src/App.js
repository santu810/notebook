import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import NoteState from './context/NoteState';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[alert,setalert]=useState(null);
const showalert=(Message,type)=>{
  setalert({
    msg:Message,
    type:type
  })
  setTimeout(() => {
    setalert(null);
  }, 2000)
}
  return (
    <div>
      <NoteState showalert={showalert}>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
           <div className="container">
          <Routes>

            <Route  path="/home" element={<Home showalert={showalert}/>} />
            <Route  path="/about" element={<About />} />
            <Route  path="/login" element={<Login showalert={showalert}/>} />
            <Route  path="/signup" element={<Signup showalert={showalert}/>} />
          </Routes>
          </div>
        </Router>
      </NoteState>





    </div>
  );
}

export default App;
