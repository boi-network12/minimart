import React, { createContext, useState } from 'react'
import { Details } from '../Constant/ProductDetails';
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i < Details.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}

export const ShopContextProvider = (props) => {
   const [cartItem, setCartItem] = useState(getDefaultCart());

   const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
};

const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

};

const getTotal = () => {
    return Object.keys(cartItem).reduce((total, itemId) => {
        const item = Details.find((product) => product.id === parseInt(itemId));
        if (item && item.price) {
            return total + (item.price * cartItem[itemId]);
        }
        return total; // Return total unchanged if item or item.price is undefined
    }, 0);
};


   const contextValue = {cartItem, addToCart, removeFromCart, getTotal};
   

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}