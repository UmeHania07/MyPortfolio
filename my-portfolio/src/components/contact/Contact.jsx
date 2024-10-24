import React from 'react'
import './Contact.css'
import Theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "abf8add9-e784-49ec-ad60-1347b75f8078");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
           alert(res.message)
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={Theme_pattern} alt="" />
            </div>
            <div className="contact_section">
                <div className="contact-left">
                    <h1>Let`s talk</h1>
                    <p>I`m currently available to take on new projects, So feel free to sent me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>umehania.shahid@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Karachi, Pakistan</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />

                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />

                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows='8' placeholder='Enter your message'></textarea>

                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
