import LandingImg1 from '../assets/Images/LandingImg1.jpg';
import LandingImg2 from '../assets/Images/LandingImg2.jpg';
import LandingImg3 from '../assets/Images/LandingImg3.jpg';
import Arrow_Right from '../assets/Images/Arrow_Right.png';
import { Icon } from '@iconify/react';
import SpecializationCard from '../components/SpecializationCard';
import Doctor from '../components/Doctor';
import { NavLink } from 'react-router-dom';
import useSpecializations from '../hooks/useSpecializations';
import useDoctors from '../hooks/useDoctors';
import { useEffect, useState } from 'react';

function Landing() {
  const {specializations} = useSpecializations()
  const { doctors } = useDoctors()
  const [filterDoctors,setFilterDoctors] = useState([])
  const [specializationSelected,setSpecializationSelected] = useState(null);
  const [filteredDoctors, setFilteredDoctors] = useState(null)

  useEffect(() => {
    setFilterDoctors(doctors)
    console.log(doctors)
  }, [doctors])

  useEffect(() => {
    console.log(specializations)
    setFilteredDoctors(doctors); 
  }, [specializations]);

  useEffect(() => {
    selectDoctor()
  }, [specializationSelected])
  
  const selectDoctor = () => {
    if (!specializationSelected) return setFilteredDoctors(doctors); 
    const specializationFiltered = specializations.filter(specialization => specialization.name == specializationSelected)
    const filtered = doctors.filter((doctor) => {
        return doctor?.specializationIDs?.some((specializationID) => specializationID === specializationFiltered[0].id);
    });
    setFilteredDoctors(filtered); 
}

  return (
    <>
    <div className='mt-10 px-20 py-10 flex '>
      <div className='flex flex-col w-1/2 gap-8'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl font-bold text-'>Book Your Doctor <br /> Appointment Online.</h1>
          <p>Select preferred doctor and time slot to book appointment</p>
        </div>
        <div className='flex items-center gap-10'>
          <NavLink to='/booking' className='text-white bg-regal-green  py-1.5 px-5 rounded-2xl hover:bg-opacity-80 active:scale-105 transition-all duration-200'>Book An Appointment</NavLink>
          <a href='#howSection' className='relative border-regal-green rounded-full flex items-center justify-center p-3 border-2 cursor-pointer' >
              <span  className='font-semibold text-sm absolute bottom-3  bg-white rounded-lg py-0.5 left-10 text-nowrap'>How it works ?</span>
            <Icon icon="ph:play-fill" width="18" height="18" className='text-regal-green '/>
          </a>
        </div>
      </div>
      <div className='w-1/2 relative '>
        <img src={LandingImg1} alt="" className='rounded-lg scale-75 absolute top-[-50px] '/>
      </div>
    </div>
    <div className='bg-regal-green  bg-opacity-10 h-[32rem] mt-24 pt-10' id="howSection">
      <div className='px-10 py-8  relative flex items-start bg-regal-green rounded-xl h-[55%] mx-auto  w-[85%]'>
        <h1 className='text-white font-semibold text-2xl mx-auto mt-5'>Easy Steps To Get Your Solution.</h1>
        <div className='flex flex-col hoverElement gap-3 hover:shadow-lg transition-all duration-500  absolute bottom-[-8rem] items-center p-5 rounded-xl bg-white'>
          <span className='rounded-lg bg-red-400 w-14 h-14 flex items-center justify-center'>
            <Icon icon="iconamoon:search-thin" width="32" height="32" className='text-white' />
          </span>
          <h1 className='text-lg font-semibold'>Find Your Specialist</h1>
          <p className='text-center'>Lorem Ipsum is simply dummy text of <br />the printing and typesetting  .<br /> Lorem Ipsum  been  </p>
          <div className='flex items-center gap-2'>
            <span className='font-semibold'>Find Now</span>
            <Icon icon="bytesize:arrow-right" width="18" height="18" className='transition-300 duration-200' />
          </div>
        </div>
        <div className='flex flex-col hoverElement gap-3 hover:shadow-lg transition-all duration-500  hover: absolute bottom-[-8rem] right-[36.5%] items-center p-5 rounded-xl bg-white'>
          <span className='rounded-lg bg-green-500 w-14 h-14 flex items-center justify-center'>
            <Icon icon="ph:calendar" width="32" height="32" className='text-white'/>
          </span>
          <h1 className='text-lg font-semibold'>Schedule Appointment</h1>
          <p className='text-center'>Lorem Ipsum is simply dummy text of <br />the printing and typesetting  .<br /> Lorem Ipsum  been  </p>
          <div className='flex items-center gap-2'>
            <span className='font-semibold'>Schedule Now</span>
            <Icon icon="bytesize:arrow-right" width="18" height="18" className='transition-300 duration-200' />
          </div>
        </div>
        <div className='flex flex-col hoverElement gap-3 hover:shadow-lg transition-all duration-500  hover: absolute bottom-[-8rem] left-2/3 items-center p-5 rounded-xl bg-white'>
          <span className='rounded-lg bg-orange-500 w-14 h-14 flex items-center justify-center'>
            <Icon icon="lets-icons:lamp-light" width="36" height="36" className='text-white'/>
          </span>
          <h1 className='text-lg font-semibold'>Get Your Solution</h1>
          <p className='text-center'>Lorem Ipsum is simply dummy text of <br />the printing and typesetting  .<br /> Lorem Ipsum  been  </p>
          <div className='flex items-center gap-2'>
            <span className='font-semibold'>Waiting for an appointment</span>
            <Icon icon="bytesize:arrow-right" width="18" height="18" className='transition-300 duration-200' />
          </div>
        </div>
      </div>    
    </div>
    <div className=' h-[32rem] pt-10  flex'>
      <div className='w-1/2 flex items-center justify-center'>
        <div className='p-5'>
          <img src={LandingImg2} alt="" className='h-80 rounded-xl'/>
        </div>
      </div>
      <div className='w-1/2 flex items-center justify-center'>
        <div className='flex flex-col gap-5 justify-center items-start w-[45%]'>
          <h1 className='text-2xl font-bold'>We Ensure Best Medical Service For Your Health.</h1>
          <p>Lorem ipsum dolor sit amet. Id veniam officiis qui porro illum quo.</p>
          <div>
            <div className='flex items-center gap-2'>
              <Icon icon="material-symbols:check" width="18" height="18" className='text-regal-green' />
              <span className='font-semibold'>Top Specialist Doctor</span>
            </div>
            <div className='flex items-center gap-2'>
              <Icon icon="material-symbols:check" width="18" height="18" className='text-regal-green' />
              <span className='font-semibold'>9/24 Emergency Service</span>
            </div>
            <div className='flex items-center gap-2'>
              <Icon icon="material-symbols:check" width="18" height="18" className='text-regal-green' />
              <span className='font-semibold'>Appointment Is Quick And Easy</span>
            </div>
          </div>
          <NavLink to='/booking' className='text-white bg-regal-green  py-1.5 px-5 rounded-2xl hover:bg-opacity-80 active:scale-105 transition-all duration-200'>Book Now</NavLink>
        </div>
      </div>
    </div>
      <div className='bg-regal-green h-[44rem] bg-opacity-10 p-16'>
        <div className='flex w-full justify-between items-end'>
          <h1 className='text-2xl font-bold '>Different Specializations <br /> For Your Health</h1>
          <button className='text-regal-green border border-regal-green py-1.5 px-3 rounded-2xl hover:text-white hover:bg-regal-green transition-all duration-200'>View All Specializations</button>
        </div>
        <div className='flex flex-wrap '>
          {
            specializations && specializations.map((specialization, index) => (
                <SpecializationCard key={index} specializationData={specialization}/>
              ))
          }
        </div>
      </div>
      <div className=' h-[32rem] pt-10  flex'>
        <div className='w-1/2 flex items-center justify-center'>
          <div className='p-5'>
            <img src={LandingImg3} alt="" className='h-80 rounded-xl'/>
          </div>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
          <div className='flex flex-col gap-5 justify-center items-start w-[75%]'>
            <span className='text-regal-green font-semibold text-sm'>About Us</span>
            <h1 className='text-3xl font-bold text-center'>Healing Start Here: Your Journey, Our Commitment</h1>
            <p className='text-center'>Welcome to a healthcare experience designed around you. Our platform simplifies the path to wellness, connecting you seamlessly with expert care. Your health, our priority</p>
            <div>
              <div>
                <div className='flex gap-8 py-2'>
                  <div>
                    <div className='flex items-center text-regal-green'>
                      <h1 className='text-3xl font-semibold'>200</h1>
                      <Icon icon="ic:baseline-plus" width="32" height="32" />                   
                    </div>
                    <p className='font-lg'>Appointments</p>
                  </div>

                  <div>

                    <div className='flex items-center text-regal-green'>
                      <h1 className='text-3xl font-semibold'>50</h1>
                      <Icon icon="ic:baseline-plus" width="32" height="32" />             
                    </div>
                    <p className='font-lg'>Specialized Medical Services</p>
                    </div>
                </div>
              </div>
            </div>
            <NavLink to='/booking' className='text-white bg-regal-green  py-1.5 px-5 rounded-2xl hover:bg-opacity-80 active:scale-105 transition-all duration-200'>Book An Appointment</NavLink>
          </div>
        </div>
      </div>
      <div className='bg-regal-green h-[48rem] bg-opacity-10 p-16 flex flex-col gap-8 '>
        <h1 className='text-2xl font-bold mx-auto'>Meet Our Qualified Doctor</h1>
        <p className='mx-auto text-center'>Talk to a doctor within minutes. Our qualified network of doctors is available 9/24. <br /> You can get a consultation whenever you need.</p>
        <div className='flex flex-wrap '>
        <button 
          className='text-white border bg-regal-green py-1 px-5 rounded-2xl hover:text-white hover:bg-regal-green transition-all duration-200 mx-3'
          onClick={() => setSpecializationSelected()}            
          >All Specialists</button>
          {
          specializations && specializations.slice(0,5).map((specialization, index) => (
          <button 
            onClick={() => setSpecializationSelected(specialization.name)}            
            key={index} 
            className='text-gray-500 border border-gray-500 py-1 px-5 rounded-2xl hover:text-white hover:bg-regal-green transition-all duration-200 mx-3'
            >{specialization.name}</button>
          ))
          
        }

        </div>
        <div className='flex flex-wrap py-3'>
        {doctors && filteredDoctors && filteredDoctors.slice(0,4).map((doctor, index) => (
              <Doctor doctorData = {doctor} key={index} />
            ))
        }
        </div>
          <NavLink to={'/our_doctors'} className='text-regal-green border border-regal-green py-1 px-5 rounded-2xl hover:text-white hover:bg-regal-green transition-all duration-200 mx-auto'>See More Doctors</NavLink>
      </div>
      <div className='bg-regal-green flex items-center py-16 px-20 justify-between'>
        <div className='text-white flex flex-col gap-3'>
          <h1 className='font-semibold text-2xl '>Are You a Qualified Doctor? </h1>
          <p className='text-sm opacity-80'>Access Dashboard to control your Schedule Appointment <br /> with your patient on the Docapp app. Join us</p>
        </div>
        <div className='flex items-center relative'>
          <img src={Arrow_Right} alt="" className='h-16 absolute top-5 right-36 opacity-80'/>
          <NavLink to='/sign_up' className='bg-white hover:opacity-90 active:scale-105 transition-all duration-300 py-1 px-3 text-regal-green flex gap-2 rounded-xl items-center'>
            <Icon icon="gravity-ui:calendar" width="18" height="18" />
            <span>Apply Now</span>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Landing