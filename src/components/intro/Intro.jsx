import React from 'react'
import './intro.css'
import MasjidPhoto from '../../img/1111.png'
import AnimatedShapes from '../animations/AnimatedShapes'

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <h1 className="i-title">Welcome to Masjid Inha University</h1>
        <p className="i-desc">
          Masjid Ashrafia is locatad in Incheon, South Korea. 
          Specifically, it is close to Inha University. Our Masjid 
          is open all the time you can come and pray.  
        </p>
        <div className="i-info">
          <a href="#donation" className="i-btn">SUPPORT US</a>
          <div className="i-contact">
            <span className="i-phone">Call Us (+82) 2784 9922</span>
            <span className="i-contact-text">For any question or concern</span>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg-shape"></div>
        <img src={MasjidPhoto} alt="" className="i-img" />
        <AnimatedShapes />
      </div>
    </div>
  )
}

export default Intro
