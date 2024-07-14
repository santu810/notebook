import React from 'react';
import {Link,useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  let navigate=useNavigate()
  const logout=()=>{
    localStorage.removeItem('authtoken');
    navigate('/login')
  }
  let location=useLocation();
  React.useEffect(() => {

  }, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/home"? "active":""}`} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active":""}`} to="/about">About</Link>
        </li>
      </ul>

      {(!localStorage.getItem('authtoken'))?<div className="position-absolute top-0 end-0">
        <Link className="btn btn-dark my-2 mx-2" to="/login" role="button">Login</Link>
        <Link className="btn btn-dark my-2 mx-2" to="/signup" role="button">Signup</Link>
          </div>:<div className="position-absolute top-0 end-0">
            <button className='btn btn-dark my-2 mx-2' onClick={logout}>Logout</button></div>
        }
        
        
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
