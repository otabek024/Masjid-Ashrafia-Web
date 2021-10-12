import React from 'react'
import './prayingTimes.css'

const PrayingTimes = () => {
  return (
    <>
      <div className="p-container">
        <h1 className="p-title">Masjid Ashrifa Prayer Times</h1>
        <p className="p-desc">Prayer Times will be updated frequently by the website owner</p>
        <div className="p-box">
          <div className="title">
            <div className="title-wrapper">
              <div className="title-item">Jammat Times</div>
              <div className="title-item">Hijri 1443</div>
              <div className="title-item">Jumma: 13:30</div>
              <div className="title-item">Sunrise 06:38</div>
            </div>
          </div>
          <p className="p-sub-title">Incheon, South Korea</p>
          <div className="praying-times">
            <div className="p-text">
              <p>Fajr:</p>
              <p>Zuhr:</p>
              <p>Asr:</p>
              <p>Maghrib:</p>
              <p>Isha:</p>
            </div>
            <div className="p-times">
              <p>06:00</p>
              <p>13:15</p>
              <p>16:20</p>
              <p>18:00</p>
              <p>21:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrayingTimes
