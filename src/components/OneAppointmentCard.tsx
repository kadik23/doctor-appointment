import { NavLink } from "react-router-dom"

function OneAppointmentCard() {
  return (
        <div className='w-full text-nowrap'>
          <div className='flex justify-around py-5 w-full'> 
            <span className='w-20'>123456</span>
            <span className='w-20'>4/11/2024</span>
            <span className='w-20'>10:48</span>
            <span className='w-20'>DONE</span>
            <NavLink to='/one_appointment_overview' className="bg-regal-green px-3 rounded-xl text-white ">view</NavLink>
          </div>
        </div>
  )
}

export default OneAppointmentCard