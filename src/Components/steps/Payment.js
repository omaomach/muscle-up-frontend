import React from 'react'
import { useStepperContext } from "../../contexts/StepperContext";
import './Payment.css'

export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="payment-info ">
      <div className="w-full mx-2 flex-1">
        <div className="input-div">
          <input
            onChange={handleChange}
            value={userData["card"] || ""}
            name="card"
            placeholder="Credit Card"
            type="number"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="input-div">
          <input
            onChange={handleChange}
            value={userData["exp"] || ""}
            name="exp"
            placeholder="YY/MM/DD"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
}   