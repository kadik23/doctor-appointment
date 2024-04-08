import { Request, Response } from "express";
import { AppointmentService } from "./appointment.sercvice";

const createAppointment = async (req: Request, res: Response) => {
    const patient = req.body
    const result = await AppointmentService.createAppointment(patient)
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    } else {
        res.json(result);
    }
}

const getAllAppointments = async (req: Request, res: Response) => {
    const result = await AppointmentService.getAllAppointments()
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    } else {
        res.json(result);
    }
}

const getOneAppointment = async (req: Request, res: Response) => {
    const {_id} = req.params
    const result = await AppointmentService.getOneAppointment(_id)
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    } else {
        res.json(result);
    }
}

const deleteAppointment= async (req: Request, res: Response) => {
    const appointmentID = req.params._id
    const result = await AppointmentService.deleteAppointment(appointmentID)
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    } else {
        res.json(result);
    }
}

export const appointmentController = {
    createAppointment,
    getAllAppointments,
    getOneAppointment,
    deleteAppointment
}
