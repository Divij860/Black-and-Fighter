import React from 'react'
import Home from './Compontents/Home'
import Products from './Compontents/Products'
import "./App.css"
import Offers from './Compontents/Offers'
import Featured from './Compontents/Featured'
import ProductFeature from './Compontents/ProductFeature'
import Category from './Compontents/Category'
import ContactSection from './Compontents/ContactSection'
import Footer from './Compontents/Footer'

function App() {
  return (
    <div className='maindiv'>
      <Home/>
      <Products/>
      <Offers/>
      <Featured/>
      <ProductFeature/>
      <Category/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App