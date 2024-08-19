import { Icon } from '@iconify/react/dist/iconify.js'
import { useContext, useEffect, useState } from 'react';
import SelectSpecializationDoctor from '../components/SelectSpecializationDoctor';
import SelectDateTime from '../components/SelectDateTime';
import PersonalInformation from '../components/PersonalInformation';
import { BookContext} from "../contexts/BookContext";

function BookAppointment() {
    const {step} = useContext(BookContext)
    const steps = [
        {
            title: 'Select Specialization & Doctor',
            content: <SelectSpecializationDoctor/>
        },
        {
            title: 'Select Appointment Date & Time',
            content: <SelectDateTime/>
        },
        {
            title: 'Patient Information',
            content: <PersonalInformation/>,
        },
        ]
        
    return (
        <>
            <div>{steps[step-1].content}</div>
        </>
    )
}

export default BookAppointment
