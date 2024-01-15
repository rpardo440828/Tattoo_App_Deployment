import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
import './BookPage.css';

const time = ['12:00 PM','3:00 PM','5:00 PM','8:00 PM', '10:00 PM']

function Times(props) {

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)

 function display(e) {
   setInfo(true);
   setEvent(e.target.innerText);
}

return (
 
 <div className="times">
   {time.map(times => {
    return (
    <div>
      <button onClick={(e)=> display(e)} className="btns"> {times} </button>
    </div>
        )
     })}
    <div>
      {info ? `Your appointment is booked on ${event} ${props.date.toDateString()}` : null}
    </div>
 </div>
  )
}

export default Times;