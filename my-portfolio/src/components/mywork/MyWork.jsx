import React from 'react'
import './MyWork.css'
import Theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import Arrow_icon from '../../assets/arrow_icon.svg'


const MyWork = () => {
  return (
    <div id='myportfolio' className='my-work'>
      <div className="my-title">
        <h1>My lastest work</h1>
        <img src={Theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
       {mywork_data.map((mywork,index)=>{
         return <img key={index} src={mywork.w_img} alt="" />
       })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={Arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
