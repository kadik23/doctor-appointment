import express from 'express';
import {AuthRouter} from '../modules/auth/auth.route'
import { DoctorRouter } from '../modules/doctor/doctor.route';
import { SpecializationRouter } from '../modules/specialization/specialization.route';
import { AppointmentRouter } from '../modules/appointment/appointment.route';
import { ScheduleRouter } from '../modules/schedule/schedule.route';
import { PatientRouter } from '../modules/patient/patient.route';

const router = express.Router();
const moduleRoutes = [
    {
        path: '/auth/doctors',
        route: DoctorRouter,
    },
    {
        path: '/auth',
        route: AuthRouter,
    },
    {
        path: '/auth/specializations',
        route: SpecializationRouter,
    },
    {
        path: '/auth/appointments',
        route: AppointmentRouter,
    },
    {
        path: '/auth/schedules',
        route: ScheduleRouter
    },
    {
        path: '/auth/patients',
        route: PatientRouter
    },
]
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
