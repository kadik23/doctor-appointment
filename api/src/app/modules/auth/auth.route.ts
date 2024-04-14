import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post('/login', AuthController.Login)
router.post('/register', AuthController.Register)
router.post('/logout', AuthController.Logout)

export const AuthRouter = router;