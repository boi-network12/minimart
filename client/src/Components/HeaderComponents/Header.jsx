import React, { useState } from 'react'
import './header.css'
import { FaBars, FaCartPlus, FaChevronDown, FaTimes, FaUserCircle } from  'react-icons/fa'
import { Link } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import '../ProductContainer/ProductContainer.css'

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isSideBar, setIsSideBar ] = useState(false);

  /** search button */
  const handleClick = (e) => {
    e.preventDefault()
  }

  /**toggle account */
  const handleToggle = () => {
    setIsToggle(!isToggle);
    if(isSideBar){
      setIsSideBar(false);
    }
  }

  /**side bar */
  const handleSideBard = () => {
    setIsSideBar(!isSideBar);
    if(isToggle){
      setIsToggle(false);
    }
  }


  return (
    <div className='header'>
      <div className="block1" onClick={handleSideBard}>
        
         {isSideBar ? <FaTimes /> : <FaBars />}
        
      </div>
       {isSideBar && (
          <SideBar />
         )}
      <div className="block2">
        <Link to='/'><h1>App</h1></Link>
      </div>
      <div className="block3 searchInput">
        <form action="">
        <input type="text" placeholder='search products, brands and categories'/>
        <button onClick={handleClick}>Search</button>
        </form>
      </div>
      <div className="blockDiv">
        <div className="block4" onClick={handleToggle}>
          <p><FaUserCircle /> <span>Account</span> </p>
          <FaChevronDown className='arrowDown' />
          
        </div>
        {isToggle && (
            <div className="accountPopup">
               <Link to='/login'><p>Login/signUp</p></Link>
            </div>
          )}
        <div className="block5">
        <p><FaCartPlus /> <span>Cart</span> <aside>1</aside></p>
        </div>
      </div>
    </div>
  )
}

export default Header