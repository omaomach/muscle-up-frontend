import React from 'react'
import { useStepperContext } from "../../contexts/StepperContext";
import './Diet.css'

function Diet() {
    const { userData, setUserData } = useStepperContext();

    // console.log(userData)
    function modifyDietInfo(e) {
        setUserData(userData=> ({...userData, step4: {...userData.step4, [e.target.id]: e.target.value}}))
    }

    // function goToNextStep(e) {
    //     e.preventDefault()
    // }

    return (
        <>

        <div className='diet-parent'>
            <div className='diet-secondary-div'>
                <select id='diet_type' className='diet-filter' onClick={modifyDietInfo} defaultValue={userData.step4.diet_type}>
                    <option value={0}>Select Diet Type</option>
                    <option value="Weight Loss">Weight loss</option>
                    <option value="Weight Gain">Weight gain </option>
                </select>
            </div>
        </div>

        </>
    )

}

export default Diet;