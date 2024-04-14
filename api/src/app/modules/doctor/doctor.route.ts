import express from 'express';
import { DoctorController } from './doctor.controller';
import loginMiddleware from '../../middlewares/login';

const router = express.Router();

router.get('/getAllDoctors', DoctorController.getAllDoctors)
router.get('/getOneDoctor/:_id', DoctorController.getDoctor)
router.get('/deleteDoctor/:_id',loginMiddleware, DoctorController.deleteDoctor)
router.put('/updateDoctor/:_id',loginMiddleware, DoctorController.updateDoctor)

export const DoctorRouter = router;