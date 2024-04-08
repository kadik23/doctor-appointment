import express from 'express';
import {AuthRouter} from '../modules/auth/auth.route'
import { DoctorRouter } from '../modules/doctor/doctor.route';
import { SpecializationRouter } from '../modules/specialization/specialization.route';
// import {AppointmentsnRouter} from '../modules/patient/patient.route'
// import {SchedulesRouter} from '../modules/schedules/schedules.route'
const router = express.Router();
const moduleRoutes = [
    {
        path: '/doctors',
        route: DoctorRouter,
    },
    {
        path: '/auth',
        route: AuthRouter,
    },
    {
        path: '/specializations',
        route: SpecializationRouter,
    },
    // {
    //     path: '/api/appointments',
    //     route: AppointmentsnRouter,
    // },
    // {
    //     path: '/api/schedules/:id',
    //     route: SchedulesRouter
    // },
]
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
