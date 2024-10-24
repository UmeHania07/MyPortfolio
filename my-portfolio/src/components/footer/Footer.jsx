import React from 'react'
import './Footer.css'
import Footer_logo from '../../assets/footer_logo.svg'
import User_icon from '../../assets/user_icon.svg'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-left">
                    <h1>UmeHania💻</h1>
                    <p>I am a frontend developer from Pakistan, with 3 years of experince.❤</p>
                </div>
                <div className="footer_right">
                    <div className="footer-email-input">
                        <img src={User_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-btn">Sent mail</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-boottom-left">
                &copy; 2024 UmeHania. All rights reserved.
                </p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with Me❤</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
