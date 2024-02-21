import './Navbar.css'
import { MenuItem } from './MenuItem'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Trippy</h1>
            <div className="menu-icons"></div>
            <ul className='nav-menu'>
                {MenuItem.map((item,index)=>{
                    return (
                        <li key={index}>
                        <Link className={item.cName} to={item.url}><i class={item.icon}>{item.title}</i></Link>
                        </li>
                    )
                })}
            </ul>
            <button>Sign-Up</button>
        </nav>
      </div>
    )
  }
}

export default Navbar