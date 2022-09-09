import React from 'react'
import { useSelector } from 'react-redux'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/homeScreen.css'

const HomeScreen = () => {


  const products = useSelector(state => state.products)



  return (
    <div className='home'>
      <div className='filters-home-products'>
        <h1>filters here</h1>
      </div>
      <div className='container-home-products'>
        <InputSearch />
        <div className='products-container'>
          {
            products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomeScreen