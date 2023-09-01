import React from 'react'
import Add from "../img/user_1177568.png"
const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
        <span className='logo'>Let's Talk</span>
        <span className='title'>Register</span>
        <form>
            <input type='email' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            <button>Sign Up</button>
        </form>
        <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login