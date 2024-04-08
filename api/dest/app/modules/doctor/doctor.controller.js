"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorController = void 0;
const doctor_service_1 = require("./doctor.service");
const getAllDoctors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { filter, option } = req.body;
    const result = yield doctor_service_1.DoctorService.getAllDoctors(filter, option);
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    }
    else {
        res.json(result);
    }
});
const getDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const doctorID = req.params._id;
    const result = yield doctor_service_1.DoctorService.getDoctor(doctorID);
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    }
    else {
        res.json(result);
    }
});
const deleteDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const doctorID = req.params._id;
    const result = yield doctor_service_1.DoctorService.deleteDoctor(doctorID);
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    }
    else {
        res.json(result);
    }
});
const updateDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield doctor_service_1.DoctorService.updateDoctor(req);
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    }
    else {
        res.json(result);
    }
});
exports.DoctorController = {
    getAllDoctors,
    getDoctor,
    deleteDoctor,
    updateDoctor
};
