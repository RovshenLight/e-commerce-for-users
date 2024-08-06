import React from 'react'
import './regist.css'

const Regist = () => {
  return (
    <div className='regist'>
      <div className="regist_inner">
        <h1>Create An Account</h1>
        <form>
          <div className="form">
            <div className="form_left">
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Lastname' />
            <input type="password" placeholder='Password' />
            </div>
            <div className="form_right">
            <input type="password" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Confirm password' />
            </div>
          </div>
          <p>By creating an account. I consent to the processing of my data in accordance with the <span>PRIVACE POLICY</span></p>
          <button>Create</button>
        </form>
      </div>
    </div>
  )
}

export default Regist