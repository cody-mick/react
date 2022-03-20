import React from 'react'
import "./intro.scss"

export default function intro() {
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/coding.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi.</h2>
          <h1>I'm Cody Mickelsen</h1>
          <h3>Frontend <span>Developer</span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/arrow-down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  )
}
