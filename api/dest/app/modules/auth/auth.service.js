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
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const jwtSecret = 'sdjjfldwjn2vpbcwytp';
const bcryptSalt = bcrypt_1.default.genSaltSync(10);
const loginUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = user;
    try {
        const userDoc = yield prisma_1.default.Doctor.findOne({ email });
        if (!userDoc) {
            return { error: 'Email not found' };
        }
        const hashedPassword = userDoc.password;
        const passOk = bcrypt_1.default.compareSync(password, hashedPassword);
        if (passOk) {
            jsonwebtoken_1.default.sign({
                email: email,
                id: userDoc.id,
            }, jwtSecret, {}, (err, token) => {
                if (err)
                    throw err;
                return { accessToken: token, user: userDoc, error: false };
            });
        }
        else {
            return { error: 'pass not ok' };
        }
        return {};
    }
    catch (e) {
        return { error: e };
    }
});
const registerUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, fullname, phone, password, biography, specializationIds } = user;
    try {
        // Check if the user with the provided email already exists
        // const existingUser = await prisma.Doctor.findOne({ where: { email } });
        // if (existingUser) {
        //     return { error: 'Email already exists' };
        // }
        const hashedPassword = bcrypt_1.default.hashSync(password, bcryptSalt);
        const newUser = yield prisma_1.default.doctor.create({
            data: {
                email,
                fullname,
                phone,
                password: hashedPassword,
                biography,
                specializationIDs: specializationIds,
            },
        });
        // Update the relevant specialization(s)
        const updates = yield Promise.all(specializationIds.map((specializationId) => __awaiter(void 0, void 0, void 0, function* () {
            const specialization = yield prisma_1.default.specialization.findUnique({
                where: { id: specializationId },
            });
            if (!specialization) {
                console.error(`Specialization with ID ${specializationId} not found`);
                return { error: `Specialization with ID ${specializationId} not found` };
            }
            const updatedDoctorIDs = [...specialization.doctorIDs, newUser.id]; // Assuming doctorIDs is a String[]
            return yield prisma_1.default.specialization.update({
                where: { id: specializationId },
                data: {
                    doctorIDs: { set: updatedDoctorIDs },
                },
            });
        })));
        return { fullname, email, phone, biography, specializationIds };
    }
    catch (error) {
        console.error('Error registering user:', error);
        return { error: 'An error occurred during registration' };
    }
});
exports.AuthService = {
    loginUser,
    registerUser
};
