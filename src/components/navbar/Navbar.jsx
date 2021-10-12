import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <div className="logo">Masjid Ashrafia</div>
            <ul className="menu">
              <li className="menu-item">Home</li>
              <li className="menu-item">Donation</li>
              <li className="menu-item">Praying Times</li>
              <li className="menu-item">Contact</li>
            </ul>
            
        </div>
        <button className="btn">JOIN TODAY</button>
      </div>
    </div>
  )
}

export default Navbar
