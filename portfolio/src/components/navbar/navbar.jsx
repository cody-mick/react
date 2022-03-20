import React from 'react'
import "./navbar.scss"
import {Person, Mail} from "@material-ui/icons"
import logo from "../../images/full-name-last-initial-transparent.png"

export default function navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'navbar ' + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <img src={logo} alt="Cody Mickelsen, Front End Developer" className='logo'/>
          <div className="itemContainer">
            <Person className='icon'/>
            <span>208.709.6402</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span>cody.b.mick@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
