import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";
import { LoginResponse, RegisterResponse } from "./auth.interface";


const jwtSecret = 'sdjjfldwjn2vpbcwytp'
const bcryptSalt = bcrypt.genSaltSync(10);

const loginUser = async(user: any): Promise<LoginResponse> => {
    const {email , password} = user 
    try{
        const userDoc = await prisma.Doctor.findOne({email})        
        if (!userDoc) {
            return {error: 'Email not found'}
        }
        const hashedPassword = userDoc.password
        const passOk = bcrypt.compareSync(password,hashedPassword)

        if(passOk){
            jwt.sign({
                email:email ,
                id: userDoc.id,
            },jwtSecret,{},(err,token)=>{
                if(err) throw err
                return {accessToken: token, user:userDoc, error:false}
            })
        }else{
            return {error:'pass not ok'}
        } 
        return {};
    }catch(e){
        return {error:e as string}
    }
}

const registerUser = async (user: any): Promise<RegisterResponse> => {
    const { email, fullname, phone, gender, password, biography, specializationIds } = user;

    try {
        // Check if the user with the provided email already exists
        // const existingUser = await prisma.Doctor.findOne({ where: { email } });
        // if (existingUser) {
        //     return { error: 'Email already exists' };
        // }

        const hashedPassword = bcrypt.hashSync(password, bcryptSalt);

        const newUser = await prisma.doctor.create({
            data: { 
                email,
                fullname,
                phone,
                gender,
                password: hashedPassword,
                biography,
                specializationIDs: specializationIds,
            },
        });
        // Update the relevant specializations
        const updates = await Promise.all(
        specializationIds.map(async (specializationId: string | null) => {
            const specialization = await prisma.specialization.findUnique({
            where: { id: specializationId },
            });
            if (!specialization) {
            console.error(`Specialization with ID ${specializationId} not found`);
            return {error:`Specialization with ID ${specializationId} not found`};
            }
            const updatedDoctorIDs = [...specialization.doctorIDs, newUser.id]; // Assuming doctorIDs is a String[]
            return await prisma.specialization.update({
            where: { id: specializationId },
            data: {
                doctorIDs: { set: updatedDoctorIDs }, 
            },
            });
        })
        );
        return { fullname, email, phone, gender, biography,  specializationIds };
    } catch (error) {
        console.error('Error registering user:', error);
        return { error: 'An error occurred during registration' };
    }
};


export const AuthService = {
    loginUser,
    registerUser
}