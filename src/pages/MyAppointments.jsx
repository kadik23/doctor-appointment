import OneAppointmentCard from "../components/OneAppointmentCard"

function MyAppointment() {
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
          <OneAppointmentCard/>
          <OneAppointmentCard/>
          <OneAppointmentCard/>
          <OneAppointmentCard/>
          <OneAppointmentCard/>
          <OneAppointmentCard/>
          <OneAppointmentCard/>
          <OneAppointmentCard/>
          <OneAppointmentCard/>
        </div>
    </div>
  )
}

export default MyAppointment