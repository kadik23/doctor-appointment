import { Icon } from '@iconify/react/dist/iconify.js';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Images/Logo.png';
import { useContext,useState } from "react";
import ToastContext from '../contexts/ToastContext';
import axios from 'axios';

function SideBar() {
    const [redirect,setRedirect] = useState(null);
    const toastManager = useContext(ToastContext);
    const alertSuccessHandler = () => { toastManager.alertSuccess("Logout successful"); }
    const alertErroreHandler = () => { toastManager.alertError("Logout failed"); }

    const handleLogout =async () =>{
        try{
            const {data} = await axios.post('/logout')
            alertSuccessHandler()
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
        <div className='bg-white w-[15%] py-10 flex flex-col items-center justify-start gap-5'>
            <NavLink to='/home' className='flex justify-center items-center gap-2 mr-8 mb-10'>
                <img src={Logo} alt=""/>
                <span className='text-regal-green font-semibold text-xl'>Docapp</span>
            </NavLink>
            <NavLink
                exact
                to='/dashboard'
                className={
                    ({ isActive }) => isActive ? "text-regal-green" : "hover:text-regal-green"
                } style={{display: 'flex', alignItems: 'center', gap:'0.75rem', width:'10rem'}}
            >
                <Icon icon="material-symbols:dashboard" width="18" height="18" />
                <span>Dashboard</span>
            </NavLink>
            <NavLink
                to='/my_appointments'
                className={
                    ({ isActive }) => isActive ? "text-regal-green" : "hover:text-regal-green"
                } style={{display: 'flex', alignItems: 'center', gap:'0.75rem', width:'10rem'}}
            >
                <Icon icon="icon-park-solid:appointment" width="18" height="18" />
                <span className='text-nowrap'>My Appointment</span>
            </NavLink>
            <hr className='w-[60%] border-1 border-gray-200'/>
            <button onClick={handleLogout} className='flex items-center gap-3 w-40 hover:text-regal-green' >
                <Icon icon="tabler:logout" width="18" height="18" />
                <span>Logout</span>
            </button>
        </div>
    );
}

export default SideBar;
