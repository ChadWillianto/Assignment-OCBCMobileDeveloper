"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("../middlewares");
var generator_1 = require("../utils/generator");
var alert_1 = __importDefault(require("alert"));
var path = require('path');
var transferRouter = express_1.default.Router();
transferRouter.get('/', function (req, res) {
    return res.sendFile(path.join(__dirname, '..', 'frontend/transfer.html'));
});
// PHASE 1: simply validate and return hardcoded resp
transferRouter.post('/', middlewares_1.authChecker, function (req, res) {
    var _a = req.body, recipientAccountNo = _a.recipientAccountNo, amount = _a.amount, date = _a.date, description = _a.description;
    // TODO: use a validator package to validate body schema
    if (!recipientAccountNo || !amount || !date || !description) {
        (0, alert_1.default)('Invalid request');
        res.redirect('../transfer');
        res
            .status(400)
            .send({
            status: 'failed',
            description: 'Invalid request',
        })
            .end();
    }
    (0, alert_1.default)('Transfer succcessful');
    res
        .status(200)
        .send({
        status: 'success',
        data: __assign({ id: (0, generator_1.generateUUID4)() }, req.body),
    })
        .end();
});
exports.default = transferRouter;
//# sourceMappingURL=transfer.js.map