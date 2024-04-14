import { Icon } from '@iconify/react/dist/iconify.js';
import SignInImg from '../assets/Images/SignIn.png';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Images/Logo.png';
import { useContext, useState } from 'react';
import ToastContext from '../contexts/ToastContext';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    // const {userID,setUserID} = useContext(UserContext);

    const toastManager = useContext(ToastContext);
    const alertSuccessHandler = () => { toastManager.alertSuccess("Login successful"); }
    const alertErroreHandler = () => { toastManager.alertError("Login failed"); }
    
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            const data = await axios.post('/auth/login', {email,password});
            // setUserID(data.user.userID);
            console.log(data)
            alertSuccessHandler()
            setTimeout(() => {
            setRedirect(true);
            }, 3000);
        } catch (e) {
            alertErroreHandler()
        }
    }

    if (redirect) {
    return window.location.href = '/dashboard';
    }

  return (
    <div className='w-screen h-screen flex'>
        <div className='h-screen bg-regal-green w-1/2 gap-3  rounded-br-full flex flex-col items-center justify-center text-white'>
            <h1 className='text-2xl font-bold'>Now here?</h1>
            <p className='text-center'>Neque porro quisquam est qui dolorem ipsum quia dolor <br /> sit amet, consectetur, adipisci velit.</p>
            <NavLink to='/sign_up' className='text-white border-2 border-white py-1 px-5 rounded-2xl hover:bg-white hover:text-regal-green  transition-all duration-200 mx-3'>SIGN UP</NavLink>
            <img src={SignInImg} alt="" className='h-56 w-56 rounded-full'/>
        </div>
        <form onSubmit={handleLoginSubmit} className='w-1/2 h-screen gap-10 flex flex-col justify-center items-center relative'>
                <NavLink to='/home'className='flex items-center gap-2 p-2 absolute top-16'>
                    <img src={Logo} alt="" className='scale-125   '/>
                    <span className='text-regal-green text-xl font-semibold'>Docapp</span>
                </NavLink>
                <h1 className='text-3xl font-bold text-center  '>Sign in</h1>
            <div className='gap-8 flex flex-col'>
                <div className='flex items-center bg-[#F0F0F0] rounded-l-3xl pl-5 rounded-r-3xl'>
                    <Icon icon="ic:baseline-email" width="18" height="18" className='text-[#c9c9c9] '/>
                    <input 
                        type="email" 
                        className='bg-[#F0F0F0] w-72 outline-none rounded-r-3xl px-5 py-3 placeholder:font-meduim' 
                        placeholder='Enter Your Email'
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                    />
                </div>
                <div className='flex items-center bg-[#F0F0F0] rounded-l-3xl pl-5 rounded-r-3xl'>
                    <Icon icon="mdi:password" width="18" height="18" className='text-[#c9c9c9] '/>
                    <input 
                        type="password" 
                        className='bg-[#F0F0F0] w-72 outline-none rounded-r-3xl px-5 py-3 placeholder:font-meduim' 
                        placeholder='Enter Your Password'
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                </div>
            </div>
            <button type='submit' className='  py-2 px-5 rounded-2xl text-white bg-regal-green transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 '>SIGN IN</button>
        </form>
    </div>
  )
}

export default SignIn