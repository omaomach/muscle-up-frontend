import React from 'react'
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import "./Time.css"



const Time=() =>{
    const [date, setDate] = useState(new Date());
    return (
        <div className='calendar'>
              <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
          
        </div>
    );
}
export default Time;