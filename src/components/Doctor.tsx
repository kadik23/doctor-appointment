import { Icon } from '@iconify/react/dist/iconify.js'

function Doctor() {
  return (
    <div className='border border-gray-200 flex flex-col items-center gap-3 mx-5 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300  cursor-pointer'>
        <img src='' alt="Doctor Image" className='w-32 h-40'/>
        <div className='flex flex-col px-5 bg-white'>
            <h1 className='font-semibold text-lg'>Dr. Mohammad Amine</h1>
            <div className='flex items-center justify-around w-full p-2'>
                <span>
                    Medea
                </span>
                <div className=' flex items-center justify-around w-full px-2'>
                    <Icon icon="ion:star" width="18" height="18" className='text-yellow-400'/>
                    <span>5.0</span>
                    <span>(299)</span>
                </div>
            </div>
            <button className='bg-green-50 text-regal-green px-3 m-3 hover:bg-opacity-50 transition-all duration-300 py-1 rounded-md'>Neurology Specialist</button>
        </div>
    </div>
  )
}
export default Doctor