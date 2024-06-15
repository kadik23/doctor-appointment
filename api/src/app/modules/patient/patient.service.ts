import prisma from "../../../shared/prisma"
import { patientRes } from "./patient.interface"


const getOnePatient = async(id:string): Promise<patientRes> =>{
    try {
        console.log(id)
        const patient: any = await prisma.patient.findFirst({
            where: {
                id: id
            }
        })
        return patient
    }catch(err){
        console.error('Error retrieving patient:', err);
        return { error: 'An error occurred during fetching' };
    }
}

const getAllPatients = async(): Promise<patientRes[] | patientRes> =>{
    try {
        const patients: any = await prisma.patient.findMany()
        return patients
    }catch(err){
        console.error('Error retrieving patient:', err);
        return { error: 'An error occurred during fetching' };
    }
}

export const PatientService = {
    getOnePatient,
    getAllPatients
}