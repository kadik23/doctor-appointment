import { NavLink, } from 'react-router-dom';
import Logo from '../assets/Images/Logo.png';
import {UserContext} from "../contexts/UserContext";
import { useContext,useState } from "react";
import ToastContext from '../contexts/ToastContext';
import axios from 'axios';

function Navbar() {
    const {user,setUser } = useContext(UserContext)
    const [redirect,setRedirect] = useState(null);
    const toastManager = useContext(ToastContext);
    const alertSuccessHandler = () => { toastManager.alertSuccess("Logout successful"); }
    const alertErroreHandler = () => { toastManager.alertError("Logout failed"); }

    const handleLogout =async () =>{
        try{
            const {data} = await axios.post('/logout')
            alertSuccessHandler()
            setUser(null);
            setTimeout(() => {
                setRedirect(true);
            }, 1000);
        }catch(err){
        alertErroreHandler();
    }
    }

    if (redirect) {
        return window.location.href = '/home';
    }

    return (
        <div className='flex justify-around items-center py-5 gap-24 w-full h-10'>
            <NavLink to='/home' className='flex items-center gap-2'>
                <img src={Logo} alt="" className='scale-75' />
                <span className='text-regal-green font-semibold'>Docapp</span>
            </NavLink>
            <div className='flex gap-5 items-center'>
                <NavLink exact to='/home' className={ ({ isActive, isPending }) =>
                    isPending ? "text-regal-green" : isActive ? "text-regal-green" : "hover:text-regal-green"
                }>
                Home</NavLink>
                <NavLink to='/our_doctors' className={ ({ isActive, isPending }) =>
                    isPending ? "text-regal-green" : isActive ? "text-regal-green" : "hover:text-regal-green"
                }>Our Doctors</NavLink>
                <NavLink to='/contact_us' className={ ({ isActive, isPending }) =>
                    isPending ? "text-regal-green" : isActive ? "text-regal-green" : "hover:text-regal-green"
                }>Contact Us</NavLink>
            </div>
            { user == null ?
            <div className='flex items-center mr-20 gap-3 font-medium'>
                <NavLink to='/sign_in'>Log in</NavLink>
                <NavLink to='/sign_up' className='bg-regal-green text-white rounded-xl px-4 py-0.5 hover:bg-opacity-80 active:scale-105 transition-all duration-200'>Sign up</NavLink>
            </div>
            :
            <button onClick={handleLogout} className={'mr-12 font-medium'}>Logout</button>
            }
        </div>
    );
}

export default Navbar;
