"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecializationRouter = void 0;
const express_1 = __importDefault(require("express"));
const specialization_controller_1 = require("./specialization.controller");
const router = express_1.default.Router();
router.get('/getAllSpecializations', specialization_controller_1.SpecializationController.getAllSpecialization);
router.get('/getOneSpecialization/:_id', specialization_controller_1.SpecializationController.getSpecialization);
exports.SpecializationRouter = router;
