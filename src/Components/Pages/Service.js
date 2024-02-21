import React, { Component } from 'react'
import Hero from './Hero'
import './HeroStyle.css'
import Footer from '../Footer'
import Trip from './Trip'

export class Service extends Component {
  render() {
    return (
      <div>
        <Hero cName='hero-mid'
          heroImg={require('./assets/night.jpg')}
          title='Service'
          btnClass='hide'
        />
        <Trip/>
        <Footer/>
      </div>
    )
  }
}

export default Service