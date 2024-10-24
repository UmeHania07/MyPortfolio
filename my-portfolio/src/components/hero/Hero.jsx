import React from 'react'
import './Hero.css'
import image from '../../assets/img.avif'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={image} alt="" />
            <h2><span>I`am UmeHania, </span>frontend developer based in Pakistan.</h2>
            <p>I am a software engineer passionate about building efficient, user-friendly applications. With expertise in both front-end and back-end development.</p>
            <div className="hero-action">
                <a href="mailto:umehania.shahid@gmail.com"><div className="hero-connect">Connect With Me</div></a>
                <a href="/public/resume.pdf" target='_blank'><div className="hero-resume">My resume❤</div></a>
            </div>
        </div>
    )
}

export default Hero
