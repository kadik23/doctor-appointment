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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const getAllDoctors = (filters, options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const andCondition = {};
        if (filters) {
            if ('fullname' in filters) {
                const fullnameFilterValue = filters.fullname;
                andCondition.fullname = { equals: fullnameFilterValue };
            }
            if ('specialization' in filters) {
                const specializationFilterValue = filters.specialization;
                andCondition.specialization = { equals: specializationFilterValue };
            }
            if ('rating' in filters) {
                const ratingFilterValue = filters.rating;
                if (!isNaN(Number(ratingFilterValue))) {
                    andCondition.rating = { equals: parseInt(ratingFilterValue) };
                }
                else {
                    console.error('Rating filter value is not a valid number.');
                }
            }
        }
        const whereCondition = Object.keys(andCondition).length > 0 ? { AND: andCondition } : {};
        const doctors = yield prisma_1.default.Doctor.findMany({
            where: whereCondition
        });
        const mappedResult = doctors.map((doctor) => ({
            _id: doctor._id,
            email: doctor.email,
            fullname: doctor.fullname,
            phone: doctor.phone,
            biography: doctor.biography,
        }));
        return mappedResult;
    }
    catch (e) {
        console.error('Error retrieving doctors:', e);
        return { error: 'An error occurred during execution' };
    }
});
const getDoctor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.Doctor.findUnique({
            where: {
                id: id
            }
        });
        return result;
    }
    catch (e) {
        console.error('Error retrieving doctor:', e);
        return { error: e };
    }
});
const deleteDoctor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.Doctor.delete({
            where: {
                id: id
            }
        });
        return result;
    }
    catch (e) {
        console.error('Error deleting doctor:', e);
        return { error: e };
    }
});
const updateDoctor = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params._id;
        const requestBody = req.body;
        const result = yield prisma_1.default.Doctor.update({
            where: { id },
            data: requestBody
        });
        return result;
    }
    catch (e) {
        console.error('Error deleting doctor:', e);
        return { error: e };
    }
});
exports.DoctorService = {
    getAllDoctors,
    getDoctor,
    deleteDoctor,
    updateDoctor
};
