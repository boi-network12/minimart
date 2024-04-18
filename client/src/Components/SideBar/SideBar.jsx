import React from 'react'
import './sideBar.css'
import FlagImg from '../../Assets/NIGERIA-FLAG.png'
import { Link } from 'react-router-dom'
import { FaCartArrowDown, FaGift, FaHeart, FaMobile, FaNewspaper } from 'react-icons/fa'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sideBarImg">
            <Link to='/'><h3>App name</h3></Link>
            <img src={FlagImg} alt="the country" />
        </div>
        <div className="section1">
            <Link to=''><p><FaHeart /> <span>Saved items</span> <aside></aside></p></Link>

            <Link to=""><p><FaCartArrowDown /> <span>orders</span> <aside>1</aside></p></Link>

            <Link to=""><p><FaGift /> <span>voucher</span> <aside></aside></p></Link>

            <Link to=""><p><FaNewspaper /> <span>pending review</span> <aside></aside></p></Link>
        </div>

        <div className="section2">
            <i>our categories</i>

            <Link to=''><aside><FaMobile/> <span>phone and tablets</span></aside></Link>
        </div>
    </div>
  )
}

export default SideBar