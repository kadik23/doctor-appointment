import { Icon } from '@iconify/react/dist/iconify.js'

function BookAppointment() {
  return (
    <div>
        <div className='flex items-center mt-20 mb-10 ml-20'>
            <div className='flex items-center'>
                <span className='rounded-full w-10 h-10 p-5 bg-regal-green text-white flex items-center justify-center mx-3'>1</span>
                <span className='mr-2'>Choose Specialization</span>
            </div>
            <hr className='border-2 bg-gray-300 w-32'/>
            <div className='flex items-center'>
                <span className='rounded-full w-10 h-10 p-5 bg-gray-300 text-white flex items-center justify-center mx-3'>2</span>
                <span  className='mr-2 text-gray-300'>Select Appointment</span>
            </div>
            <hr className='border-2 border-bg-gray-300 w-32'/>
            <div className='flex items-center'>
                <span className='rounded-full w-10 h-10 p-5 bg-gray-300 text-white flex items-center justify-center mx-3'>3</span>
                <span  className='mr-2 text-gray-300'>Patient Information</span>
            </div>
            <hr className='border-2 bg-gray-300 w-32'/>
        </div>
        <h1 className='text-center text-2xl font-semibold '>Choose Specialization</h1>
        <hr className=' my-2 w-[10%] border-2 rounded-xl  border-regal-green mx-auto mb-5'/>
        <div className='mb-10'>
            <div>
                {/* <div className='flex items-center justify-center rounded-l-3xl pl-5 rounded-r-3xl '>
                        <input type="search" className='bg-[#F0F0F0] w-48 outline-none rounded-l-3xl px-3 py-1 placeholder:font-meduim placeholder:text-sm' placeholder='Search Specialization'/>
                        <div className="bg-regal-green py-2 rounded-r-3xl px-3 cursor-pointer hover:bg-opacity-80">
                            <Icon icon="mynaui:search" width="18" height="18" className='text-white '/>
                        </div>
                </div>   */}
                <h1 className='text-center text-lg font-bold mt-10'>Available Specializations</h1>
                <div className='relative w-[80%]   mx-auto  '>
                    <div className="flex scroll-container w-full scrollbar-none bg-[#F0F0F0] m-5 rounded-xl p-5">
                        <div className="scroll-content flex gap-16 min-w-full">
                            {Array.from({ length: 10 }).map((_, index) => (
                            <div key={index} >
                                <div>
                                    <img src="ICON" alt="" className='w-20 h-20 rounded-full border-2 border-gray-400'/>
                                    <h1>SPC {index}</h1>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <Icon icon="fe:arrow-left" width="18" height="18"className='text-regal-green  absolute left-5 top-[40%] ' />
                    <Icon icon="fe:arrow-right" width="18" height="18"className='text-regal-green absolute right-0 top-[40%]' />
                </div>
            </div>
            <div className='text-center'>Selected: <span className='font-semibold'>SPC 1</span></div>
            <div className='flex justify-end items-center mr-24 my-10'>
                <button  className='text-white  py-1 px-5 rounded-xl bg-regal-green hover:bg-opacity-80  transition-all duration-200 mx-3'>NEXT</button>
            </div>

        </div>
    </div>
  )
}

export default BookAppointment