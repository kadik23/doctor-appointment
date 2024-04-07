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
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthService.loginUser(req.body);
    const { accessToken, error } = result;
    if (accessToken) {
        res.cookie('token', accessToken, { maxAge: 3600 * 3600, sameSite: 'none', path: '*', secure: true }).json({ userID: result.user });
    }
    else {
        res.status(422).json(error);
    }
});
const Register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthService.registerUser(req.body);
    if (result.error) {
        res.status(500).json({ error: result.error });
    }
    else {
        const { fullname, email, phone, biography } = result;
        res.json({ fullname, email, phone, biography });
    }
});
exports.AuthController = {
    Login,
    Register,
};
