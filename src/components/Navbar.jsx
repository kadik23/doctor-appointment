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

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

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
                <NavLink to='/sign_in' className={'hover:text-regal-green'}>Log in</NavLink>
                <NavLink to='/sign_up' className='bg-regal-green text-white rounded-xl px-4 py-0.5 hover:bg-opacity-80 active:scale-105 transition-all duration-200'>Sign up</NavLink>
            </div>
            :
            <details 
                className={`transition-all duration-500 ease-in-out ${isOpen ? 'open' : ''}`}
                onClick={handleToggle}
            >
                <summary className="m-1 cursor-pointer" style={{ listStyle: 'none' }}>
                    <img src="" alt="Profile" className="w-8 h-8 rounded-full border-2 border-gray-400"/>
                </summary>
                <ul className="p-2 shadow-md bg-white z-10 rounded-lg absolute top-10 right-0">
                    <li className="mb-2"><a href='/dashboard' className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors duration-300">Dashboard</a></li>
                    <li><button onClick={handleLogout} className="block px-4 py-2 text-red-600 hover:bg-red-100 rounded-md transition-colors duration-300 hover:text-regal-green">Logout</button></li>
                </ul>
            </details>
            }
        </div>
    );
}

export default Navbar;
