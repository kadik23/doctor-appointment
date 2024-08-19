import { Outlet  } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Root() {
    return (
        <div className='md:min-h-screen w-full pt-5 bg-regal-green bg-opacity-[0.02]'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>  
    )
}

export default Root