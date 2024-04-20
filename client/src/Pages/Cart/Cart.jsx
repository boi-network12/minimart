import React, { useContext } from 'react'
import './Cart.css'
import { Details } from '../../Constant/ProductDetails'
import { ShopContext } from '../../Context/ShopContext'
import CartItem from './CartItem'

const Cart = () => {
  const { cartItem } = useContext(ShopContext);

  return (
    <div className='cart'>
      <h1>Your cart items </h1>
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

