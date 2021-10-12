import React from 'react'
import './contact.css'
import emailjs from 'emailjs-com';
import { useRef } from 'react'
import { useState } from 'react';
import { useContext } from 'react';

const Contact = () => {

  const formRef = useRef();
  const [done, setDone] = useState(false)
  const [user_name, setName] = useState("")
  const [ user_subject, setSubject] = useState("")
  const [ user_email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  const handleChange = (event) => {
    event.target.name=="user_name" 
    ? setName(event.target.value)
    : event.target.name=="user_email" 
    ? setEmail(event.target.value)
    : event.target.name=="message" 
    ? setMessage(event.target.value)
    : event.target.name=="user_subject"
    ? setSubject(event.target.value)
    : console.log("error")
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_y8l8wda', 
        'template_lbcd1kf', 
        formRef.current, 
        'user_UqHhvMPtDQ1lcHOdewTDl')
      .then((result) => {
        console.log(result.text);
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
        setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <>
      <div className="c-container">
        <div className="form-container">
          <h1 className="c-title">
            For any suggestions? <br />
            Let's Get in Touch
          </h1>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="left-form">
              <input 
                type="text" 
                placeholder="Your Name"
                onChange={(e) => handleChange(e)}  
                value={user_name} 
                name="user_name" 
              />
              <input 
                type="text" 
                placeholder="Your Email"
                onChange={(e) => handleChange(e)}  
                value={user_email}
                name="user_email"
              />
              <input 
                type="text" 
                placeholder="Subject"
                onChange={(e) => handleChange(e)}  
                value={user_subject}
                name="user_subject"
              />
            </div>
            <div className="right-form">
              <textarea 
                placeholder="Your message"
                onChange={(e) => handleChange(e)}
                value={message}
                name="message" 
              />
              <button className="c-btn">
                Send
              </button>
              {done && "Thank you very much..."}
            </div>
          </form>
        </div>
        <div className="address-container">
          <div className="bg-shape"></div>
          <div className="addressItem">
            <div className="c-flex">
            <i class="fas fa-map-marker-alt"></i>
            <p>인천 미추홀 용현동 172-19</p>
            </div>
            <div className="c-flex">
            <i class="fas fa-phone"></i>
            <p>(+010) 2784 9922 </p>
            </div>
            <div className="c-flex">
              <i class="fas fa-paper-plane"></i>
              <p>otabekabdurahmonov99@mail.ru</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
