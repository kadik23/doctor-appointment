import { Icon } from '@iconify/react/dist/iconify.js'
import { NavLink } from 'react-router-dom'
import useDoctor from '../hooks/useDoctor'
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import useSpecializations from '../hooks/useSpecializations';

function OneDoctorOverview() {
    const {getOneDoctor, oneDoctor} = useDoctor()
    const { specializations } = useSpecializations()
    
    const { id } = useParams();
    useEffect(() => {

        getOneDoctor(id)
    }, [])
    
    useEffect(() => {
        getOneDoctor.specializationNames = getOneDoctor.specializationIDs?.map(specID => {
                const specialization = specializations.find(spec => spec.id === specID);
                return specialization ? specialization.name : "";
            });
    }, [oneDoctor, specializations]);
    
  return (
    <>
    {oneDoctor  ? (
        <div className='flex flex-col items-center my-20 gap-5 w-full'>

            <h1 className='mx-auto font-semibold text-2xl'>Doctor Profile</h1>
            <img src="" alt="Doctor Profile" className='w-52 h-52 rounded-full border-4 border-gray-300' />
            <h1 className='mx-auto font-semibold text-xl'>Dr.{oneDoctor.fullname}</h1>
            <div className='flex gap-2 items-center'>
                <Icon icon="ic:baseline-phone" className='text-regal-green' width="18" height="18" />
                <span>{oneDoctor.phone}</span>
            </div>
            <span>Rating({oneDoctor.rate}.0)</span>
            <div>
                <h1 className='text-lg font-bold text-center'>About doctor</h1>
                <p className='text-center'>{oneDoctor.biography}</p>
                <div className='text-center'>
                    <span>Gender: </span>
                    <span className='font-semibold  '>{oneDoctor.gender}</span>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                { oneDoctor.specializationNames?.map((spc, index) => (
                <span className="border border-gray-200 bg-white rounded-xl px-2 text-nowrap  ">{spc}</span>
                ))}
            </div>
            <div className='mx-auto flex gap-2 items-center w-60 h-32 rounded-lg bg-white p-10'>
                <div className='bg-regal-green w-20 h-20 rounded-full flex justify-center items-center'>
                    <Icon icon="medical-icon:i-outpatient" width="40" height="40" className='  text-white'/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-semibold'>300+</span>
                    <span>Patients</span>
                </div>
            </div>
            <NavLink to='/booking' className='  py-1 px-10 rounded-2xl text-white bg-regal-green transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 '>Appointment</NavLink>
        </div>
    ): (
        <p className="mt-20 mx-auto">Loading...</p>
        )}
    </>

  )
}

export default OneDoctorOverview