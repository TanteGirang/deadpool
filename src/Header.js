import React from 'react'
import './Header.css'
import logo from './assets/icon/LogoDP.png'

export default function Header() {
    return (
        <div>
            <header className="Navbar">
          <div>
            <img className="logo-KFC" src={logo}/>
          </div>
          <div className="Navbar-list">
          <ul>
            <li><a href= "/home">Home</a></li>
            <li><a href= "/Menu">Menu</a></li>
            <li><a href= "Help">Help</a></li>
            <li><a href= "/login">Log In</a></li>
          </ul>
          </div>
        </header>
        </div>
    )
}
