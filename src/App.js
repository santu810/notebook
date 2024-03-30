import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <NoteState>
        <Router>
          <Navbar />
           <div className="container">
          <Routes>

            <Route  path="/home" element={<Home />} />
            <Route  path="/about" element={<About />} />
           
          </Routes>
          </div>
        </Router>
      </NoteState>





    </div>
  );
}

export default App;
