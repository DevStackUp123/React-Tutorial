import React from 'react'
import { useState } from 'react';
import { NavLink  } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function Register() {
    const data = {
        name : '',
        email : '',
        password : ''
      }
    
const [validationMsg,setValidationMsg] = useState()
const [signData,setSignData] = useState(data);
const navigate= useNavigate()

  const change = (e) => {
    console.log("e",e);
    const {value,name} = e.target;
    if (name === 'name'){
      setSignData((darft)=>({...darft,name:value}))
    }
    else if (name === 'email'){
      setSignData((darft)=>({...darft,email:value}))
    }
    else{
      setSignData((darft)=>({...darft,password:value}))
    }
  }
  const Submit = () => {
    if (!signData.name || !signData.email || !signData.password){
     setValidationMsg('please enter valid detials')
    }else{
      // setValidationMsg('Account created succesfully')
      localStorage.setItem('user',JSON.stringify(signData));

   
      navigate('/home');
  }
}


  return (
   <div>

     
      <div className="heading-section">
        <h3>Create your account</h3>
        <h5>let's get started with your 30 days free trail</h5>
      </div>
  
      <div className="input-section">
      <label htmlFor="Name">Name</label>
        <input type="text" name = 'name' placeholder='Enter your name' onChange={change}/>
        <label htmlFor="Email">Email</label>
        <input type="Email" name = 'email' placeholder='Enter your email' onChange={change}/>
       
        <label htmlFor="paasWord">Password</label>
        <input type="text" name = 'password' placeholder='Enter your password' onChange={change} />
      </div>
      <div className="btn-section">
        <div className='msg'>{validationMsg}</div>
        <button onClick={Submit}>Sign up</button>
      </div>
      <div className="login-section">
        <h5>Already have an account ? </h5> <h4><NavLink to="/login">Log in</NavLink></h4>
      </div>
     
      </div>


      
    
  )
}

export default Register
