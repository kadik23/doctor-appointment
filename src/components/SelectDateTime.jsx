import Steps from './Steps'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useEffect, useContext, useState } from 'react';
import ToastContext from '../contexts/ToastContext';
import useBooking from '../hooks/useBooking';
import { BookContext } from '../contexts/BookContext';

function SelectDateTime() {
    const {  selectedAppointment,setSelectedAppointment,
            selectedDate,
            nextSixDays,
            getSchedules,
            getDate,
            nextStep2,previousStep,
            }
        = useBooking()

    const toastManager = useContext(ToastContext);
    const alertErroreHandler = () => { toastManager.alertError("Login failed"); }
    const {  patientData } = useContext(BookContext)
    const [selectedDateIndex, setSelectedDateIndex] = useState(-1);
    const [selectedTimeIndex, setSelectedTimeIndex] = useState(-1); 

    useEffect(() => {
        console.log(patientData)
        getSchedules(patientData)

    }, [])

    return (
    <div>
        <Steps step="2" />
        <div className='flex flex-col md:flex-row bg-gray-50 p-5 md:mx-24 my-10 rounded-xl'>
            <div className='flex flex-col gap-5 rounded-lg p-5 w-full md:w-1/3'>
                <span>Would you like to schedule an Appointment? Pick a Date & Time</span>
                <hr />
                <div className='flex gap-2 items-center'>
                    <Icon icon="material-symbols:service-toolbox" className='text-regal-green' width="18" height="18" />
                    <span>With Doctor</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <Icon icon="mingcute:time-fill" width="18" height="18" className='text-regal-green' />
                    <span>15 Min To 45 Min</span>
                </div>
            </div>
            <div className='flex flex-col gap-5 rounded-lg py-5 px-3 w-full md:w-1/3'>
            {selectedDate && selectedAppointment.date
                ? <h1>Selected Day: {selectedAppointment.date}</h1>
                : <h1>Pick a Day</h1>
            }
                <hr />
                <div className='flex flex-wrap'>
                {nextSixDays &&
            nextSixDays.map((date, index) => {
                return (
                    <div
                    key={date.id}
                    onClick={() => {
                        getDate(date);
                        setSelectedDateIndex(index);
                    }}
                    className={`w-20 h-16 cursor-pointer  flex flex-col border-2 items-center justify-center ${
                        selectedDateIndex === index
                        ? 'bg-regal-green text-white'
                        : 'bg-white'
                    } hover:bg-regal-green hover:text-white rounded-lg p-16 m-3  transition-all duration-500`}
                    >
                    <span className='text-nowrap'>{date.date}</span>
                    <span className="weekday">{date.day}</span>
                    </div>
                );
                })}
                </div>
            </div>
            <div className='flex flex-col gap-5 rounded-lg p-5 w-full md:w-1/3'>
            {selectedDate && selectedAppointment.time
                ? <h1>Selected Time: {selectedAppointment.time}</h1>
                : <h1>Pick a Time</h1>
            }
                <hr />
                <h1 className='font-semibold'>Available Times <span className='opacity-80'>(8AM - 16:45)</span></h1>
                <div className='flex flex-wrap'>
                    {selectedDate && selectedDate.map((slot, index) => (
                    <div
                        key={index}
                        onClick={() => {
                        setSelectedAppointment({ ...selectedAppointment, time: slot.start_at });
                        setSelectedTimeIndex(index); 
                        }}
                        className={`px-2 border border-gray-200 m-2 hover:text-white shadow-sm cursor-pointer hover:bg-regal-green transition-all duration-500 flex items-center ${
                        selectedTimeIndex === index 
                            ? 'bg-regal-green text-white'
                            : 'bg-white text-black'
                        }`}
                    >
                        {slot.start_at} <span className="ml-1">AM</span>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        <div className='flex justify-end items-center mr-52 my-10 w-full'>
            <button onClick={previousStep}  className='  py-1 px-5 rounded-2xl text-regal-green border border-regal-green transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 '>PREVIOUS</button>
            {selectedAppointment && selectedDate
                    ? <button onClick={nextStep2} className='  py-1 px-5 rounded-2xl text-white bg-regal-green transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 mr-24'>NEXT</button>
                    : <button className=' cursor-default py-1 px-5 rounded-2xl bg-black text-white opacity-20 mx-3 mr-24'>NEXT</button>
            }
        </div>
    </div>
  )
}

export default SelectDateTime