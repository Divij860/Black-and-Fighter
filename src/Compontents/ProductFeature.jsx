import React from 'react'
import "../Compontents/ProductFeature.css"
import { Click, Cooker, Featuredproduct, Power, Thunder, Warm } from '../assets'

const ProductFeature = () => {
  return (
    <div>
        <div className="product-feature">
      <div className="feature-grid">
        <div className="feature-item yellow">
          <img src={Thunder} alt="Voltage" />
          <p>220-240V</p>
        </div>
        <div className="feature-item white">
          <img src={Cooker} alt="Removable Non Stick" />
          <p>Removable Non Stick</p>
        </div>
        <div className="feature-item gradient warranty mainimage">
          <img src={Featuredproduct} alt=""/>
        </div>
        <div className="feature-item white warm">
          <img src={Warm} alt="Keep Warm Functions" />
          <p>Keep Warm Functions</p>
        </div>
        <div className="feature-item yellow">
          <img src={Power} alt="Product" />
          <p>700 W</p>
        </div>
        <div className="feature-item yellow  power">
          <p>2 YEARS</p>
          <span>WARRANTY</span>
        </div>
        <div className="feature-item yellow cooltouch">
          <img src={Click} alt="Cool Touch" />
          <p>Cool Touch</p>
        </div>
      </div>
      <div className="product-description">
        <h2>SmartSense Technology for healthier life</h2>
        <p>Perfect for Every Meal!</p>
      </div>
    </div>
    </div>
  )
}

export default ProductFeature