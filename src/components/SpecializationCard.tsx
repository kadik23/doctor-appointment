import { Icon } from '@iconify/react';

function SpecializationCard() {
  return (
    <div className='flex flex-col gap-5 items-start hoverBackground hover:bg-white hover:shadow-lg rounded-xl p-8 w-1/4 my-3'>
        <div>
            <div className=' rounded-md  flex items-center justify-center gap-3'>
                <Icon icon="mingcute:mind-map-line" width="18" height="18"  className=' p-1 border border-regal-green w-10 h-10 text-regal-green rounded-md'/>
                <h1>Neurologie</h1>
            </div>
        </div>
        <div>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.</div>
        <button className='text-regal-green border border-regal-green py-1 px-5 rounded-2xl hover:text-white hover:bg-regal-green transition-all duration-200'>Get Appointment</button>
    </div>
  )
}

export default SpecializationCard