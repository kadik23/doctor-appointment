import { Request, Response } from "express";
import { PatientService } from "./patient.service";

const getOnePatient = async (req: Request, res: Response) => {
    const {_id} = req.params
    console.log(req.params)
    const result = await PatientService.getOnePatient(_id)
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    } else {
        res.json(result);
    }
}

export const patientController = {
    getOnePatient,
}
