import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

function SpecializationCard({ specializationData }) {
  return (
    <div className='flex flex-col gap-5 items-start hoverBackground hover:bg-white hover:shadow-lg rounded-xl p-8 w-1/4 my-3'>
      <div>
        <div className='rounded-md flex items-center justify-center gap-3'>
          <Icon
            icon="mingcute:mind-map-line"
            width="18"
            height="18"
            className='p-1 border border-regal-green w-10 h-10 text-regal-green rounded-md'
          />
          <h1>{specializationData.name}</h1>
        </div>
      </div>
      <div className='description'>
        <div className='h-12 overflow-hidden truncate-lines-2 text-wrap'>{specializationData.description}</div>
      </div>
      <NavLink to={'/booking'} className='text-regal-green border border-regal-green py-1 px-5 rounded-2xl hover:text-white hover:bg-regal-green transition-all duration-200'>
        Get Appointment
      </NavLink>
    </div>
  );
}

export default SpecializationCard;


