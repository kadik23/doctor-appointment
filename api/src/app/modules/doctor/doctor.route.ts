import express from 'express';
import { DoctorController } from './doctor.controller';

const router = express.Router();

router.post('/getAllDoctors', DoctorController.getAllDoctors)
router.get('/getOneDoctor/:_id', DoctorController.getDoctor)
router.get('/deleteDoctor/:_id', DoctorController.deleteDoctor)
router.put('/updateDoctor/:_id', DoctorController.updateDoctor)

export const DoctorRouter = router;