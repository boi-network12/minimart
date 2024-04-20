// ProductContainer.js
import React, { useContext, useState } from 'react';
import './ProductContainer.css';
import CloudPic from '../../Assets/cloud.jpeg';
import { FaCartPlus } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Details } from '../../Constant/ProductDetails';
import { InfoDisplay } from '../../Constant/InfoDisplay';
import { ShopContext } from '../../Context/ShopContext';

const ProductContainer = () => {
    const { addToCart, cartItem } = useContext(ShopContext);
    const [clicked, setIsClicked] = useState(false);
    const cartItemAmount = cartItem;

    const handleClick = () => {
        setIsClicked(!clicked);
    };

    return (
        <div className='ProductContainer'>
            <div className='moveText'>
                <p className='textIn'>
                    {InfoDisplay.map((info) => (
                        <React.Fragment key={info.id}>
                            <p>{`Email : ${info.Mail}     Number ${info.Number}`}</p>
                            
                        </React.Fragment>
                    ))}
                </p>
            </div>

            <div className='containerGrid'>
                {Details.map((product) => (
                    <div className='eachContainer' key={product.id}>
                        <div className='image'>
                            <img src={product.img} alt={product.id} />
                        </div>
                        <div className='details'>
                            <div className='productDetails'>
                                <p className='productName'>{product.Title}</p>
                                <p className='productPrice'>${product.price}</p>
                                <span className='fakePrice'>${product.fakePrice}</span>
                            </div>
                            <div className='cartLike'>
                                <p
                                    className={`cartLikeIn ${clicked ? 'clicked' : ''}`}
                                    onClick={handleClick}>
                                    <FontAwesomeIcon icon={faHeart} className='iconHeart' />
                                    <span>Add to wishlist</span>
                                </p>
                                <p onClick={() => addToCart(product.id)}>
                                    <FaCartPlus /> Add to cart
                                    {cartItemAmount[product.id] > 0 && (
                                        <> ({cartItemAmount[product.id]})</>
                                    )}
                                </p>
                            </div>
                            <div className='user'>
                                <img src={CloudPic} alt='' />
                                <p>user name</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductContainer;
