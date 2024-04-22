import { NavLink,useParams } from "react-router-dom"
import useAppointment from '../hooks/useAppointment';
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import useDoctor from "../hooks/useDoctor";
import usePatient from "../hooks/usePatient";

function OneAppointmentOverview() {
    const {oneAppointment,getOneAppointment,deleteAppointment} = useAppointment()
    const {oneDoctor,getOneDoctor} = useDoctor()
    const {patient,getOnePatient} = usePatient()
    const { id } = useParams();
    const {user} = useContext(UserContext)

    useEffect(() => {
        getOneAppointment(id)
    }, [user,id])

    useEffect(() => {
        getOneDoctor(oneAppointment?.doctor_id)
        getOnePatient(oneAppointment?.patient_id)
    }, [oneAppointment])
    

    return (
        <div className="my-12 mx-10 ">
            <div className="flex w-full items-center gap-5 justify-end py-5">
                <button onClick={() => deleteAppointment(id)}  className='  py-1 px-5 rounded-2xl text-white bg-red-500 transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 '>Cancel Appointment</button>
                <NavLink to='/my_appointments'  className='  py-1 px-5 rounded-2xl text-white bg-blue-500 transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 '>View All Appointments</NavLink>
            </div>
            <div className="p-10 border flex  border-gray-200 rounded-xl shadow-md bg-white">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-xl font-semibold text-nowrap">APPOINTMENT INFORMATION</h1>
                    {oneAppointment  ? (
                    <div className="w-[90%] border border-gray-200 rounded-xl flex flex-col items-start gap-3 p-5">
                        <div className="flex gap-5">
                            <span className="w-16">Date: </span>
                            <span>{oneAppointment.date}</span>
                        </div>
                        <div className="flex gap-5">
                            <span className="w-16">Time: </span>
                            <span>{oneAppointment.time}</span>
                        </div>
                        <div className="flex gap-5">
                            <span className="w-16">Status: </span>
                            <span className="px-2 bg-regal-green text-white rounded-xl">{oneAppointment.status}</span>
                        </div>
                    </div>
                    ): (
                    <p className="mt-20 mx-auto">Loading...</p>
                    )}
                </div>
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-xl font-semibold">DOCTOR INFORMATION</h1>
                    {oneDoctor && (
                    <div className=" w-[90%] flex  items-center border border-gray-200 rounded-xl p-5">
                        <div className="flex justify-center items-center p-5">
                            <img src="" alt="Profile" className="w-16 h-16 rounded-full border-2 border-gray-400"/>
                        </div>
                        <div className="flex flex-col items-start gap-3 px-5">
                            <div>
                                <span>Fullname: </span>
                                <span className="text-nowrap  ">Dr {oneDoctor.fullname}</span>
                            </div>
                            <div>
                                <span>Gender: </span>
                                <span>{oneDoctor.gender}</span>
                            </div>
                            <div>
                                <span>Rating: </span>
                                <span>{oneDoctor.rate}.0</span>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-xl font-semibold">PATIENT INFORMATION</h1> 
                    {patient && (
                    <div className=" w-[100%] border border-gray-200 rounded-xl flex flex-col items-start gap-3 p-5">
                        <div>
                            <span>ID: </span>
                            <span>{patient.id}</span>
                        </div>
                        <div>
                            <span>Fullname: </span>
                            <span>{patient.fullname}</span>
                        </div>
                        <div>
                            <span>Gender: </span>
                            <span>{patient.gender}</span>
                        </div>
                        <div>
                            <span>Age: </span>
                            <span>{patient.age}</span>
                        </div>
                        <div className="flex">
                            <span className="text-nowrap pr-1">Phone Number: </span>
                            <span> {patient.age}</span>
                        </div>
                    </div>
                    )}
                </div>
                </div>
        <div/>
        </div>
    )
}

export default OneAppointmentOverview