import React from 'react';
import Carousel from "react-elastic-carousel";
import "./styles.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]
const trainers = [
  { name: "John Doe", specialty: "Boxing", imageUrl: "https://images.pexels.com/photos/4398884/pexels-photo-4398884.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { name: "Jane Smith", specialty: "Kickboxing", imageUrl: "https://images.pexels.com/photos/6635223/pexels-photo-6635223.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { name: "Bob Johnson", specialty: "MMA", imageUrl: "https://images.pexels.com/photos/6295829/pexels-photo-6295829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Bruce Lee", specialty: "Martial-arts", imageUrl: "https://images.pexels.com/photos/7045748/pexels-photo-7045748.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { name: "Samantha Brown", specialty: "Yoga", imageUrl: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Davis Wayne", specialty: "CrossFit", imageUrl: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  
]
export default function Trainers() {
  return (
    <div id='trainers' className='home-trainers-container'>
      <h1 style={{ textAlign: "center" }}>Our Trainers</h1>
      <div className="trainers home-train  ">
        <Carousel breakPoints={breakPoints} >
          {trainers.map((trainer, i) => (
            <div key={i} className="card home-trainers">
              <img src={trainer.imageUrl} alt={`${trainer.name} - ${trainer.specialty}`} className="card-img" />
              <div className="card-info media-train">
                <h3>{trainer.name}</h3>
                <p><span className='spec'>Specialty:</span>  {trainer.specialty}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}








// import React from 'react'
// import Carousel from "react-elastic-carousel";
// import Item from "./Item";
// import "./styles.css";
// import boxing1 from "../assets/boxing.webp"

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ]

// export default function Trainers() {
//   return (
//     <div id='trainers'>
//       <h1 style={{ textAlign: "center" }}>Trainers</h1>
//       <div className="trainers">
//         <Carousel breakPoints={breakPoints}>
//           <Item>
//             <img src={boxing1} alt="boxing"/>
            
//           </Item>
//           <Item><img src={boxing1} alt="boxing"/></Item>
//           <Item><img src={boxing1} alt="boxing"/></Item>
//           <Item><img src={boxing1} alt="boxing"/></Item>
//           <Item><img src={boxing1} alt="boxing"/></Item>
//           <Item><img src={boxing1} alt="boxing"/></Item>
//           <Item><img src={boxing1} alt="boxing"/></Item>
//           <Item><img src={boxing1} alt="boxing"/></Item>
//         </Carousel>
//       </div>
//     </div>
//   )
// }

