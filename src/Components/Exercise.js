import React,{useState, useEffect} from "react";
import Carousel from "react-elastic-carousel";
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ]
   
      export default function Diets() {
        const[diets, setDiet] = useState([])
        useEffect(() =>{
            fetch('https://muscleup-production.up.railway.app/diets')
            .then(r => r.json())
            .then(data => console.log(data))
          },[])
        return (
          <div id='diet-container'>
            <div className="diet">
              <Carousel breakPoints={breakPoints} >
                {diets.map((diet, i) => (
                  <div key={i} className="card">
                    <img src={diet.imageUrl} alt={`${diet.name} - ${diet.specialty}`} className="card-img" />
                    <div className="card-info">
                      <h3>{diet.name}</h3>
                      <p><span className='spec'>Specialty:</span>  {diet.specialty}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        )
      }
      
        
      
      
      
      
