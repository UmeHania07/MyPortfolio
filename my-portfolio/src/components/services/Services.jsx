import React from 'react'
import './Services.css'
import Theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import Arrow_icon from '../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id='service' className='services'>
      <div className="s-title">
        <h1>My services</h1>
        <img src={Theme_pattern} alt="" />
      </div>
      <div className="s-container">
        {
          Services_Data.map((service , index)=>{
            return <div key={index} className="s-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="s-readmore">
                <p>Read More</p>
                <img src={Arrow_icon} alt="" />
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Services
