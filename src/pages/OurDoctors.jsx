import { Icon } from "@iconify/react/dist/iconify.js"
import { NavLink } from "react-router-dom"
import slider from '../assets/Images/slider.jpg';
import useDoctors from '../hooks/useDoctors';
import useSpecializations from '../hooks/useSpecializations';
import { useEffect } from "react";

function OurDoctors() {
    const {doctors} = useDoctors()
    const { specializations } = useSpecializations()
    useEffect(() => {
        doctors.forEach(doc => {
            doc.specializationNames = doc.specializationIDs.map(specID => {
                const specialization = specializations.find(spec => spec.id === specID);
                return specialization ? specialization.name : "";
            });
        });
        console.log(doctors)
    }, [doctors, specializations]);
    
    return (
    <>
    <div className="w-full h-56 mt-3" style={{backgroundImage:`url('${slider}')`}}>
        <div className="w-full  h-full bg-regal-green opacity-85 flex flex-col items-center justify-center">
            <h1 className="text-white text-2xl font-bold">Doctors</h1>
            <hr className=' my-2 w-[5%] border-2 rounded-xl  border-white'/>
            <p className="text-white">dolorem ipsum quia dolor sit amet.</p>
        </div>
    </div>
    <div className="flex items-start mx-5">
        <div className="p-10 flex flex-col items-start gap-5 bg-white w-1/4 rounded-2xl m-10">
            <h1 className="text-xl font-semibold">Doctor Filter</h1>
            <div className='flex items-center bg-[#F0F0F0] rounded-l-3xl pl-5 rounded-r-3xl '>
                    <input type="search" className='bg-[#F0F0F0] w-48 outline-none rounded-l-3xl px-3 py-1 placeholder:font-meduim placeholder:text-sm' placeholder='Search doctors by fullname'/>
                    <div className="bg-regal-green py-2 rounded-r-3xl px-3 cursor-pointer hover:bg-opacity-80">
                        <Icon icon="mynaui:search" width="18" height="18" className='text-white '/>
                    </div>
            </div>  
            <div>
                <h1>Gender</h1>
                <div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="Male" id="" />
                        <label htmlFor="Male">Male</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="Female" id="" />
                        <label htmlFor="Female">Female</label>
                    </div>
                </div>
            </div>
            <div>
                <h1>Select Specializations</h1>
                <div>
                    {specializations?.map(specialization=>(
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="Spc 1" id="" />
                            <label htmlFor="Spc 1">{specialization.name}</label>
                        </div>
                        ))}
                </div>
            </div>
        </div>
        {doctors && doctors.length > 0 ? (
    <div className="flex flex-col gap-10 my-5 mx-6">
        {doctors.map(doctor => (
            <div className="flex justify-between p-3 my-5 shadow-sm rounded-xl border border-gray-200">
                <div className="flex">
                    <div className="m-5">
                        <img src="Profile" alt="" className="w-32 h-32 rounded-full"/>
                    </div>
                    <div className="m-5 flex flex-col gap-5 items-start">
                        <span className="font-semibold">Dr {doctor.fullname}</span>
                        <span>{doctor.email}</span>
                        <span>rate: 4</span>
                        <div className="flex gap-3 items-center">
                            {doctor.specializationNames?.map((spc, index) => (
                                <span key={index} className="border border-gray-200 bg-white rounded-xl px-2 text-nowrap">
                                    {spc}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-end">
                    <div className="flex flex-col w-full items-end gap-3 justify-end py-5">
                        <NavLink to={`/one_doctor_overview/${doctor._id}`} className='py-1 px-5 rounded-2xl bg-white border border-regal-green text-regal-green transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 '>VIEW PROFILE</NavLink>
                        <NavLink to='/booking' className='py-1 px-5 rounded-2xl text-white bg-regal-green transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 '>Book APPOINTMENT</NavLink>
                    </div>
                </div>                
            </div>
                ))}
        </div>
       ) : (
           <p className="mt-10 mx-auto">Loading...</p>
       )}
    </div>
    </>
  )
}

export default OurDoctors