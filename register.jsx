import React from 'react'
import Add from "../img/user_1177568.png"
const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
        <span className='logo'>Let's Talk</span>
        <span className='title'>Register</span>
        <form>
            <input type='text' placeholder='Display Name'></input>
            <input type='email' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            <input style={{display:"none"}} type="file" id='file'/>
            <label htmlFor="file">
                <img src={Add} alt="" />
                <span>Add an Avatar</span>
            </label>
            <button>Sign Up</button>
        </form>
        <p>Do you have an account?  Login</p>
        </div>
    </div>
  )
}

export default Register