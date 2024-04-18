import express from 'express';
import { AuthController } from './auth.controller';
import loginMiddleware from '../../middlewares/login';

const router = express.Router();

router.post('/login', AuthController.Login)
router.post('/register', AuthController.Register)
router.get('/getAuthenticatedUser',loginMiddleware,AuthController.AuthenticatedUser)
router.post('/logout', AuthController.Logout)

export const AuthRouter = router;