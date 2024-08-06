import React from 'react'
import './basket.css'
import Navbar from '../../compounts/navbar/Navbar'
import Ads from '../../compounts/ads/Ads'
import Email from '../../compounts/email/Email'
import Footer from '../../compounts/footer/Footer'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Basket = () => {
  return (
    <div className='basket'>
      <Navbar />
      <Ads />
      <div className="basket_inner">
        <h1>Your Bag</h1>
        <div className="top">
          <button><Link to='/'>Continue Shopping</Link></button>
          <div className="top_center">
            <Link to='/'>Shopping Bag (2)</Link>
            <Link to='/'>Your Wishlist (0)</Link>
          </div>
          <button><Link to='/'>Checkout Now</Link></button>
        </div>
        <div className="bas_cont">
          <div className="bas_left">
            <div className="img">
            <img src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" alt="" />
            </div>
            <div className="bas_left_center">
              <div className="left_info">
              <span><span className='span'>Product:</span>Jessie Thunder Shoes</span>
              <span><span className='span'>ID:</span>76476448738843</span>
              <span className='color'></span>
              <span><span className='span'>Size:</span>M</span>
              </div>
            <div className="bas_left_count">
              <span className='count'>
                <a href='/'>+</a>
                1
                <a href='/'>-</a>
                </span>
              <span className='count'>$ 30</span>
            </div>
            </div>
          </div>
          <div className="bas_right">
            <div className="bas_right_cont">
              <h1>Order Summery</h1>
              <div className="bas_right_texts">
                <span>Subtotal <span>$80.0</span></span>
                <span>Estimated Shipping <span>$5.90</span></span>
                <span>Shipping Discount<span>-$5.90</span></span>
                <span>Total<span>$80.0</span></span>
              </div>
              <button>Checkout Now</button>
            </div>
          </div>
        </div>
      </div>
      <Email />
      <Footer />
    </div>
  )
}

export default Basket