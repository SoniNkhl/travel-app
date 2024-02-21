import React, { Component } from 'react'
import Hero from './Hero'
import './HeroStyle.css'
import Destination from './Destination'
import Trip from './Trip'
import Footer from '../Footer'

export class Home extends Component {
  render() {
    return (
      <div>
        <Hero cName='hero'
        heroImg={require('./assets/12.jpg')}
        title='Your Journey Your Story'
        text='Choose Your Favorite Destination.'
        buttonText='Travel Plan'
        url='/'
        btnClass='show'
        />
        <Destination/>
        <Trip/>
        <Footer/>
      </div>
    )
  }
}

export default Home