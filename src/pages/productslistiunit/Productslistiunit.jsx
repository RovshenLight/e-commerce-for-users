import React from 'react'
import './productslistiunit.css'
import Navbar from '../../compounts/navbar/Navbar'
import Ads from '../../compounts/ads/Ads'
import Email from '../../compounts/email/Email'
import Footer from '../../compounts/footer/Footer'

const Productslistiunit = () => {
  return (
    <div className='productslistiunit'>
      <Navbar />
      <Ads />
      <div className="prolistunit">
        <div className="img">
        <img src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" alt="Clothe" />
        </div>
        <div className="cont">
          <h1>Denim Jumpsut</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis neque illo. Quidem dolores, excepturi ipsum impedit magni eius labore in pariatur perspiciatis, iure ipsam, et repellat porro reprehenderit earum optio architecto numquam incidunt ut natus commodi! Doloribus, maiores nemo laboriosam tenetur veniam hic, odio, quasi explicabo quis earum rerum?</p>
          <span>$20.00</span>
          <div className='pro_unit_select'>
            <div className='pro_unit_colors'>
              <span>Color:
                <span className='pro_unit_color'></span>
                <span className='pro_unit_color'></span>
                <span className='pro_unit_color'></span>
              </span>
              <div>
                <span>Size:</span>
                <select>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                  <option value="">XXL</option>
                </select>
              </div>
            </div>
            <div className='pro_unit_counts'>
              <div className="pro_unit_bag">
                <a href="/">+</a><span>1</span><a href="/">-</a>
              </div>
              <button>Add to bag</button>
            </div>
          </div>
        </div>
      </div>
      <Email />
      <Footer />
    </div>
  )
}

export default Productslistiunit