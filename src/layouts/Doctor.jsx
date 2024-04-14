import { Outlet  } from 'react-router-dom'
import SideBar from '../components/SideBar'

function Doctor() {
    return (
        <div className='w-screen h-screen bg-regal-green bg-opacity-[0.05] flex '>
            <SideBar/>
            <Outlet/>
        </div>  
    )
}

export default Doctor