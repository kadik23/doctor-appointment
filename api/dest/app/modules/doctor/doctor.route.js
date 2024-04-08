"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorRouter = void 0;
const express_1 = __importDefault(require("express"));
const doctor_controller_1 = require("./doctor.controller");
const router = express_1.default.Router();
router.post('/getAllDoctors', doctor_controller_1.DoctorController.getAllDoctors);
router.get('/getOneDoctor/:_id', doctor_controller_1.DoctorController.getDoctor);
router.get('/deleteDoctor/:_id', doctor_controller_1.DoctorController.deleteDoctor);
router.put('/updateDoctor/:_id', doctor_controller_1.DoctorController.updateDoctor);
exports.DoctorRouter = router;
