import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className="fo-container">
        <div className="fo-wrapper">
          <ul className="fo-list">
            <li className="fo-list-item">Guide</li>
            <li className="fo-list-item">Support</li>
            <li className="fo-list-item">API</li>
            <li className="fo-list-item">Community</li>
          </ul>
          <span className="copyright">
            &copy; Otabek Abdurakhmonov 2021
          </span>
        </div>
      </div>
    </>
  )
}

export default Footer
