import express from 'express';
import { patientController } from './patient.controller';
import loginMiddleware from "../../middlewares/login"

const router = express.Router();

router.get('/getOnePatient/:_id',loginMiddleware, patientController.getOnePatient)

export const PatientRouter = router;