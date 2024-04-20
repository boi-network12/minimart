import React, { useContext } from 'react'
import './Cart.css'
import { Details } from '../../Constant/ProductDetails'
import { ShopContext } from '../../Context/ShopContext'
import CartItem from './CartItem'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItem } = useContext(ShopContext);

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  }

  return (
    <div className='cart'>
       <div className="cartHeader">
         <h5><FaArrowLeft className='backIcon' onClick={handleCancel}/>shop</h5>
         <p className="price">${Details.total}</p>
       </div>
      <div className="cartItems">
        {Object.keys(cartItem).map((productId) => {
          const product = Details.find((item) => item.id === productId);
          if (cartItem[productId] !== 0 && product) {
            return <CartItem key={productId} data={product} quantity={cartItem[productId]} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart

