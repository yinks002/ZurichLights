import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Component1 from '../components/component1'
import AppComponent from '../components/component'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container">
      <Helmet>
        <title>
          Home1 - Zurich Light: Smart Street Light Automation Using Blockchain
          Technology
        </title>
        <meta
          property="og:title"
          content="Home1 - Zurich Light:  Smart Street Light Automation Using Blockchain Technology"
        />
      </Helmet>
      <Navbar8></Navbar8>
      <Hero17></Hero17>
      <Component1></Component1>
      <AppComponent></AppComponent>
      <Features24></Features24>
      <CTA26></CTA26>
      <Features25></Features25>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86456.44144708426!2d8.454335043684308!3d47.377528422965455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9749bea219%3A0xe66e8df1e71fdc03!2zWsO8cmljaA!5e0!3m2!1sen!2sch!4v1721256844879!5m2!1sen!2sch"
        className="home1-iframe"
      ></iframe>
      <div className="home1-container1">
        <div className="home1-container2"></div>
      </div>
      <Pricing14></Pricing14>
      <Steps2></Steps2>
      <Contact10></Contact10>
      <Footer4></Footer4>
    </div>
  )
}

export default Home1
