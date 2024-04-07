import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";

type LoginResponse = {
    accessToken?: string | null;
    user?: {};
    error?: string | null ;
}
type RegisterResponse = {
    fullname?: string;
    email?: string;
    phone?:number;
    biography?:string;
    error?: string | null
}

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
    const { email, fullname, phone, password, biography } = user;

    try {
        // Check if the user with the provided email already exists
        // const existingUser = await prisma.Doctor.findOne({ where: { email } });
        // if (existingUser) {
        //     return { error: 'Email already exists' };
        // }

        const hashedPassword = bcrypt.hashSync(password, bcryptSalt);

        const newUser = await prisma.Doctor.create({
            data: { email, fullname, phone, password: hashedPassword, biography },
        });

        return { fullname, email, phone, biography };
    } catch (error) {
        console.error('Error registering user:', error);
        return { error: 'An error occurred during registration' };
    }
};


export const AuthService = {
    loginUser,
    registerUser
}