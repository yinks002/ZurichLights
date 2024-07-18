import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import AppComponent from '../components/component'
import CTA26 from '../components/cta26'
import Component14 from '../components/component14'
import Steps2 from '../components/steps2'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>
          Zurich Light: Smart Street Light Automation Using Blockchain
          Technology
        </title>
        <meta
          property="og:title"
          content="Zurich Light:  Smart Street Light Automation Using Blockchain Technology"
        />
      </Helmet>
      <Navbar8></Navbar8>
      <Hero17></Hero17>
      <AppComponent></AppComponent>
      <CTA26></CTA26>
      <Component14></Component14>
      <div className="home-container1">
        <div className="home-container2"></div>
      </div>
      <Steps2></Steps2>
      <Contact10></Contact10>
      <Footer4></Footer4>
    </div>
  )
}

export default Home
