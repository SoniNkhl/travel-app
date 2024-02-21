import React, { Component } from 'react'
import './ContactForm.css'

export class ContactForm extends Component {
  render() {
    return (
      <div>
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form>
                <input placeholder='Name'/>
                <input placeholder='Email'/>
                <input placeholder='Subject'/>
                <textarea placeholder='Message' rows='4'></textarea>
                <button>Send Message</button>
            </form>
        </div>     
      </div>
    )
  } 
}

export default ContactForm