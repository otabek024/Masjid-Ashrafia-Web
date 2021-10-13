import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="container" id="home">
      <div className="wrapper">
        <div className="left">
          <div className="logo">Inha Masjid</div>
            <ul className="menu">
              <a href="#home" className="n-link"><li className="menu-item">Home</li></a>
              <a href="#donation" className="n-link"><li className="menu-item">Donation</li></a>
              <a href="#prayer" className="n-link"><li className="menu-item">Praying Times</li></a>
              <a href="#contact" className="n-link"><li className="menu-item">Contact</li></a>
            </ul>
            
        </div>
        <a href="https://t.me/inha_masjid" className="btn">JOIN US</a>
      </div>
    </div>
  )
}

export default Navbar
