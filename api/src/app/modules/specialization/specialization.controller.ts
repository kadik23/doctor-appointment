import { Request, Response } from "express";
import { SpecializationService } from "./specialization.service";

const getAllSpecialization = async (req: Request, res: Response) => {
    const result = await SpecializationService.getAllspecializations()
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    } else {
        res.json(result);
    }
}

const getSpecialization = async (req: Request, res: Response) => {
    const SpecializationID = req.params._id
    const result = await SpecializationService.getOnespecialization(SpecializationID)
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    } else {
        res.json(result);
    }
}

export const SpecializationController = {
    getAllSpecialization,
    getSpecialization
}