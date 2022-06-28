import './style.css';
import React, { useState } from "react";


function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser (event) {
    event.preventDefault()
  
    const response = await fetch('http://localhost:8012/api/login', {
      method:'POST',
      
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,password
      }),
    })
    const data = await response.json() 
  
    if(data.user)
    {
      localStorage.setItem('token', data.user)
      alert('Login Successful')
      window.location.href='/dashboard'
    }
    else
    {
      alert('Incorrect user name and password')
    }
    
  }

  
  return (
    <div className='container'>

    <form id="signup" onSubmit={loginUser}>

        <div className='header'>
        
            <h3>Sign Up</h3>
            
            <p>You want to fill out this form</p>
            
        </div>
        
        <div className='sep'></div>

        <div className='inputs'>
            <input type="email" value={email} onChange= {(e)=> setEmail(e.target.value)}  placeholder="Email Address" autoFocus />
        
            <input type="password" value={password} onChange= {(e)=> setPassword(e.target.value)} placeholder="Password" />
            
            <div className='checkboxy'>
                <input name="cecky" id="checky" value="1" type="checkbox" /><label className='terms'>I accept the terms of use</label>
            </div>
            
            <input type="submit" id='submit' value="Login"/>
        
        </div>

    </form>

</div>
  );
}

export default App;
