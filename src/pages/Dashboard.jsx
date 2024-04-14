import { Icon } from '@iconify/react/dist/iconify.js'

function Dashboard() {
    const available_slots = [
        { start_at:"8:00"  ,end_at: "8:45" },
        { start_at:"8:45"  ,end_at: "9:30" },
        { start_at:"9:30"  ,end_at: "10:15" },
        { start_at:"10:15" ,end_at: "11:00" },
        { start_at:"11:00" ,end_at: "11:45" },
        { start_at:"13:00" ,end_at: "13:45" },
        { start_at:"13:45" ,end_at: "14:30" },
        { start_at:"14:30" ,end_at: "15:15" },
        { start_at:"15:15" ,end_at: "16:00" },
        { start_at:"16:00" ,end_at: "16:45" },
    ]
    
    return (
            <div className='flex flex-col'>
                <div className='flex gap-5 m-5 mb-0'>
                    <div className='flex items-center bg-white rounded-l-3xl pl-5 rounded-r-3xl'>
                            <Icon icon="ph:calendar" width="18" height="18" className='text-[#c9c9c9] '/>
                            <input type="number" max={6} min={1}  className='bg-white w-72 outline-none rounded-r-3xl px-5 py-2 placeholder:font-meduim' placeholder='Enter days number you want add'/>
                        </div>
                        <button className='  py-2 px-5 rounded-2xl text-white bg-regal-green transition-all duration-200 mx-3 hover:opacity-90 active:scale-105 '>Add new Schedule</button>
                </div>
                <div className='bg-white rounded-xl p-5 h-[30rem] m-5'>
                    <h1 className='text-lg font-semibold mb-5 '>Schedule</h1>
                    <div className='flex gap-5 h-8 items-center w-full'>
                        <span className='overflow-hidden text-nowrap w-16 h-full inline-block'></span>
                        {available_slots.map(slot =>(
                            <span className='overflow-hidden text-nowrap w-16 h-full inline-block'>{slot.start_at}</span>
                        ))}
                    </div>
                    <hr />
                    <div className='flex gap-5 h-12 items-center w-full '>
                        <span className=' w-16 h-1/2 inline-block '>Sun</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 1</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 2</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 3</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 4</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 5</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 6</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 7</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 8</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 9</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 10</span>
                    </div>
                    <hr />
                    <div className='flex gap-5 h-12 items-center w-full'>
                        <span className='w-16 h-1/2'>Mon</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 1</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 2</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 3</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 4</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 5</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 6</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 7</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 8</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 9</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 10</span>
                    </div>
                    <hr />
                    <div className='flex gap-5 h-12 items-center w-full'>
                        <span className='w-16 h-1/2'>Tue</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 1</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 2</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 3</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 4</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 5</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 6</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 7</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 8</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 9</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 10</span>
                    </div>
                    <hr />
                    <div className='flex gap-5 h-12 items-center w-full '>
                        <span className='w-16 h-1/2'>Wed</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 1</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 2</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 3</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 4</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 5</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 6</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 7</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 8</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 9</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 10</span>
                    </div>
                    <hr />
                    <div className='flex gap-5 h-12 items-center w-full'>
                        <span className='w-16 h-1/2'>Thi</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 1</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 2</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 3</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 4</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 5</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 6</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 7</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 8</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 9</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 10</span>
                    </div>
                    <hr />
                    <div className='flex gap-5 h-12 items-center w-full'>
                        <span className='w-16 h-1/2'>Fri</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 1</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 2</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 3</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 4</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 5</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 6</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 7</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 8</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 9</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 10</span>
                    </div>
                    <hr />
                    <div className='flex gap-5 h-12 items-center w-full'>
                        <span className='w-16 h-1/2 inline-block'>Sat</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 1</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 2</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 3</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 4</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 5</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 6</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 7</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 8</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 9</span>
                        <span className='overflow-hidden text-nowrap w-16 h-10 flex items-center font-semibold text-xs bg-regal-green text-white text-center   rounded-xl'>Mohamed 10</span>
                    </div>
                    <hr />
                </div>
            </div>
        
    )
}

export default Dashboard