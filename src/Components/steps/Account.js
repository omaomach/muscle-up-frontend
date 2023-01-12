import React from 'react'
import { useStepperContext } from "../../contexts/StepperContext";
import './Account.css'
// import { useNavigate } from 'react-router-dom';


export default function Account() {
  const { userData, setUserData } = useStepperContext();
  // const [userData.step1, setuserData.step1] = useState({
  //   username: "",
  //   phone_number: "",
  //   email: "",
  //   password: "",
  //   password_confirmation: ""
  // });

  // console.log(userData)

  function modifyAccountInfo(e) {
    setUserData(userData=> ({...userData, step1: {...userData.step1, [e.target.id]: e.target.value}}))
  }
  

  function goToNextStep(e) {
    e.preventDefault()
  }

  return (
    <div className="user-info">
        <h2>Sign Up to access muscleUp</h2>
      <form onSubmit={goToNextStep}>
      <div className="mx-2 w-full flex-1">
        <div className="individual-input-div">
          <input
            id='username'
            onChange={modifyAccountInfo}
            value={userData.step1.username}
            name="username"
            placeholder="Username"
            // className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      <div className="mx-2 w-full flex-1">
        <div className="individual-input-div">
          <input
            id="email"
            onChange={modifyAccountInfo}
            value={userData.step1.email}
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
            id="phone_number"
            onChange={modifyAccountInfo}
            value={userData.step1.phone_number}
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
            id='password'
            onChange={modifyAccountInfo}
            value={userData.step1.password}
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
            id='password_confirmation'
            onChange={modifyAccountInfo}
            value={userData.step1.password_confirmation}
            name="password-confirmation"
            placeholder="Password Confirmation"
            type="password"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      </form>

    </div>
  );
  }