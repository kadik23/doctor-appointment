import { Request, Response } from "express";
import config from "../../../config";
import { body, validationResult } from 'express-validator';
import { AuthService } from "./auth.service";

const Login = async(req: Request,res: Response)=>{
    const result = await AuthService.loginUser(req.body);
    const { accessToken, error } = result;
    if (accessToken) {
        res.cookie('token',accessToken,{maxAge:3600*3600,sameSite:'none',path:'*',secure:true}).json({userID:result.user})
    }else {
        res.status(422).json(error)
    }
}

const Register = async (req: Request,res: Response)=>{
    const result = await AuthService.registerUser(req.body)
    if (result.error) {
        res.status(500).json({ error: result.error });
    } else {
        const { fullname, email, phone, biography } = result;
        res.json({ fullname, email, phone, biography });
    }
}

export const AuthController = {
    Login,
    Register,
}