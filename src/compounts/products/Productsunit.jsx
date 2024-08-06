import React from 'react'
import './products.css'
import { BiHeart } from 'react-icons/bi'
import { BiSearch } from 'react-icons/bi'
import { BsBasket2} from 'react-icons/bs'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Productsunit = ({pro, img}) => {
  return (
    <div className='productsunit'>
        <Link to='/Productslistiunit'><div className="bg"></div> 
        <img src={img} alt="clothe" />
      <div className="pro_icons">
        <Link to='/'><BsBasket2 /></Link>
        <Link to='/'><BiSearch /></Link>
        <Link to='/'><BiHeart /></Link>
      </div>
      </Link>
    </div>
  )
}

export default Productsunit