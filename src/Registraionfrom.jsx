import React from 'react'
import { useState } from 'react'
import { useParams,Link } from 'react-router-dom'

function Registraionfrom() {
    const data={
         name:'',
         email:'',
         password:''
    }
    const[regdata,setregdata]=useState(data);
    const [validationMsg,setValidationMsg] = useState()

    const change=(e)=>{
     const{value,name}=e.target
     setregdata((darft)=>({...darft,[name]:value}))
    }


    const Submit = () => {
      if (!regdata.name || !regdata.email || !regdata.password){
       setValidationMsg('please enter valid detials')
      }else{
        // setValidationMsg('Account created succesfully')
        localStorage.setItem('user',JSON.stringify(regdata));
  
     
        
    }
  }
  return (
    <div>
      <form >
        <label htmlFor="">Name</label>
        <input type="text" name='name' value={regdata.name}  onChange={change}/>
<br />
        <label htmlFor="">Email</label>
        <input type="email" name='email' value={regdata.email} onChange={change} />
<br />
        <label htmlFor="">Password</label>
        <input type="password" name='password' value={regdata.password} onChange={change}/>
        <br />
        <div className='msg'>{validationMsg}</div>
        <button onClick={Submit}>Register</button>

      </form>
    </div>
  )
}

export default Registraionfrom
