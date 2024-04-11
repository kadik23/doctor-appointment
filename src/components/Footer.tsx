import { Icon } from '@iconify/react/dist/iconify.js'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full flex flex-col justify-around items-start p-10 h-56 bg-regal-green bg-opacity-10'>
        <div className='w-[40%] flex justify-around'>
            <h1 className='text-2xl'> Follow us</h1>
            <NavLink className=' transition-all duration-300 ' to='/'>
              <Icon  icon="mdi:linkedin" className='hoverText' style={{color: "rgb(156 163 175)" , height:"32px", width:"32px"}} />
            </NavLink>
            <NavLink className=' transition-all duration-300 '  to='/'>
              <Icon  icon="mdi:github" style={{ color: "rgb(156 163 175)" ,height:"32px", width:"32px"}} />
            </NavLink>
            <NavLink className=' transition-all duration-300 ' to='/'>
              <Icon  icon="ri:instagram-fill" className='hoverText' style={{color: "rgb(156 163 175)" , height:"32px", width:"32px"}} />
            </NavLink>
        </div>
        <hr className=' w-[95%] border-1 ml-9 border-gray-400'/>
        <div className='w-[50%] flex justify-around'>
                <NavLink className={`hover:text-regal-green transition-all duration-300 `} to='/'>Docaap</NavLink>
                <NavLink className={`hover:text-regal-green transition-all duration-300 `} to='/about_us'>About us</NavLink>
                <NavLink className={`hover:text-regal-green transition-all duration-300 `} to='privacy'>Privacy</NavLink>
                <NavLink className={`hover:text-regal-green transition-all duration-300 `} to='terms'>Terms</NavLink>
        </div>
    </div>
  )
}

export default Footer