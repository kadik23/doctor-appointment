import express from 'express';
import { scheduleController } from './schedule.controller';
const router = express.Router();

router.post('/createOneSchedule', scheduleController.createOneSchedule)
router.post('/createManySchedule', scheduleController.createManySchedule)
router.get('/getSchedules/:_id', scheduleController.getSchedules)

export const ScheduleRouter = router;