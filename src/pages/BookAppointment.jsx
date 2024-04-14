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
            content: <SelectSpecializationDoctor
                // handleDateChange={handleDateChange}
                // selectedDate={selectedDate}
                // selectTime={selectTime}
                // setSelectTime={setSelectTime}
            />
        },
        {
            title: 'Select Appointment Date & Time',
            content: <SelectDateTime
                // handleChange={handleChange}
                // selectValue={selectValue} 
                // setPatientId={setPatientId}
            />
        },
        {
            title: 'Patient Information',
            content: <PersonalInformation
                // handleChange={handleChange}
                // selectValue={selectValue}
                // isCheck={isCheck}
                // setIsChecked={setIsChecked}
                // data={false}
                // selectedDate={selectedDate}
                // selectTime={selectTime}
            />,
        },
        ]
        
    return (
        <>
            <div>
                {/* <Steps current={current} items={items} /> */}
                {steps[step-1].content}
                {/* {steps[parseInt(step-1)].content} */}
            </div>
        </>

    )
}

export default     BookAppointment
