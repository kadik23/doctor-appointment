import express from 'express';
import { appointmentController } from './appointment.controller';
import loginMiddleware from '../../middlewares/login';

const router = express.Router();

router.post('/createAppointment', appointmentController.createAppointment)
router.get('/getAllAppointments', appointmentController.getAllAppointments)
router.get('/getOneAppointment/:_id', appointmentController.getOneAppointment)
router.get('/deleteAppointment/:_id',loginMiddleware, appointmentController.deleteAppointment)

export const AppointmentRouter = router;