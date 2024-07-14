import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Signup(props) {
  let navigate = useNavigate();
  const[credit,setcredit]=useState({name:"",email:"",password:""})

  const handlebutton=async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({name:credit.name,email:credit.email,password:credit.password})
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      localStorage.setItem('authtoken',json.authtok);
      navigate('/home')
      props.showalert("Account created succesfully","success");
    }
    else{
      props.showalert("Enter valid details","danger");
    }
  }
  const onchange=(e)=>{
      setcredit({...credit,[e.target.name]:e.target.value})
      }
  return (
    <div>
    <h2>SignUp</h2>
      <form>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' value={credit.name} onChange={onchange} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' value={credit.email} onChange={onchange} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onchange} minLength={5}  name="password" value={credit.password} id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handlebutton}>Submit</button>
</form>
    </div>

    
  )
}

export default Signup
