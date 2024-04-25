import { useContext, useState } from 'react';
import Steps from './Steps'
import { Icon } from '@iconify/react/dist/iconify.js'
import ConfirmationContext from '../contexts/ConfirmationContext';
import { BookContext } from '../contexts/BookContext';
import useBooking from '../hooks/useBooking';
import axios from 'axios';

function PersonalInformation() {
    const toastManager = useContext(ConfirmationContext);
    const alertSuccessHandler = () => { toastManager.alertSuccess('Success Message') }
    const alertErroreHandler = () => { toastManager.alertError("Error Message"); }
    const [fullname,setFullName] = useState('');
    const [phone,setPhone] = useState('');
    const [age,setAge] = useState('');
    const handleGenderChange = (event) => {
        patientData.gender = event.target.value;
    };
    const { previousStep,} = useBooking()
    const {  patientData } = useContext(BookContext)
    async function sendAppointment() {
        patientData.fullname = fullname
        patientData.phone = phone
        patientData.age = age
        try {   
            await axios.post('appointments/createAppointment', 
            patientData
            );
            alertSuccessHandler("Appointment successfully sent");
        } catch (e) {
            alertErroreHandler();
        }
    }

    return (
    <div>
        <Steps step="2" />
        <div className=' h-screen gap-10 flex flex-col justify-center items-center duration-500'>
            <h1 className='text-3xl font-bold text-center  '>Enter Your Personal Information</h1>
            <div className='flex gap-10'>
                <div className='gap-3 flex flex-col'>
                    <div className='flex items-center bg-[#F0F0F0] rounded-l-3xl pl-5 rounded-r-3xl'>
                        <Icon icon="ph:user-fill" width="18" height="18" className='text-[#c9c9c9] '/>
                        <input 
                            type="text" 
                            className='bg-[#F0F0F0] w-56 outline-none rounded-r-3xl px-5 py-3 placeholder:font-meduim' 
                            placeholder='Enter Your FullName'
                            value={fullname}
                            onChange={ev => setFullName(ev.target.value)}
                        />
                    </div>
                    <div className='flex items-center bg-[#F0F0F0] rounded-l-3xl pl-5 rounded-r-3xl'>
                        <Icon icon="mdi:telephone" width="18" height="18" className='text-[#c9c9c9] '/>
                        <input 
                            type="number" 
                            className='bg-[#F0F0F0] w-56 outline-none rounded-r-3xl px-5 py-3 placeholder:font-meduim' 
                            placeholder='Enter Your Phone Number'
                            value={phone}
                            onChange={ev => setPhone(ev.target.value)}
                        />
                    </div>
                </div>
            
                <div className='gap-3 flex flex-col'>
                    <div className='flex items-center bg-[#F0F0F0] rounded-l-3xl pl-5 rounded-r-3xl'>
                        <Icon icon="foundation:torsos-female-male" width="18" height="18" className='text-[#c9c9c9] '/>
                        <select 
                            className='bg-[#F0F0F0] w-56 outline-none rounded-r-3xl px-5 py-3'
                            onChange={handleGenderChange}
                        >
                            <option value="Gender">Enter Your Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className='flex items-center bg-[#F0F0F0] rounded-l-3xl pl-5 rounded-r-3xl'>
                        <Icon icon="game-icons:ages" width="18" height="18" className='text-[#c9c9c9] '/>
                        <input 
                            type="number" 
                            min='0' 
                            className='bg-[#F0F0F0] w-56 outline-none rounded-r-3xl px-5 py-3 placeholder:font-meduim' 
                            placeholder='Enter Your Age'
                            value={age}
                            onChange={ev => setAge(ev.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-end items-center mr-52 my-10 w-full'>
                <button onClick={previousStep} className='  py-1 px-5 rounded-2xl text-regal-green border border-regal-green transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 '>PREVIOUS</button>
                {fullname && age && phone 
                    ? <button onClick={sendAppointment} className='  py-1 px-5 rounded-2xl text-white bg-regal-green transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 mr-24'>NEXT</button>
                    : <button className=' cursor-default py-1 px-5 rounded-2xl bg-black text-white opacity-20 mx-3 mr-24'>Book</button>
                }
            </div>
        </div>
    </div>
  )
}

export default PersonalInformation