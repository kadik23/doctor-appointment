import express from 'express';
import { scheduleController } from './schedule.controller';
import loginMiddleware from "../../middlewares/login"

const router = express.Router();

// router.post('/createOneSchedule',loginMiddleware, scheduleController.createOneSchedule)
router.post('/createManySchedule', scheduleController.createManySchedule)
router.get('/getSchedules/:_id', scheduleController.getSchedules)

export const ScheduleRouter = router;