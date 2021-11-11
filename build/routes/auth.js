"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_1 = require("../utils/auth");
var alert_1 = __importDefault(require("alert"));
var path = require('path');
var auth = express_1.default.Router();
auth.get('/login', function (req, res) {
    return res.sendFile(path.join(__dirname, '..', 'frontend/login.html'));
});
// phase 1: no actual auth logic yet
auth.post('/login', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    if (!username || !password) {
        (0, alert_1.default)('Invalid request');
        res.redirect('../authenticate/login');
        res
            .status(400)
            .send({ status: 'failed', description: 'Invalid request' })
            .end();
    }
    if (username !== 'ocbc' || password !== '123456') {
        (0, alert_1.default)('Invalid username or password');
        res.redirect('../authenticate/login');
        res
            .status(403)
            .send({ status: 'failed', description: 'Invalid username or password' })
            .end();
    }
    var token = (0, auth_1.generateJWT)({ username: username });
    res.redirect('../account/balances');
    res.status(200).send({ status: 'success', token: token }).end();
});
exports.default = auth;
//# sourceMappingURL=auth.js.map