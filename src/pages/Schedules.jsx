import React from 'react'
import Card from './Card'
import Calendar from 'react-calendar';
const Schedules = () => {
  return (
    <div className='Schedulecontainer'>
      <div className="dayss">
        <h3>Schedules</h3>
         <h4>Default</h4>
         <Card day="Saturday"/>
         <Card day="Sunday"/>
         <Card day="Monday"/>
         <Card day="Tuesday"/>
         <Card day="Wednesday"/>
         <Card day="Thursday"/>
         <Card day="Friday"/>
      </div>
      {/* <div className="calend">
        <ScheCalendar/>
      </div> */}
      <div className="custom-calendar">
      <Calendar/>
    </div>
    </div>
  )
}

export default Schedules