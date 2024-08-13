import { NavLink } from 'react-router-dom';
import Logo from '../assets/Images/Logo.png';
import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import ToastContext from '../contexts/ToastContext';
import axios from 'axios';
import { motion } from 'framer-motion';

function Navbar() {
    const { user, setUser } = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);
    const toastManager = useContext(ToastContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await axios.post('/logout');
            toastManager.alertSuccess("Logout successful");
            setUser(null);
            setTimeout(() => {
                setRedirect(true);
            }, 1000);
        } catch (err) {
            toastManager.alertError("Logout failed");
        }
    };

    if (redirect) {
        return window.location.href = '/home';
    }

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="w-full p-5 bg-white shadow-md flex justify-between items-center">
            <NavLink to='/home' className='flex items-center gap-2'>
                <img src={Logo} alt="" className='scale-75' />
                <span className='text-regal-green font-semibold'>Docapp</span>
            </NavLink>

            {/* Hamburger Icon for mobile view */}
            <div className="md:hidden">
                <button onClick={handleToggle} className="text-regal-green focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
            </div>

            {/* Menu Links for desktop view */}
            <div className="hidden md:flex gap-5 items-center">
                <NavLink to='/home' className='hover:text-regal-green'>Home</NavLink>
                <NavLink to='/our_doctors' className='hover:text-regal-green'>Our Doctors</NavLink>
                <NavLink to='/contact_us' className='hover:text-regal-green'>Contact Us</NavLink>
            </div>

            {/* Dropdown Menu for mobile view */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`w-full md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
            >
                <div className="flex flex-col gap-3 mt-4">
                    <NavLink to='/home' className='block py-2 px-4 text-center hover:text-regal-green'>Home</NavLink>
                    <NavLink to='/our_doctors' className='block py-2 px-4 text-center hover:text-regal-green'>Our Doctors</NavLink>
                    <NavLink to='/contact_us' className='block py-2 px-4 text-center hover:text-regal-green'>Contact Us</NavLink>
                </div>
            </motion.div>

            {/* User profile and logout button */}
            {user == null ? (
                <div className="hidden md:flex items-center gap-3 font-medium">
                    <NavLink to='/sign_in' className='hover:text-regal-green'>Log in</NavLink>
                    <NavLink to='/sign_up' className='bg-regal-green text-white rounded-xl px-4 py-0.5 hover:bg-opacity-80 active:scale-105 transition-all duration-200'>Sign up</NavLink>
                </div>
            ) : (
                <details className="relative md:flex items-center gap-3 font-medium">
                    <summary className="m-1 cursor-pointer" style={{ listStyle: 'none' }}>
                        <img src="" alt="Profile" className="w-8 h-8 rounded-full border-2 border-gray-400" />
                    </summary>
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: isDropdownOpen ? 'auto' : 0, opacity: isDropdownOpen ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="p-2 shadow-md bg-white z-10 rounded-lg absolute top-10 right-0"
                        style={{ overflow: 'hidden' }}
                    >
                        <li className="mb-2"><NavLink to='/dashboard' className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors duration-300">Dashboard</NavLink></li>
                        <li><button onClick={handleLogout} className="block px-4 py-2 text-red-600 hover:bg-red-100 rounded-md transition-colors duration-300 hover:text-regal-green">Logout</button></li>
                    </motion.ul>
                </details>
            )}
        </nav>
    );
}

export default Navbar;
