import React from 'react'
import './ProductContainer.css'
import Download from '../../Assets/dimg.jpg'

const ProductContainer = () => {
  return (
    <div className='ProductContainer'>
       <div className="moveText"><p className="textIn">Contact us: </p></div>

      <div className="containerGrid">
        <div className="eachContainer">
            <img src={Download} alt="" />
            <p>{`Product name`}</p>
        </div>

        <div className="eachContainer">
            <img src={Download} alt="" />
            <p>{`Product name`}</p>
        </div>
        
        <div className="eachContainer">
            <img src={Download} alt="" />
            <p>{`Product name`}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductContainer