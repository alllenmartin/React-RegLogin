import './style.css';
import {useState } from "react";
import { useNavigate } from 'react-router-dom';


function App() {
  let navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser (event) {
    event.preventDefault()
  
    const response = await fetch('http://localhost:8012/api/register', {
      method:'POST',
      
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,email,password
      }),
    })
    const data = await response.json() 
    
    
		if (data.status === 'Okay') {
		  navigate('/login')
		}
    
  }

  
  return (
    <div className='container'>

    <form id="signup" onSubmit={registerUser}>

        <div className='header'>
        
            <h3>Sign Up</h3>
            
            <p>You want to fill out this form</p>
            
        </div>
        
        <div className='sep'></div>

        <div className='inputs'>
           <input type="username" value={username} onChange= {(e)=> setUsername(e.target.value)} placeholder="Username" autoFocus />

            <input type="email" value={email} onChange= {(e)=> setEmail(e.target.value)}  placeholder="Email Address" autoFocus />
        
            <input type="password" value={password} onChange= {(e)=> setPassword(e.target.value)} placeholder="Password" />
            
            <div className='checkboxy'>
                <input name="cecky" id="checky" value="1" type="checkbox" /><label className='terms'>I accept the terms of use</label>
            </div>
            
            <input type="submit" id='submit' value="Register"/>
        
        </div>

    </form>

</div>
  );
}

export default App;
