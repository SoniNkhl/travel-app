import React, { Component } from 'react'
import Hero from './Hero'
import './HeroStyle.css'
import Footer from '../Footer'
import AboutUs from './AboutUs'

export class About extends Component {
  render() {
    return (
      <div>
        <Hero cName='hero-mid'
          heroImg={require('./assets/night.jpg')}
          title='About'
          btnClass='hide'
        />
        <AboutUs/>
        <Footer/>
      </div>
    )
  }
}

export default About