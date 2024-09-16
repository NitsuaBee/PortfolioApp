import React from 'react'
import {Pictures} from '../../assets/pictures'
import './Background.css'
import AustinCV from '../../assets/AustinCV.pdf'

const Background = () => {
  return (
    <div className="wrapper">
        <header>
            <img src={Pictures.TechBackground} alt="" className="background" />
            <img src={Pictures.TechForeground} alt="" className="foreground" />
            <div className="info">
              <img src={Pictures.ProfilePic} alt="" className="picture" />
              <ul className="list">
                <li className="title">Hello, My name is</li>
                <li className="name">Austin Butrviengpunt</li>
              </ul>
              </div>
            <div className="btn-container">
              <a href={AustinCV} download="AustinCV.pdf">
                 <button className='btn-resume'>My CV</button>
              </a>
            </div>
            
        </header>
        
    </div>
  )
}

export default Background