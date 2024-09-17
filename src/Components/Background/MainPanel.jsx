import React, { useEffect } from 'react'
import {Pictures} from '../../assets/pictures'
import './Background.css'
import AustinCV from '../../assets/AustinCV.pdf'
import { motion } from "framer-motion"

const MainPanel = () => {
  return (
    <div className="wrapper">
        {/* <nav className='navbar'>
            <ul className="nav-list">
                <li>
                    <a href="/" className="nav-a">Home</a>
                </li>
                <li>
                    <a href="/#about" className="nav-a">About Me</a>
                </li>
                <li>
                    <a href="/#projects" className="nav-a">My Projects</a>
                </li>
            </ul>
        </nav> */}
        <header>
            <img src={Pictures.TechBackground} alt="" className="background" />
            <img src={Pictures.TechForeground} alt="" className="foreground" />
            <div className="info">
              <div className="info-pic">
                <img src={Pictures.ProfilePic} alt="" className="picture" />
              </div>
                <div className="info-text">
                    <div className="info-greeting">
                      <ul className="list1">
                        <li className="hello">Hello,</li>
                        <li className="start-name">my name is</li>                    
                      </ul>
                      <ul className='list2'>
                        <li className="name">Austin Butrviengpunt</li>
                      </ul>
                      <ul className='list1'>
                        <li className="hello">I'm a</li>
                        <li className="name">Frontend Developer</li>
                      </ul>
                    </div>                  
                  </div>
                </div>
            <div className="btn-container">
              <a href={AustinCV} download="AustinCV.pdf">
                 <button className='btn-resume'>My CV</button>
              </a>
              <a href="https://github.com/NitsuaBee?tab=repositories" target='_blank'>
                <button className="btn-projects">Projects</button>              
              </a>
            </div>
            
        </header>
        <motion.div animate={{ y: 100, scale: 1 }} intial={{scale: 0}} className="panel">
          <div className="panel-title">
              <h1>About Me</h1>
          </div>
          <ul className="about-me">
              <p>Hello, and welcome to my portfolio! I'm Austin Butrviengpunt, a senior at Texas A&M - Corpus Christi with some experience in front-end and back-end development. I created this portfolio and a project in just two days to complement my resume. I hope it demonstrates my capabilities and my willingness to learn and grow. I'm passionate about collaborating with teams to create solutions that make life easier. Thank you for visiting, and I hope you enjoy exploring my work!</p>
          </ul>
        
        </motion.div>
    </div>
  )
}

export default MainPanel