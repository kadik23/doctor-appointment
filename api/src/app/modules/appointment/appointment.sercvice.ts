import prisma from "../../../shared/prisma"
import { appointmentRes, patientReq } from "./appointment.interface"

const createAppointment = async(patient: patientReq): Promise<appointmentRes> => {
    try{
        const { doctor_id,date,time, ...patientData } = patient
        const result = await prisma.patient.create({
            data: patientData
        })
        if(result){
            const appointment = await prisma.appointment.create({
                data: {
                    patient_id: result.id,
                    doctor_id: doctor_id,
                    date: patient.date,
                    time: patient.time,
                    number: "123",
                }
            })
            const getSchedule = await prisma.schedule.findFirst({  
                where: {
                    doctor_id: doctor_id,
                    date: date
                }
            })
            if(getSchedule){
                const updatedSlots = getSchedule.available_slots.filter(slot => slot.start_at !== time);
                console.log("sch id" + getSchedule.id)
                const decreaseDate = await prisma.schedule.update({
                    data:{ available_slots:updatedSlots},
                    where: { id: getSchedule.id},
                    })
                if(decreaseDate){
                    console.log(decreaseDate)
                    return appointment
                }else{
                    console.log(getSchedule)
                    return {error: 'something went wrong'}
                }
            }else{
                console.log(getSchedule)
                return {error: 'something went wrong'}
            }
        }
        return {error: 'something went wrong'}
    } catch (error) {
        console.error('Error appointment user:', error);
        return { error: 'An error occurred during appointment' };
    }
}

const getAllAppointments = async(): Promise<appointmentRes> =>{
    try {
    const appointments = await prisma.Appointment.findMany()
    return appointments
    }catch(err){
        console.error('Error registering user:', err);
        return { error: 'An error occurred during registration' };
    }
}

const getOneAppointment = async(id:string): Promise<appointmentRes> =>{
    try {
        const appointment = await prisma.Appointment.findFirst({
            where: {
                id: id
            }
        })
        return appointment
    }catch(err){
        console.error('Error retrieving appointment:', err);
        return { error: 'An error occurred during retrieving' };
    }
}

const deleteAppointment = async (id: string): Promise<any> => {
    try {
        const result =  await prisma.Appointment.delete({
            where: {
                id: id
            }
        })
        return result;
    } catch (e) {
        console.error('Error deleting appointment:', e);
        return { error: e as string}
    }
}


export const AppointmentService = {
    createAppointment,
    getAllAppointments,
    getOneAppointment,
    deleteAppointment
}
