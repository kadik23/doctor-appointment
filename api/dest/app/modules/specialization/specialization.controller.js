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
exports.SpecializationController = void 0;
const specialization_service_1 = require("./specialization.service");
const getAllSpecialization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield specialization_service_1.SpecializationService.getAllspecializations();
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    }
    else {
        res.json(result);
    }
});
const getSpecialization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const SpecializationID = req.params._id;
    const result = yield specialization_service_1.SpecializationService.getOnespecialization(SpecializationID);
    if ('error' in result) {
        res.status(500).json({ error: result.error });
    }
    else {
        res.json(result);
    }
});
exports.SpecializationController = {
    getAllSpecialization,
    getSpecialization
};
