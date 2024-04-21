import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';


const CartItem = ({ item }) => {
  const { cart, updateCart } = useContext(ShopContext);

  const handleRemoveItem = () => {
    const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
    updateCart(updatedCart);
  };

  return (
    <div>
      <p>{item.name}</p>
      <button onClick={handleRemoveItem}>Remove</button>
      
    </div>
  );
};

export default CartItem;
