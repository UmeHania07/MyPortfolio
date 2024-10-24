import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import image from "../../assets/img.avif"

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>A versatile software engineer with a passion for crafting efficient and scalable solutions, specializing in modern web technologies and cloud platforms.</p>
            <p>Experienced in building user-friendly applications, always eager to learn and adapt to new challenges.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: '50%' }} /></div>
            <div className="about-skill"><p>Javascript</p><hr style={{ width: '70%' }} /></div>
            <div className="about-skill"><p>React Js</p><hr style={{ width: '85%' }} /></div>
            <div className="about-skill"><p>React Native</p><hr style={{ width: '60%' }} /></div>
            <div className="about-skill"><p>Next Js</p><hr style={{ width: '68%' }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>3+</h1>
          <p>YEARS OF EXPERINCE</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>12+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
