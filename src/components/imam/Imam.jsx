import React from 'react'
import './imam.css'
import ImamImage from '../../img/mufti asim.jpg'

const Imam = () => {
  return (
    <>
      <div className="im-container">
        <div className="im-wrapper">
          <h1 className="im-title">Mufti Asim Khan</h1>
          <img src={ImamImage} alt="" className="im-img"/>
          <div className="im-content">
            <h2 className="im-info">Went to (Jamia ashrafia)</h2>
            <p className="im-info">
              Mufti at islamic scholar.
            </p>
            <h3 className="im-contact-me">Contact me</h3>
            <div className="social-icons">
            <a href="https://www.facebook.com/asim.muhammad.9231" className="im-icons"><i className="fab fa-facebook"></i></a>
            <a href="https://t.me/inha_masjid" className="im-icons"><i className="fab fa-telegram telegram-x"></i></a>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Imam
