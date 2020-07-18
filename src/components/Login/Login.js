import React,  {useState}  from 'react';
import fire from '../../config/config'

function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
   const handleLogin=(e)=> {
      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(email, password).then((u)=>{
      }).catch((error) => {
          console.log(error);
        });
    }
  
   const handleRegister=(e)=>{
      e.preventDefault();
      fire.auth().createUserWithEmailAndPassword(email, password).then((u)=>{
      }).then((u)=>{console.log(u)})
      .catch((error) => {
          console.log(error);
        })
    }
    
return(
    <div className="container mt-4">
  <h2>Please Login To Your Account</h2>
  <form className="was-validated">
    <div className="form-group">
      <label htmlFor="uname">Email:</label>
      <input type="email" className="form-control" id="uname" 
      onChange={e=>{setEmail(e.target.value)                
        }}
       placeholder="Enter username" 
       name="uname" 
       required />
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    <div className="form-group">
      <label htmlFor="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" onChange={e=>setPassword(e.target.value)} placeholder="Enter password" name="pswd" required />
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    
    <button onClick={handleLogin} className="mr-4 btn btn-primary">Login</button>
    <button onClick={handleRegister}  className="btn btn-primary">Register</button>
  </form>
</div>

)

}


export default Login