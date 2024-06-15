import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";
import { LoginResponse, RegisterResponse } from "./auth.interface";

const jwtSecret = 'sdjjfldwjn2vpbcwytp'
const bcryptSalt = bcrypt.genSaltSync(10);

const loginUser = async (user: any): Promise<LoginResponse> => {
    const { email, password } = user;

    try {
        const userDoc = await prisma.doctor.findUnique({
            where: { email },
        });

        if (!userDoc) {
            return { error: 'Invalid email or password' }; 
        }

        const passOk = bcrypt.compareSync(password, userDoc.password);

        if (!passOk) {
            return { error: 'Invalid email or password' }; 
        }
        const token = jwt.sign({
            email:email ,
            id: userDoc.id,
        },jwtSecret,{})
        
        return {token: token, user:{
            email: userDoc.email,fullname: userDoc.fullname,phone:userDoc.phone,gender:userDoc.gender,biography:userDoc.biography,specializationIds:userDoc.specializationIDs
        }}
        } catch (error) {
            console.error(error); 
            return { error: 'An error occurred during login' }; 
        }
};

const registerUser = async (user: any): Promise<RegisterResponse> => {
    const { email, fullname, phone, gender, password, biography, specializationIds } = user;
    try {
        // Check if the user with the provided email already exists
        const existingUser = await prisma.doctor.findUnique({ where: { email } });
        if (existingUser) {
            return { error: 'Email already exists' };
        }

        const hashedPassword = bcrypt.hashSync(password, bcryptSalt);

        const newUser = await prisma.doctor.create({
            data: { 
                email,
                fullname,
                phone,
                gender,
                password: hashedPassword,
                biography:"i'm doctor in ..",
                specializationIDs: specializationIds,
            },
        });
        // Update the relevant specializations
        const updates = await Promise.all(
        specializationIds.map(async (specializationId: string | null) => {
            const specialization = await prisma.specialization.findUnique({
            where: { id: specializationId as string},
            });
            if (!specialization) {
            console.error(`Specialization with ID ${specializationId} not found`);
            return {error:`Specialization with ID ${specializationId} not found`};
            }
            const updatedDoctorIDs = [...specialization.doctorIDs, newUser.id]; // Assuming doctorIDs is a String[]
            return await prisma.specialization.update({
            where: { id: specializationId as string },
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