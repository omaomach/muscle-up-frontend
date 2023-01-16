import React from 'react';
import Carousel from "react-elastic-carousel";
import "./styles.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]
const services = [
  { name: "Yoga & Meditation", specialty: "Yoga is a practice that focuses on the connection between the mind, body and breath through physical postures, breathing exercises, and meditation. It aims to improve flexibility, strength, balance, and overall well-being. Meditation is a practice of focusing the mind on a particular object, thought or activity to achieve a mentally clear and emotionally calm state.", imageUrl: "https://images.pexels.com/photos/5424529/pexels-photo-5424529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Crossfit & MMA", specialty: "CrossFit is a high-intensity, functional fitness program that incorporates a mix of weightlifting, gymnastics, and cardio exercises. Our certified trainers lead group classes and provide individualized coaching and programming for athletes of all levels.", imageUrl: "{SportsMartialArtsIcon}" },
  { name: "Boxing & Kickboxing", specialty: "Boxing is a combat sport in which two people engage in a fight using only their fists. It is a sport that requires a combination of physical strength, speed, endurance, and technique.", imageUrl: "https://images.pexels.com/photos/6635223/pexels-photo-6635223.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  
  
  
]
export default function Trainers() {
  return (
    <div id='services'>
      <h1 style={{ textAlign: "center" }}>Our Services</h1>
      <div className="services">
        
          {services.map((service, i) => (
            <div key={i} className="card service">
              {/* <img src={service.imageUrl} alt={`${service.name} - ${service.specialty}`} className="card-img" /> */}
              <div className="card-info serve">
                <h2>{service.name}</h2>
                <p> {service.specialty}</p>
              </div>
            </div>
          ))}
        
      </div>
    </div>
  )
}



