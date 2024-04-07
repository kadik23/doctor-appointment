import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
const jwtSecret = 'sdjjfldwjn2vpbcwytp'

const loginMiddleware = (req: Request , res: Response ,next: NextFunction) =>{
    const {token} = req.cookies
    // console.log(token)
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid or expired token' });
        }
        req.userData = userData as JwtPayload;
        next();
    });
} 