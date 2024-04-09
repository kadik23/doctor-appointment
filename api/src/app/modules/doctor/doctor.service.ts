import prisma from "../../../shared/prisma";
import { DoctorsRes, DoctorRes, DoctorFiltersData, DoctorOptions, DoctorDoc } from "./doctor.interface";
import { Request, Response } from "express";

const getAllDoctors = async (filters: DoctorFiltersData, options: DoctorOptions): Promise<DoctorsRes> => {
    try {
        const andCondition: any = {}; 
        if (filters) {
            if ('fullname' in filters) {
                const fullnameFilterValue = filters.fullname;
                andCondition.fullname = { equals: fullnameFilterValue };
            }
        
            if ('specialization' in filters) {
                const specializationFilterValue = filters.specialization;
                andCondition.specialization = { equals: specializationFilterValue };
            }
        
            if ('rating' in filters) {
                const ratingFilterValue = filters.rating;
                if (!isNaN(Number(ratingFilterValue))) {
                    andCondition.rating = { equals: parseInt(ratingFilterValue) };
                } else {
                    console.error('Rating filter value is not a valid number.');
                }
            }
        }
        const whereCondition = Object.keys(andCondition).length > 0 ? { AND: andCondition } : {};
        const doctors = await prisma.Doctor.findMany({
            where: whereCondition
        });
        const mappedResult: DoctorsRes = doctors.map((doctor: DoctorDoc) => ({
            _id: doctor._id,
            email: doctor.email,
            fullname: doctor.fullname,
            phone: doctor.phone,
            gender: doctor.gender,
            biography: doctor.biography,
        }));

        return mappedResult;
    } catch (e) {
        console.error('Error retrieving doctors:', e);
        return { error: 'An error occurred during execution' };
    }
}

const getDoctor = async (id: string): Promise<DoctorRes> => {
    try {
    const result = await prisma.Doctor.findUnique({
        where: {
            id: id
        }
    });
    return result;
    } catch (e) {
        console.error('Error retrieving doctor:', e);
        return { error: e as string}
    }
}

const deleteDoctor = async (id: string): Promise<any> => {
    try {
        const result =  await prisma.Doctor.delete({
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

const updateDoctor = async (req: Request): Promise<DoctorRes> => {
    try {
        const id = req.params._id as string;
        const requestBody = req.body;


        const result = await prisma.Doctor.update({
            where: { id },
            data: requestBody
        });

        return result;
    } catch (e) {
        console.error('Error deleting doctor:', e);
        return { error: e as string };
    }
}


export const DoctorService = {
    getAllDoctors,
    getDoctor,
    deleteDoctor,
    updateDoctor
}
