import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState } from 'react';
import Calendar from "react-calendar";
import Time from './Time';
import './BookPage.css';

const BookPage = () => {
    const [date, setDate] = useState(new Date());
    const [showTime, setShowTime] = useState(false) 
    var today = new Date();
    var day = today.getDay();
    var mm = today.getMonth() + 1
    var year = today.getFullYear();

    return (
        <div className="Home">
            <div className='app'>
                <div className='left'>
                    <h1 className='text-center'>Book Now</h1>
                    <div className='calendar-container'>
                        <Calendar
                            onChange={setDate}
                            onClickDay={() => setShowTime(true)}
                            value={date}
                            minDate={new Date()}
                            maxDate={new Date(year, mm, day)}
                            minDetail="month"
                            nextLabel='month>'
                            nextAriaLabel='Go to next month'
                            prevLabel='<month'
                            prevAriaLabel='Go to prev month'
                        />
                    </div>
                    <p className='text-center'>
                        <span className='bold'>Selected Date:{' '}{date.toDateString()}</span>
                    </p>
                </div>
                <div className='right'>
                    <Time showTime={showTime} date={date}/>
                </div>
            </div>
        </div>
    );
};

export default BookPage;