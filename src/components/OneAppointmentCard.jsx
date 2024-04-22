import { NavLink } from "react-router-dom"

function OneAppointmentCard({appointment}) {
  return (
        <div className='w-full text-nowrap'>
          <div className='flex justify-around py-5 w-full'> 
            <span className='w-20 truncate'>{appointment.id}</span>
            <span className='w-20'>{appointment.date}</span>
            <span className='w-20'>{appointment.time}</span>
            <span className='w-20'>{appointment.status}</span>
            <NavLink to={`/one_appointment_overview/${appointment.id}`} className="bg-regal-green px-3 rounded-xl text-white ">view</NavLink>
          </div>
        </div>
  )
}

export default OneAppointmentCard