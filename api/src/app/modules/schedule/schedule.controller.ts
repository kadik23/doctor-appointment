import { Request, Response } from "express";
import { scheduleService } from "./schedule.service";

const createManySchedule = async (req: Request, res: Response) => {
    const result = await scheduleService.createSchedules(req.body)
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    } else {
        res.json(result);
    }
}

const getSchedules = async (req: Request, res: Response,) => {
    const {_id} = req.params
    const result = await scheduleService.getSchedules(_id)
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    } else {
        res.json(result);
    }
}


export const scheduleController = {
    createManySchedule,
    getSchedules
}