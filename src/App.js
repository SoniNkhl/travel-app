import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Service from './Components/Pages/Service'
import Contact from './Components/Pages/Contact'

export class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </Router>
    )
  }
}

export default App