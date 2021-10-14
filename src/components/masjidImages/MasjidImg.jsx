import React from 'react'
import './masjidImages.css'
import img1 from '../../img/masjid img.jpg'
import img2 from '../../img/masjid img2.jpg'
import img3 from '../../img/masjid img3.jpg'
import img4 from '../../img/masjid img 4.jpg'
import img5 from '../../img/masjid img 5.jpg'
import img6 from '../../img/masjid img6.jpg'




const MasjidImg = () => {
  return (
    <>
      <div className="m-container" id="masjidImg">
        <div className="heading">
          <h3>Photo <span>Gallery</span></h3>
        </div>
        <div className="box">
          <div className="dream">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>
          <div className="dream">
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
          <div className="dream">
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default MasjidImg
