import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect, useState, useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

const Steps = () => {
  const [StepNbr,setStepNbr] = useState("1")
  const { step} = useContext(BookContext)
  
  useEffect(() => {
    setStepNbr(step)
  }, [step])
  
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center mt-20 mb-10 md:ml-16'>
        <div className='flex items-center'>
        {StepNbr === "1"
          ? <span className='rounded-full w-10 h-10 p-5 bg-regal-green text-white flex items-center justify-center mx-3'>1</span>
          : <Icon icon="material-symbols:check" className='rounded-full w-10 h-10 bg-regal-green text-white mx-3' />
        }
          <span className='mr-2 text-nowrap'>Choose Specialization</span>
        </div>
        {StepNbr === "1"
          ? <hr className='border-2 rounded-md border-gray-300 h-44 md:w-44 md:h-auto'/>
          : <hr className='border-2 rounded-md border-regal-green h-44 md:w-44 md:h-auto'/>
        }
        <div className='flex items-center'>
        {StepNbr === "1"
          ? <span className='rounded-full w-10 h-10 p-5 bg-gray-300 text-white flex items-center justify-center mx-3'>1</span>
          : StepNbr === "2"
              ? <span className='rounded-full w-10 h-10 p-5 bg-regal-green text-white flex items-center justify-center mx-3'>2</span>
              : <Icon icon="material-symbols:check" className='rounded-full w-10 h-10 bg-regal-green text-white mx-3' />
            }
        {StepNbr === "1"
            ?<span  className='mr-2 text-gray-300 text-nowrap'>Select Appointment Date & Time</span>
            :<span  className='mr-2  text-nowrap'>Select Appointment Date & Time</span>
        }
        </div>
        {(StepNbr === "2" || StepNbr === "1")
          ? <hr className='border-2 rounded-md border-gray-300 h-44 md:w-44 md:h-auto'/>
          :  <hr className='border-2 rounded-md border-regal-green h-44 md:w-44 md:h-auto'/>
        }
        <div className='flex items-center'>
            {StepNbr === "3"
              // ? <Icon icon="material-symbols:check" className='rounded-full w-10 h-10 bg-regal-green text-white mx-3' />
              ?<span className='rounded-full w-10 h-10 p-5 bg-regal-green text-white flex items-center justify-center mx-3'>3</span>
              :<span className='rounded-full w-10 h-10 p-5 bg-gray-300 text-white flex items-center justify-center mx-3'>3</span>
            }
              {StepNbr === "3"
              ?<span  className='mr-2  text-nowrap'>Patient Information</span>
              :<span  className='mr-2 text-gray-300 text-nowrap'>Patient Information</span>
            }
        </div>
      </div>
    </div>
  )
}

export default Steps