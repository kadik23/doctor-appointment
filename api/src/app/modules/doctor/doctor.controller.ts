import { Request, Response } from "express";
import { DoctorFiltersData,DoctorOptions } from "./doctor.interface";
import pick from "../../../shared/pick";
import { DoctorService } from "./doctor.service";

const getAllDoctors = async(req: Request, res: Response) => {
    const { filter, option } = req.body;
    const result = await DoctorService.getAllDoctors(filter, option);
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    } else {
        res.json(result);
    }
}

const getDoctor = async (req: Request, res: Response) => {
    const doctorID = req.params._id
    const result = await DoctorService.getDoctor(doctorID)
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    } else {
        res.json(result);
    }
}

const deleteDoctor = async (req: Request, res: Response) => {
    const doctorID = req.params._id
    const result = await DoctorService.deleteDoctor(doctorID)
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    } else {
        res.json(result);
    }
}

const updateDoctor =async (req: Request, res: Response) => {
    const result = await DoctorService.updateDoctor(req);
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    } else {
        res.json(result);
    }
}

export const DoctorController = {
    getAllDoctors,
    getDoctor,
    deleteDoctor,
    updateDoctor
}