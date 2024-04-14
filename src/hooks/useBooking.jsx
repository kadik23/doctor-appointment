import {  useState, useContext } from 'react';
import useDoctors from '../hooks/useDoctors';
import useSpecializations from '../hooks/useSpecializations';
import { BookContext } from '../contexts/BookContext';
import axios from 'axios';
export default function useBooking(){

    // ////// Step 1: ////////
    const [selectedOption, setSelectedOption] = useState(null);
    const {doctors} = useDoctors()
    const [specializationSelected,setSpecializationSelected] = useState(null);
    const [doctorSelected,setDoctorSelected] = useState(null)
    const {specializations} = useSpecializations()
    const [filteredDoctors, setFilteredDoctors] = useState(null)
    const { step, setStep, patientData, setPatientData} = useContext(BookContext)
    
    const handleOptionChange = (index) => {
        setSelectedOption(index);
    };

    const selectDoctor = () => {
        if (!specializationSelected) return; 
        const specializationFiltered = specializations.filter(specialization => specialization.name == specializationSelected)
        // console.log(specializationFiltered)
        const filtered = doctors.filter((doctor) => {
            // console.log(doctor)
            return doctor?.specializationIDs?.some((specializationID) => specializationID === specializationFiltered[0].id);
        });
        setFilteredDoctors(filtered); 
    }
    
    const nextStep = () => {
        setStep(step+1)
        const updatedData = { ...patientData };
        updatedData.doctor_id = doctorSelected?._id;
        setPatientData(updatedData);
        // console.log(updatedData)
    }



    const previousStep = () => {
        setStep(step-1)
    }




    // ////// Step 2: ////////

    const [ selectedAppointment,setSelectedAppointment] = useState()
    const [selectedDate, setSelectedDate] = useState(null)
    const [nextSixDays, setNextSixDays] = useState([]);

    const getSchedules = async (patientdata) => {
        try {
            console.log("data " + patientdata.doctor_id)
            const {data} = await axios.get(`/schedules/getSchedules/${patientdata.doctor_id}`);
            if (data ){
                console.log(data)
                setNextSixDays(data);
            }
        } catch (e) {
            console.log("Error getting schedules")
        }
    }

    const getDate = (date) => {
        setSelectedDate(date.available_slots)
        setSelectedAppointment({date:date.date})
    }

    const nextStep2 = () => {
        setStep(step+1)
        const updatedData = { ...patientData };
        updatedData.time = selectedAppointment?.time;
        updatedData.date = selectedAppointment?.date;
        setPatientData(updatedData);
        console.log(updatedData)
    }

    return {
        selectedOption,setSelectedOption,
        doctors,
        specializationSelected,setSpecializationSelected,
        doctorSelected,setDoctorSelected,
        specializations,
        filteredDoctors,setFilteredDoctors,
        setStep,patientData,setPatientData,
        handleOptionChange,
        selectDoctor,
        nextStep,previousStep,


        selectedAppointment,setSelectedAppointment,
        selectedDate, setSelectedDate,
        nextSixDays, setNextSixDays,
        getSchedules,
        getDate,
        nextStep2,

    }
}