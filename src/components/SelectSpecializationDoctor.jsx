import { Icon } from '@iconify/react/dist/iconify.js'
import Doctor from '../components/Doctor'
import { useEffect } from 'react';
import useBooking from '../hooks/useBooking';

function SelectSpecialization() {
    
    const {
        selectedOption,
        doctors,
        specializationSelected,setSpecializationSelected,
        doctorSelected,setDoctorSelected,
        specializations,
        filteredDoctors,
        handleOptionChange,
        selectDoctor,
        nextStep,
        previousStep,
    } = useBooking()
    useEffect(() => {
        selectDoctor()
    }, [specializationSelected])

    return (
    <div >
        <div className='flex items-center mt-20 mb-10 ml-20'>
            <div className='flex items-center'>
                <span className='rounded-full w-10 h-10 p-5 bg-regal-green text-white flex items-center justify-center mx-3'>1</span>
                <span className='mr-2'>Choose Specialization</span>
            </div>
            <hr className='border-2 bg-gray-300 w-32'/>
            <div className='flex items-center'>
                <span className='rounded-full w-10 h-10 p-5 bg-gray-300 text-white flex items-center justify-center mx-3'>2</span>
                <span  className='mr-2 text-gray-300'>Select Appointment</span>
            </div>
            <hr className='border-2 border-bg-gray-300 w-32'/>
            <div className='flex items-center'>
                <span className='rounded-full w-10 h-10 p-5 bg-gray-300 text-white flex items-center justify-center mx-3'>3</span>
                <span  className='mr-2 text-gray-300'>Patient Information</span>
            </div>
            <hr className='border-2 bg-gray-300 w-32'/>
        </div>
        <h1 className='text-center text-2xl font-semibold '>Choose Specialization</h1>
        <hr className=' my-2 w-[10%] border-2 rounded-xl  border-regal-green mx-auto mb-5'/>
        <div className='mb-10'>
            <div>
                <h1 className='text-center text-lg font-bold mt-10'>Available Specializations</h1>
                <div className='relative w-[80%]   mx-auto  '>
                    <div className="flex scroll-container w-full scrollbar-none bg-regal-green bg-opacity-10 m-5 rounded-xl p-5">
                        <div className="scroll-content flex gap-16 min-w-full">
                            {specializations.length > 0 ? (specializations.map((specialization, index) => (
                            <div key={index} >
                                <div className='cursor-pointer hover:scale-105 transition-all duration-500' onClick={() => setSpecializationSelected(specialization.name)}>
                                    <img src="ICON" alt="" className='w-20 h-20 rounded-full border-2 border-gray-400'/>
                                    <h1> {specialization.name}</h1>
                                </div>
                            </div>
                            )))
                            : ( <span className='mx-auto'>Loading...</span>)
                        }
                        </div>
                    </div>
                    <Icon icon="fe:arrow-left" width="18" height="18"className='text-regal-green  absolute left-5 top-[40%] ' />
                    <Icon icon="fe:arrow-right" width="18" height="18"className='text-regal-green absolute right-0 top-[40%]' />
                </div>
            </div>
            <div className='text-center text-nowrap mx-auto'> {specializationSelected?  <span className='font-semibold '>Selected: {specializationSelected}</span>: <span className='font-semibold '>Please select a specialization</span>}</div>
            <div className={`relative w-[80%]   mx-auto ${filteredDoctors !== null ? '' : 'hidden'} transition-all duration-300 ease-in-out`}>
                <div className="flex scroll-container w-full scrollbar-none bg-regal-green bg-opacity-10 m-5 rounded-xl p-5">
                    <div className="scroll-content flex gap-16 min-w-full">
                    {
                filteredDoctors && filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor, index) => (
                    <div key={index}>
                        <Doctor doctorData={doctor}/>
                        <div key={index} className='flex w-full justify-center my-2' onClick={() => setDoctorSelected(doctor)}>
                        <input
                            type="radio"
                            id={`option-${index}`}
                            className="hidden"
                            name="options"
                            checked={selectedOption === index}
                            onChange={() => handleOptionChange(index)}
                        />
                        <label
                            htmlFor={`option-${index}`}
                            className="w-6 h-6 rounded-full border border-gray-300 bg-white cursor-pointer flex items-center justify-center"
                        >
                            <div className={`w-3 h-3 rounded-full ${selectedOption === index ? 'bg-regal-green' : ''}`}></div>
                        </label>
                        </div>
                    </div>
                    ))
                ) : (
                    <div className='mx-auto font-semibold '>No doctors in this selected specialization</div>
                )
                }
                    </div>
                </div>                
               {!filteredDoctors && <div className='text-center w-36 text-nowrap mx-auto'>Selected: <span className='font-semibold'>{doctorSelected && `Dr ${doctorSelected.fullname}`}</span></div>}
            </div>
            <div className='flex justify-end items-center mr-52 my-10 w-full'>
                <button onClick={nextStep} className='  py-1 px-5 rounded-2xl text-white bg-regal-green transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 mr-24'>NEXT</button>
            </div>
        </div>
    </div>  )
}

export default SelectSpecialization