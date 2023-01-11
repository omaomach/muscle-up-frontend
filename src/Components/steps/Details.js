import React from 'react'
import { useStepperContext } from "../../contexts/StepperContext"
import './Account.css'

export default function Details() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="user-info"> 
      <h2>Please provide your stats to proceed</h2>
      <div className="w-full mx-2 flex-1">
        <div className="individual-input-div">
          <input
            onChange={handleChange}
            value={userData["avatar"] || ""}
            name="avatar"
            placeholder="Profile Image"
            type="text"
            // className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="individual-input-div">
          <input
            onChange={handleChange}
            value={userData["age"] || ""}
            name="age"
            placeholder="age"
            type="number"
            // className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="individual-input-div">
          <input
            onChange={handleChange}
            value={userData["weight"] || ""}
            name="weight"
            placeholder="Weight"
            type="number"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="individual-input-div">
          <input
            onChange={handleChange}
            value={userData["target-weight"] || ""}
            name="target-weight"
            placeholder="Target Weight"
            type="number"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="individual-input-div">
          <input
            onChange={handleChange}
            value={userData["Level"] || ""}
            name="level"
            placeholder="Level"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
}