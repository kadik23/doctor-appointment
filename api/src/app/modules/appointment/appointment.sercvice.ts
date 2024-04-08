import prisma from "../../../shared/prisma"
import { appointmentRes, patientReq } from "./appointment.interface"

const createAppointment = async(patient: patientReq): Promise<appointmentRes> => {
    try{
        const { doctor_id,date,time, ...patientData } = patient
        const result = await prisma.Patient.create({
            data: patientData
        })
        if(result){
            const appointment = await prisma.Appointment.create({
                data: {
                    patient_id: result.id,
                    doctor_id: doctor_id,
                    date: patient.date,
                    time: patient.time,
                    number: "123",
                }
            })
            return appointment
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
        const appointment = await prisma.Appointment.findMany({
            where: {
                id: id
            }
        })
        return appointment
    }catch(err){
        console.error('Error registering user:', err);
        return { error: 'An error occurred during registration' };
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
        console.error('Error deleting doctor:', e);
        return { error: e as string}
    }
}


export const AppointmentService = {
    createAppointment,
    getAllAppointments,
    getOneAppointment,
    deleteAppointment
}
