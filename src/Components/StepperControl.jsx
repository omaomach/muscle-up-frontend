import React, { useState } from "react";

export default function StepperControl({ handleClick, steps, handleSubmit }) {
  const [currentStep, setCurrentStep] = useState(1) 
  
    function handleButtonClick() {
      console.log(currentStep)
      if(currentStep === 6){
        handleSubmit("confirm")
      }else{
        setCurrentStep(currentStep => (currentStep + 1))
        handleClick("next")
      }
    }

    return (
      <div className="container mt-4 mb-8 flex justify-around">
        <button
          onClick={() => handleClick()}
          className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
            currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
          }`}
        >
          Back
        </button>
  
        <button onClick={() => {
          handleButtonClick()
        }} className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white">
          {currentStep === steps.length - 1 ? "Confirm" : "Next"}
        </button>
      </div>
    );
  }