import { Icon } from '@iconify/react/dist/iconify.js';
import SignUpImg from '../assets/Images/Signup.png';
import { NavLink, Navigate } from 'react-router-dom';
import Logo from '../assets/Images/Logo.png';
import { useContext, useState } from 'react';
import ToastContext from '../contexts/ToastContext';
import axios from 'axios';
import useSpecializations from '../hooks/useSpecializations';

function SignUp() {
    const [fullname,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [phone,setPhone] = useState('');
    const [mainSpecialization,setMainSpecialization] = useState('');
    const [gender,setGender] = useState('');
    const toastManager = useContext(ToastContext);
    const [redirect, setRedirect] = useState(false);
    const {specializations} = useSpecializations()
    const alertSuccessHandler = () => { toastManager.alertSuccess("Registration successful"); }
    const alertErroreHandler = () => { toastManager.alertError("Registration failed"); }
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleSpecializationChange = (event) => {
        setMainSpecialization(event.target.value);
    };
    
    async function registerUser() {
        try {   
            await axios.post('/register', {
            email,
            fullname,
            phone,
            gender,
            password,
            specializationIds:['6613f4d23caff25d66e8013e']
            });
            alertSuccessHandler();
            setRedirect(true)
        } catch (e) {
            alertErroreHandler();
        }

        if (redirect) {
            return <Navigate to={'/sign_in'} />
        }
    }

  return (
    <div className='w-screen md:h-screen flex flex-col md:flex-row'>
    
        <div  className='md:w-1/2 w-full relative h-screen gap-10 flex flex-col justify-center items-center'>
            <NavLink to='/home'className='flex items-center gap-2 p-2 md:absolute md:top-16'>
                <img src={Logo} alt="" className='scale-125   '/>
                <span className='text-regal-green text-xl font-semibold'>Docapp</span>
            </NavLink>
            <h1 className='text-3xl font-bold text-center  '>Sign up</h1>
            <div className='flex flex-wrap justify-center gap-3 md:gap-10'>
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
                            type="text" 
                            className='bg-[#F0F0F0] w-56 outline-none rounded-r-3xl px-5 py-3 placeholder:font-meduim' 
                            placeholder='Enter Your Phone Number'
                            value={phone}
                            onChange={ev => setPhone(ev.target.value)}
                        />
                    </div>
                    <div className='flex items-center bg-[#F0F0F0] rounded-l-3xl pl-5 rounded-r-3xl'>
                        <Icon icon="ic:baseline-email" width="18" height="18" className='text-[#c9c9c9] '/>
                        <input 
                            type="email" 
                            className='bg-[#F0F0F0] w-56 outline-none rounded-r-3xl px-5 py-3 placeholder:font-meduim' 
                            placeholder='Enter Your Email'
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
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
                        <Icon icon="fontisto:doctor" width="18" height="18" className='text-[#c9c9c9] '/>
                        <select 
                            className='bg-[#F0F0F0] w-56 outline-none rounded-r-3xl px-5 py-4 text-xs'
                            value={mainSpecialization}
                            onChange={handleSpecializationChange}
                        >
                            <option value="Gender" >Enter Your Main Specialization</option>
                            {specializations && specializations.map((specialization, index) => (
                                <option value={specialization.id}>{specialization.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex items-center bg-[#F0F0F0] rounded-l-3xl pl-5 rounded-r-3xl'>
                        <Icon icon="mdi:password" width="18" height="18" className='text-[#c9c9c9] '/>
                        <input 
                            type="password" 
                            className='bg-[#F0F0F0] w-56 outline-none rounded-r-3xl px-5 py-3 placeholder:font-meduim' 
                            placeholder='Enter Your Password'
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
                        />
                    </div>
                </div>
            </div>
            <button type='button' onClick={registerUser} className='w-72 md:w-auto  py-2 px-5 rounded-2xl text-white bg-regal-green transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 '>SIGN UP</button>
        </div>
        <div className='md:h-screen bg-regal-green md:w-1/2 gap-3 w-full md:rounded-bl-full py-4 flex flex-col items-center justify-center text-white'>
            <h1 className='text-2xl font-bold'>One of us?</h1>
            <p className='text-center'>If you're a qualified doctor, we highly encourage you to sign <br />  up for our program today. Don't miss out!</p>
            <NavLink to='/sign_in' className='text-white border-2 border-white py-1 px-5 rounded-2xl hover:bg-white hover:text-regal-green  transition-all duration-200 mx-3'>SIGN IN</NavLink>
            <img src={SignUpImg} alt="" className='h-56 w-56 rounded-full  '/>
        </div>
    </div>
    )
}

export default SignUp