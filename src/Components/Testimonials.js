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
  { name: "Grace Mookha", specialty: "Yoga is a practice that focuses on the connection between the mind, body and breath through physical postures, breathing exercises, and meditation. It aims to improve flexibility, strength, balance, and overall well-being. Meditation is a practice of focusing the mind on a particular object, thought or activity to achieve a mentally clear and emotionally calm state.", imageUrl: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { name: "Brian Ming", specialty: "I've been a member for a few months now and have already seen a significant improvement in my overall fitness and well-being. The trainers are knowledgeable and provide great guidance and encouragement. Overall, a fantastic gym experience!", imageUrl: "https://images.pexels.com/photos/7595194/pexels-photo-7595194.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { name: "Kevin Finn", specialty: "I highly recommend this gym! The facilities are top-notch and the staff is incredibly friendly and helpful. The classes offered are diverse and cater to all fitness levels.", imageUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  
  
  
]
export default function Testimonials() {
  return (
    <div id='testimonials'>
      <h1 style={{ textAlign: "center" }}>Testimonials</h1>
      <div className="services test-serv">
        
          {services.map((service, i) => (
            <div key={i} className="testimonial">
              <img src={service.imageUrl} alt={`${service.name} - ${service.specialty}`} className="card-img" />
              <div className="card-info testim">
                <h2>{service.name}</h2>
                <p> {service.specialty}</p>
              </div>
            </div>
          ))}
        
      </div>
    </div>
  )
}