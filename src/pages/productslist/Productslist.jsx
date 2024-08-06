import React from 'react'
import './productslist.css'
import Navbar from '../../compounts/navbar/Navbar'
import Ads from '../../compounts/ads/Ads'
import Email from '../../compounts/email/Email'
import Footer from '../../compounts/footer/Footer'
import Productsunit from '../../compounts/products/Productsunit'

const Productslist = () => {
  return (
    <div className='productslist'>
      <Navbar />
      <Ads />
      <h1>Dresses</h1>
      <div className="fillters">
        <div className="left">
          <span>Filter products:</span>
          <select>
            <option disabled>Color</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
          </select>
          <select>
            <option disabled>Size</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
            <option value="">XL</option>
          </select>
        </div>
        <div className="left">
          <span>Filter products:</span>
          <select>
            <option value="">Newest</option>
            <option value="">Populre</option>
            <option value="">Oldest</option>
          </select>
        </div>
      </div>
      <Productsunit />
      <Email />
      <Footer />
    </div>
  )
}

export default Productslist