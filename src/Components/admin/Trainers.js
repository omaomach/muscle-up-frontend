import React,{useState, useEffect}from "react";

export default function Trainers() {
  const[trainers, setTrainers] = useState([]);

  useEffect(() =>{
    fetch('https://muscleup-production.up.railway.app/trainers')
    .then(r => r.json())
    .then(data => setTrainers(data))
  },[])




  return (
    <div className="table">
      <h1>Trainers</h1>
      <table>
        <thead className="head">
          <tr>
            <th>Avatar</th>

            <th>Id</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
        {trainers.map((trainer) =>{
return(
          <tr>

            <td>
        
              <img
                className="avatar"
                src={trainer.image}
              />
            </td>

            <td>{trainer.id}</td>
            <td>{trainer.name}</td>
            <td>{trainer.phone_number}</td>
            <td>{trainer.email}</td>
            <td>{trainer.age}</td>
      
          </tr>
  )})}        

        </tbody>

      </table>
    </div>
  );
}
