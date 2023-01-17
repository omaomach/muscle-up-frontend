import React,{useState, useEffect} from 'react'

export default function Equipment() {
  const[machines, setMachines] = useState([]);

  useEffect(() =>{
    fetch('https://muscleup-production.up.railway.app/machines')
    .then(r => r.json())
    .then(data => setMachines(data))
  },[])
  return (
    
    <div className="table">
      <h1>Equipment</h1>
      <table>
        <thead className="head">
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
            <th>Condition</th>
            <th>Number</th>
            
          </tr>
        </thead>
        <tbody>
        {machines.map((machine) =>{
return(
          <tr>

            <td>
        
              <img
                className="avatar"
                src={machine.image}
              />
            </td>

            <td>{machine.id}</td>
            <td>{machine.name}</td>
            <td>{machine.condition}</td>
            <td>{machine.number}</td>
      
          </tr>
  )})}        

        </tbody>

      </table>
    </div>
  );
}
