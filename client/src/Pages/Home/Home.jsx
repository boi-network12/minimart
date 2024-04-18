import React from 'react'
import './home.css'
import Header from '../../Components/HeaderComponents/Header'
import ProductContainer from '../../Components/ProductContainer/ProductContainer'
import '../../Components/ProductContainer/ProductContainer.css'

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <ProductContainer />
    </div>
  )
}

export default Home