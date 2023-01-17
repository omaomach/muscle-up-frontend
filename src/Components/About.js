import React from 'react'

export default function About() {
  return (
    <div  id = "about" className = "about-container">
      <div className='second-parent'>
        <div className="img-container">
          <img  className = "about-image"src = "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='about'/>
        </div>
        <div className="about-us">
          <h2>About Us</h2>
            <p>At muscleUp, we will provide you with a combination of fitness and service to help you reach your fitness goals. We have top notch trainers who will challenge you while providing individualized attention, yoga and meditation classes, kickboxing and martial arts classes, and personal training.</p>
        </div>
      </div>      
    </div>


   
  )
}
