import React from 'react'
import { useStepperContext } from "../../contexts/StepperContext";
import './Payment.css'

export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  console.log(userData)
  function modifyPaymentInfo(e) {
    setUserData(userData=> ({...userData, step5: {...userData.step5, [e.target.id]: e.target.value}}))
  }

  function goToNextStep(e) {
    e.preventDefault()
  }

  return (
    <div className="payment-info ">
      <form onSubmit={goToNextStep}>
      <div className="w-full mx-2 flex-1">
        <div className="input-div">
          <input
            id='credit_card'
            onChange={modifyPaymentInfo}
            value={userData.step5.credit_card}
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
            id='date'
            onChange={modifyPaymentInfo}
            value={userData.step5.date}
            name="exp"
            placeholder="YY/MM/DD"
            type="date"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      </form>
    </div>
  );
}   