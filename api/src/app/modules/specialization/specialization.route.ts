import express from 'express';
import { SpecializationController } from './specialization.controller';

const router = express.Router();

router.get('/getAllSpecializations', SpecializationController.getAllSpecialization)
router.get('/getOneSpecialization/:_id', SpecializationController.getSpecialization)

export const SpecializationRouter = router;