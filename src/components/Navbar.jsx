import React from 'react'
import './Navbar.css'
import logo from '../Images/10_links-removebg-preview.png'


function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt='logo' className='logo'/>
      <input type='search' className='search'/>
      <i class="fa-solid fa-globe"></i>
      <i class="fa-solid fa-user"></i>
      <i class="fa-regular fa-heart"></i>
      <i class="fa-solid fa-bag-shopping"></i>
    </div>
  )
}

export default Navbar
