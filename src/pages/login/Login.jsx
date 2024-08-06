import React from 'react'
import './login.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Login = () => {
  return (
    <div className='login'>
    <div className="login_inner">
      <h1>Sign In</h1>
      <form>
          <input type="password" placeholder='Username' />
          <input type="password" placeholder='Password' />
        <button>Create</button>
      </form>
        <p><Link to='/'>DO NOT REMEMBER THE PASSWORD?</Link></p>
        <p><Link to='/'>Create New Account</Link></p>
    </div>
  </div>
  )
}

export default Login