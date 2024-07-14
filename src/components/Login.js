import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login(props) {
    
    let navigate = useNavigate();
    const[credit,setcredit]=useState({email:"",password:""})


    const handlebutton=async(e)=>{
      e.preventDefault();
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({email:credit.email,password:credit.password})
      });
      const json = await response.json();
      console.log(json);
      if(json.success){
        localStorage.setItem('authtoken',json.authtok);
        navigate('/home')
        props.showalert("logged in succesfully","success");
      }
      else{
        props.showalert("Enter correct credentials","danger");
      }
    }

    const onchange=(e)=>{
        setcredit({...credit,[e.target.name]:e.target.value})
        }
  return (
    <div>
      <form>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credit.email} onChange={onchange} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onchange}  name="password" value={credit.password} id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handlebutton}>Submit</button>
</form>
    </div>
  )
}

export default Login
