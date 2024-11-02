import React from 'react'
import "../Compontents/Featured.css"
import { Kettle, KettleCover } from '../assets'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="heading">FEATURED</div>
        <hr />
        <div className="product-section">
      <div className="product-details">
        <span className="sale-badge">Limited Sale</span>
        <h2>Electric Kettle</h2>
        <p>Brew your perfect cup in minutes with ease and style!</p>
        <button className="view-button2">View Now</button>
        <div className="navigation">
          <button className="nav-arrow">←</button>
          <button className="nav-arrow">→</button>
        </div>
      </div>
      <div className="product-image-container">
        <div className="cutting"></div>
        <img src={Kettle} alt="Electric Kettle" className="product-image" />
        <div className="thumbnail">
          <img src={KettleCover} alt="Thumbnail" />
      </div>
      </div>
    </div>
    </div>
  )
}

export default Featured