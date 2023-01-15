import React from 'react'

export default function About() {
  return (
    <div  id = "about" className = "about-container">
      <div className='second-parent'>
        <div className="img-container">
          <img  className = "about-image"src = "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='about'/>
        </div>
        <div className="about-us">
          <h4>About Us</h4><br/><br/>
            <p>  A stunning combination of contemporary Kenyan fare with Italian influences, 4Runners Bistro in Kilimani, Nairobi
            creates a dining experience that is deliciously familiar yet refined and innovative. With elegant indoor and outdoor dining, genuine hospitality and exquisite food 4Runners Bistro boasts it all.  </p>
        </div>
      </div>      
    </div>


   
  )
}
