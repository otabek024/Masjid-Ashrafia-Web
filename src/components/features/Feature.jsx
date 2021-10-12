import React from 'react'
import styled from 'styled-components'
import './feature.css'
import donImg from '../../img/donation hand.png'


const Feature = () => {
  return (
    <>
      <div className="f-container">
        <div className="f-left">
          <img src={donImg} alt="" className="f-img"/>
          <b className="f-title">Ihsan will be rewarded by Paradise</b>
          <p className="f-desc">
            This is the reward of those people who have done good 
            deeds in the worldly life. <br /> <br /> 
            “For them who have done good is the best [reward] and 
            extra. No darkness will cover their faces, nor humiliation. 
            Those are companions of Paradise; they will abide therein 
            eternally” (Qur'an 10:26).
          </p>
          <a href="" className="f-btn">MAKE A DONATION</a>
          <div className="f-bg-shape"></div>
        </div>
        <div className="f-right">
          <i className="fab fa-telegram"></i>
          <a href="https://t.me/inha_masjid" className='f-community-btn'>JOIN OUR COMMUNITY</a>
          <p className="f-community-desc">
            Every month with our Jamaat we collect about 1 million five 
            hundred won for our Masjid Ashrafia rent.
          </p>
          <p className="f-community-desc">
            We have a teleram community with more than 60 people where we collect about 
            24.000 won every month. We need your support in our masjid. Please donate even you have 1,000 won
          </p>
          <div className="f-rent">
            <b>Masjid Ashrafia account number:</b>
            <b className="account-num">64680101486242</b>
          </div>
        </div>
      </div>
    </>
  )
}


export default Feature
