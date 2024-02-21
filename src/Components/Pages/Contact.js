import React, { Component } from 'react'
import Hero from './Hero'
import './HeroStyle.css'
import Footer from '../Footer'
import ContactForm from './ContactForm'

export class Contact extends Component {
  render() {
    return (
      <div>
        <Hero cName='hero-mid'
          heroImg={require('./assets/2.jpg')}
          title='Contact'
          btnClass='hide'
        />
        <ContactForm/>
        <Footer/>
      </div>
    )
  }
}

export default Contact