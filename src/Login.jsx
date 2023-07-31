import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Login() {
    const navigate = useNavigate();
    const [validation, setValidation] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("user"));
        console.log(storedUser);
      
        if (storedUser && storedUser.email === email && storedUser.password === password) {
          localStorage.setItem("logged in", true);
          console.log(storedUser.email);
          navigate('/home');
        } else {
          setValidation("User data not found.");
        }
      };
      
    
    
  
  return (
    <div>
            
        <form onSubmit={handleLogin}>
          
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={handleEmailChange} autoComplete="email" required />
        
         
            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} autoComplete="current-password" required />
          
          {validation && <div className='span' >{validation}</div>}
          <button type="submit"  onClick={handleLogin}>
            Log In 
          </button>
        </form>
        <div >
          Don't have an account? 
        </div>
      </div>

   
  )
}

export default Login
