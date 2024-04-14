import { NavLink } from 'react-router-dom';
import Logo from '../assets/Images/Logo.png';

function Navbar() {
    return (
        <div className='flex justify-around items-center py-5 gap-24 w-full h-10'>
            <NavLink to='/home' className='flex items-center gap-2'>
                <img src={Logo} alt="" className='scale-75 '/>
                <span className='text-regal-green font-semibold'>Docapp</span>
            </NavLink>
            <div className='flex gap-5 items-center'>
                <NavLink to='/home' className='transition-all duration-300  text-black hover:text-regal-green'>Home</NavLink> 
                <NavLink to='/our_doctors' className='transition-all duration-300 opacity-50 hover:text-regal-green hover:opacity-100  '>Our Doctors</NavLink> 
                <NavLink to='/' className='transition-all duration-300 opacity-50 hover:text-regal-green hover:opacity-100'>Contact us</NavLink> 
            </div>
            <div className='flex items-center mr-20 gap-3 font-meduim'>
                <NavLink to='/sign_in'>Log in</NavLink>
                <NavLink to='/sign_up' className='bg-regal-green text-white rounded-xl px-4 py-0.5 hover:bg-opacity-80 active:scale-105 transition-all duration-200'>Sign up</NavLink>
            </div>
        </div>
    )
}

export default Navbar