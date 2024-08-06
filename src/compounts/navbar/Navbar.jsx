import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import logo from '../../assets/Logo.gif'
import { BiSearch } from 'react-icons/bi'
import { BiBasket } from 'react-icons/bi'
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {

  const [openBar, setOpenBar] = useState();

  return (
    <div className='navbar'>
      <nav>
      {openBar ? <IoClose className='mob_icone' onClick={() => setOpenBar(false)} /> : <IoMenu className='mob_icone' onClick={() => setOpenBar(true)} />}
      {openBar && (
              <div className="mobile_user scale-up-hor-left">
              <Link to='/Regist'>Sign Up</Link>
              <Link to='/Login'>Sign In</Link>
            </div>
          )}
        <div className="user">
          <Link to='/Regist'>Sign Up</Link>
          <Link to='/Login'>Sign In</Link>
        </div>
        <Link to='/'>
          <img className='logo' src={logo} alt="logo" />
          <span>The Light.</span>
        </Link>
        <div className='right'>
          <div className="search">
          <input type="search" id="search" />
          <BiSearch />
          </div>
          <div className="basket">
            <Link to='/Basket'><BiBasket badgeContent='3'/></Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar