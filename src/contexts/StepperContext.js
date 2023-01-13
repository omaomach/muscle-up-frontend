import React, { createContext, useContext, useState } from "react";

const StepperContext = createContext({ userData: "", setUserData: null });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState({
  step1: {
    username: "",
    phone_number: "",
    email: "",
    password: "",
    password_confirmation: ""
  }, 
  step2: {
    profile_image: "",
    age: "",
    weight: "",
    target_weight: "",
    level: ""
  }, 
  step3: {
    
  }, 
  step4: {
    diet_type: ""
  }, 
  step5: {
    credit_card: "",
    date: ""
  }});

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}

