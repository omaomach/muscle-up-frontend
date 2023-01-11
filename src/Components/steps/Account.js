import React from 'react'
import { useStepperContext } from "../../contexts/StepperContext";
import './Account.css'

export default function Account() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="user-info">
        <h2>Sign Up to access muscleUp</h2>
      <div className="mx-2 w-full flex-1">
        <div className="individual-input-div">
          <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="Username"
            // className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      <div className="mx-2 w-full flex-1">
        <div className="individual-input-div">
          <input
            onChange={handleChange}
            value={userData["email"] || ""}
            name="email"
            placeholder="Email"
            type="email"
            // className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      <div className="mx-2 w-full flex-1">
        <div className="individual-input-div">
          <input
            onChange={handleChange}
            value={userData["phone"] || ""}
            name="phone"
            placeholder="Phone Number"
            type="number"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      <div className="mx-2 w-full flex-1">
        <div className="individual-input-div">
          <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            placeholder="Password"
            type="password"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      <div className="mx-2 w-full flex-1">
        <div className="individual-input-div">
          <input
            onChange={handleChange}
            value={userData["password-confirmation"] || ""}
            name="password-confirmation"
            placeholder="Password Confirmation"
            type="password"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

    </div>
  );
}