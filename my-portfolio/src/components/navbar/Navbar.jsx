import React, { useRef, useState } from 'react'
import './Navbar.css'
import image from '../../assets/img.avif'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const menuRef = useRef()

  //jab right zero hoga toh right menu display hoga
  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }
  return (
    <div className='navbar'>
      <h1>UmeHania</h1>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img className="nav-mob-close" src={menu_close} onClick={closeMenu} alt="" />
        <li><p onClick={() => setMenu("home")}>Home</p>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>
        <li><a href="#about"><p onClick={() => setMenu("about")}>About Me</p>{menu === "about" ? <img src={underline} alt='' /> : <></>}</a></li>
        <li><a href="#service"><p onClick={() => setMenu("service")}>Service</p>{menu === "service" ? <img src={underline} alt='' /> : <></>}</a></li>
        <li><a href="#myportfolio"><p onClick={() => setMenu("myportfolio")}>My Portfolio</p>{menu === "myportfolio" ? <img src={underline} alt='' /> : <></>}</a></li>
        <li><a href="#contact"><p onClick={() => setMenu("contact")}>Contact Me</p>{menu === "contact" ? <img src={underline} alt='' /> : <></>}</a></li>
      </ul>
      <a href="mailto:umehania.shahid@gmail.com"><div className="nav-connect">Connect With Me</div></a>
    </div>
  )
}

export default Navbar
