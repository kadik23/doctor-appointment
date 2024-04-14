import { Icon } from '@iconify/react/dist/iconify.js'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Images/Logo.png';

function SideBar() {
  return (
    <div className='bg-white w-[15%] py-10 flex flex-col items-center justify-start gap-5'>
        <NavLink to='/home' className='flex justify-center items-center gap-2 mr-8 mb-10'>
            <img src={Logo} alt=""/>
            <span className='text-regal-green font-semibold text-xl'>Docapp</span>
        </NavLink>
        <NavLink className='flex items-center gap-3 w-40 text-regal-green' to="/dashboard">
            <Icon icon="material-symbols:dashboard" width="18" height="18" />
            <span>Dashboard</span>
        </NavLink>
        <NavLink to="/my_appointments" className='flex items-center gap-3 w-40' >
            <Icon icon="icon-park-solid:appointment" width="18" height="18" />
            <span className='text-nowrap'>My Appointment</span>
        </NavLink>
        <hr className=' w-[60%] border-1  border-gray-200'/>
        <NavLink className='flex items-center gap-3 w-40' to="/logout">
            <Icon icon="tabler:logout" width="18" height="18" />
            <span>Logout</span>
        </NavLink>
    </div>
    )
}

export default SideBar