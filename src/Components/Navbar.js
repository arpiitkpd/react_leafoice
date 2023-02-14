import React from 'react'

function Navbar() {
  return (
   

    <nav className="nav d-flex justify-content-around">
    
      <span className="logo" href="/">LEAFOICE  <i className="fa-solid fa-leaf"></i></span>
      
      <div className="mid-sec">
      <a className="homebtn btn" href="/">Home</a>
      <a className="categoriesbtn btn" href="/">Categories</a>
      <a className="shopbtn btn" href="/">Shop</a>
      </div>
      <a className="contactbtn" href="/">Contact</a>
    
  </nav>
  )
}

export default Navbar