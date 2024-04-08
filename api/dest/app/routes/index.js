"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const doctor_route_1 = require("../modules/doctor/doctor.route");
const specialization_route_1 = require("../modules/specialization/specialization.route");
// import {AppointmentsnRouter} from '../modules/patient/patient.route'
// import {SchedulesRouter} from '../modules/schedules/schedules.route'
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/doctors',
        route: doctor_route_1.DoctorRouter,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRouter,
    },
    {
        path: '/specializations',
        route: specialization_route_1.SpecializationRouter,
    },
    // {
    //     path: '/api/appointments',
    //     route: AppointmentsnRouter,
    // },
    // {
    //     path: '/api/schedules/:id',
    //     route: SchedulesRouter
    // },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
