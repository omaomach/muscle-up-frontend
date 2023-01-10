import React, { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { UseContextProvider } from "../contexts/StepperContext";

import Account from "./steps/Account";
import Details from "./steps/Details";
import Payment from "./steps/Payment";
import Final from "./steps/Final";
import './SignUp.css'
import Trainer from "./steps/Trainer";
import Diet from "./steps/Diet";

function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "User Information",
    "User Stats",
    "Trainer",
    "Diet",
    "Payment",
    "Complete"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Trainer />;
      case 4:
        return <Diet />;
      case 5:
        return <Payment />;
      case 6:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default SignUp;