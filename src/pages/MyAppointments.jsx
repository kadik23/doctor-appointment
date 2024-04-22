import OneAppointmentCard from "../components/OneAppointmentCard"
import { useEffect,useState } from "react";
import useAppointments from '../hooks/useAppointments';

function MyAppointment() {
  const { appointments } = useAppointments();

  return (
    <div className='w-2/3 m-10 p-5  bg-white rounded-xl overflow-scroll scrollbar-none'>
        <h1 className='text-xl font-semibold  text-nowrap'>MY APPOINTMENTS</h1>
        <div className='w-full text-nowrap'>
          <div className='flex justify-around py-5 w-full'> 
            <span className='w-20 text-center'>Patient ID</span>
            <span className='w-20 text-center'>Date</span>
            <span className='w-20 text-center'>Time</span>
            <span className='w-20 text-center'>Status</span>
            <span className='w-20 text-center'>Action</span>
          </div>
          {appointments.map(appointment => (
            <OneAppointmentCard appointment={appointment}/>
          ))}
        </div>
    </div>
  )
}

export default MyAppointment