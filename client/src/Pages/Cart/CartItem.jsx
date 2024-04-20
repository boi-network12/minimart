import React from 'react';

const CartItem = (props) => {
  const { data } = props; // Destructure props to access data and quantity

  return (
    <div className='cartItem'>
      <img src={data.img} alt={data.id} /> {/* Render the product image */}
      <div>
        <p>{data.Title}</p> {/* Render the product title */}
        <p>Price: ${data.price}</p> {/* Render the product price */}
      </div>
    </div>
  );
};

export default CartItem;
