
import prisma from "../../../shared/prisma";
import { specialization } from "./specialization.interface";

const getAllspecializations = async(): Promise<specialization[] | {error: string }> => {
    try {
        const specializations = await prisma.specialization.findMany(); 
        return specializations
    } catch (e) {
        console.error('Error retrieving specializations:', e);
        return { error: 'An error occurred during execution' };
    }
}

const getOnespecialization = async(Spcid: string) : Promise<specialization> => {
    try {
        const id = Spcid
        const result: any = await prisma.specialization.findUnique({
            where: {
                id: id
            }
        });
        return result;
    } catch (e) {
        console.error('Error retrieving specializations:', e);
        return { error: 'An error occurred during execution' };
    }
}

export const SpecializationService = {
    getAllspecializations,
    getOnespecialization
}
