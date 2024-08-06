import React from 'react'
import './products.css'
import Productsunit from './Productsunit'
import { products } from '../../data/data'

const Products = ({pro, img}) => {
  return (
    <div className='products'>
      {products.map((pro) => <Productsunit key={pro.id} pro={pro} img={pro.img} />)}
    </div>
  )
}

export default Products