import React from 'react'
import { useStepperContext } from "../../contexts/StepperContext"
import './Account'

export default function Details() {
  const { userData, setUserData } = useStepperContext();

  // function modifyDetailsInfo(e) {
  //   setUserData(userData=> {
  //     const newUserData = {...userData, step2: {...userData.step2, [e.target.id]: e.target.value}}
  //     console.log(newUserData)
  //     return newUserData
  //   })
  // }

  function modifyDetailsInfo(e) {
    setUserData(userData=> ({...userData, step2: {...userData.step2, [e.target.id]: e.target.value}}))
  }

  function goToSecondStep(e) {
    e.preventDefault()
  }
  
  return (
    <div className="user-info"> 
      <h2>Please provide your stats to proceed</h2>
      <form onSubmit={goToSecondStep}>
      <div className="w-full mx-2 flex-1">
        <div className="individual-input-div">
          <input
            id='profile_image'
            onChange={modifyDetailsInfo}
            value={userData.step2.profile_image}
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
            id='age'
            onChange={modifyDetailsInfo}
            value={userData.step2.age}
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
            id='weight'
            onChange={modifyDetailsInfo}
            value={userData.step2.weight}
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
            id='target_weight'
            onChange={modifyDetailsInfo}
            value={userData.step2.target_weight}
            name="target-weight"
            placeholder="Target Weight"
            type="number"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="individual-input-div">
          <select id='level' className='level-dropdown' onClick={modifyDetailsInfo} defaultValue={userData.step2.level}>
            <option value={0}>Select Training Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
      </div>
      </form>

    </div>
  );
}