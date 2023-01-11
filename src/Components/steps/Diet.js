import React from 'react'
import './Diet.css'

function Diet() {

    function handleOptionChange (changeEvent) {
        this.setState({
          selectedOption: changeEvent.target.value
        });
      }

    return (
        <>

        <div className='diet-parent'>
            <div className='diet-secondary-div'>
                <select className='diet-filter'>
                    <option value={0}>Select Diet Type</option>
                    <option>Weight loss</option>
                    <option>Weight gain </option>
                </select>
            </div>
        </div>

        </>
    )

}

export default Diet;