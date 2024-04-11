import { Icon } from '@iconify/react/dist/iconify.js';
import SignUpImg from '../assets/Images/Signup.png';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Images/Logo.png';

function SignUp() {
  return (
    <div className='w-screen h-screen flex'>
       
        <form className='w-1/2 relative h-screen gap-10 flex flex-col justify-center items-center'>
                <NavLink to='/home'className='flex items-center gap-2 p-2 absolute top-16'>
                    <img src={Logo} alt="" className='scale-125   '/>
                    <span className='text-regal-green text-xl font-semibold'>Docapp</span>
                </NavLink>
            <h1 className='text-3xl font-bold text-center  '>Sign up</h1>
            <div className='flex gap-10'>
                <div className='gap-3 flex flex-col'>
                    <div className='flex items-center bg-[#F0F0F0] rounded-l-3xl pl-5 rounded-r-3xl'>
                        <Icon icon="ph:user-fill" width="18" height="18" className='text-[#c9c9c9] '/>
                        <input type="text" className='bg-[#F0F0F0] w-56 outline-none rounded-r-3xl px-5 py-3 placeholder:font-meduim' placeholder='Enter Your FullName'/>
                    </div>
                    <div className='flex items-center bg-[#F0F0F0] rounded-l-3xl pl-5 rounded-r-3xl'>
                        <Icon icon="mdi:telephone" width="18" height="18" className='text-[#c9c9c9] '/>
                        <input type="text" className='bg-[#F0F0F0] w-56 outline-none rounded-r-3xl px-5 py-3 placeholder:font-meduim' placeholder='Enter Your Phone Number'/>
                    </div>
                    <div className='flex items-center bg-[#F0F0F0] rounded-l-3xl pl-5 rounded-r-3xl'>
                        <Icon icon="ic:baseline-email" width="18" height="18" className='text-[#c9c9c9] '/>
                        <input type="text" className='bg-[#F0F0F0] w-56 outline-none rounded-r-3xl px-5 py-3 placeholder:font-meduim' placeholder='Enter Your Email'/>
                    </div>

                </div>
            
                <div className='gap-3 flex flex-col'>
                    <div className='flex items-center bg-[#F0F0F0] rounded-l-3xl pl-5 rounded-r-3xl'>
                        <Icon icon="foundation:torsos-female-male" width="18" height="18" className='text-[#c9c9c9] '/>
                        <select className='bg-[#F0F0F0] w-56 outline-none rounded-r-3xl px-5 py-3'>
                            <option value="Gender">Enter Your Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className='flex items-center bg-[#F0F0F0] rounded-l-3xl pl-5 rounded-r-3xl'>
                        <Icon icon="fontisto:doctor" width="18" height="18" className='text-[#c9c9c9] '/>
                        <select className='bg-[#F0F0F0] w-56 outline-none rounded-r-3xl px-5 py-4 text-xs' >
                            <option value="Gender" >Enter Your Main Specialization</option>
                            <option value="Male">1</option>
                            <option value="Female">2</option>
                        </select>
                    </div>
                    <div className='flex items-center bg-[#F0F0F0] rounded-l-3xl pl-5 rounded-r-3xl'>
                        <Icon icon="mdi:password" width="18" height="18" className='text-[#c9c9c9] '/>
                        <input type="text" className='bg-[#F0F0F0] w-56 outline-none rounded-r-3xl px-5 py-3 placeholder:font-meduim' placeholder='Enter Your Password'/>
                    </div>
                </div>
            </div>
            <button className='  py-2 px-5 rounded-2xl text-white bg-regal-green transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 '>SIGN UP</button>
        </form>
        <div className='h-screen bg-regal-green w-1/2 gap-3  rounded-bl-full flex flex-col items-center justify-center text-white'>
            <h1 className='text-2xl font-bold'>One of us?</h1>
            <p className='text-center'>Neque porro quisquam est qui dolorem ipsum quia dolor <br /> sit amet, consectetur, adipisci velit.</p>
            <NavLink to='/sign_in' className='text-white border-2 border-white py-1 px-5 rounded-2xl hover:bg-white hover:text-regal-green  transition-all duration-200 mx-3'>SIGN IN</NavLink>
            <img src={SignUpImg} alt="" className='h-56 w-56 rounded-full  '/>
        </div>
    </div>
    )
}

export default SignUp