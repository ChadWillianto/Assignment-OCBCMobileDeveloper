"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = exports.generateJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config"));
function generateJWT(payload) {
    var options = {
        expiresIn: '3h',
    };
    var jwtToken = jsonwebtoken_1.default.sign(payload, config_1.default.jwtSecret, options);
    return jwtToken;
}
exports.generateJWT = generateJWT;
function verifyJWT(token) {
    return jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret);
}
exports.verifyJWT = verifyJWT;
// TODO: hash password
//# sourceMappingURL=auth.js.map