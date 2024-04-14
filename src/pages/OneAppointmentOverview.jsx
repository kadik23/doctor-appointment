import { NavLink } from "react-router-dom"

function OneAppointmentOverview() {
    return (
        <div className="my-12 mx-24 pr-12">
            <div className="flex w-full items-center gap-5 justify-end py-5">
                <button  className='  py-1 px-5 rounded-2xl text-white bg-red-500 transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 '>Cancel Appointment</button>
                <NavLink to='/my_appointments'  className='  py-1 px-5 rounded-2xl text-white bg-blue-500 transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 '>View All Appointments</NavLink>
            </div>
            <div className="p-10 border flex flex-col gap-5 border-gray-200 rounded-xl shadow-md ">
                <h1 className="text-xl font-semibold">APPOINTMENT INFORMATION</h1>
                <div className="w-[90%] border border-gray-200 rounded-xl flex flex-col items-start gap-3 p-5">
                    <div className="flex gap-5">
                        <span className="w-16">Date: </span>
                        <span>4/12/2024</span>
                    </div>
                    <div className="flex gap-5">
                        <span className="w-16">Time: </span>
                        <span>10:51</span>
                    </div>
                    <div className="flex gap-5">
                        <span className="w-16">Status: </span>
                        <span className="px-2 bg-regal-green text-white rounded-xl">Done</span>
                    </div>
                </div>
                <h1 className="text-xl font-semibold">DOCTOR INFORMATION</h1>
                <div className=" w-[90%] flex gap-5 items-center border border-gray-200 rounded-xl p-5">
                    <div className="flex justify-center items-center p-5">
                        <img src="" alt="Profile" className="w-16 h-16 rounded-full border-2 border-gray-400"/>
                    </div>
                    <div className="flex flex-col items-start gap-3 px-5">
                        <div>
                            <span>Fullname: </span>
                            <span>Dr kadik salah eddine</span>
                        </div>
                        <div>
                            <span>Gender: </span>
                            <span>Male</span>
                        </div>
                        <div>
                            <span>Rating: </span>
                            <span>4.0</span>
                        </div>
                    </div>
                </div>
                <h1 className="text-xl font-semibold">PATIENT INFORMATION</h1> 
                <div className=" w-[90%] border border-gray-200 rounded-xl flex flex-col items-start gap-3 p-5">
                    <div>
                        <span>ID: </span>
                        <span>1234</span>
                    </div>
                    <div>
                        <span>Fullname: </span>
                        <span>Stanissk</span>
                    </div>
                    <div>
                        <span>Gender: </span>
                        <span>Male</span>
                    </div>
                    <div>
                        <span>Age: </span>
                        <span>21</span>
                    </div>
                    <div>
                        <span>Phone Number: </span>
                        <span>0714568789</span>
                    </div>
                </div>
            </div>
        <div/>
        </div>
    )
}

export default OneAppointmentOverview