"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("../middlewares");
var transactions_json_1 = __importDefault(require("../mock/account/transactions.json"));
var balance_json_1 = __importDefault(require("../mock/account/balance.json"));
var payees_json_1 = __importDefault(require("../mock/account/payees.json"));
var path = require('path');
var account = express_1.default.Router();
account.get('/balances', function (req, res) {
    return res.sendFile(path.join(__dirname, '..', 'frontend/dashboard.html'));
});
account.get('/balances', middlewares_1.authChecker, function (req, res) {
    res.status(200).send(balance_json_1.default);
});
account.get('/transactions', middlewares_1.authChecker, function (req, res) {
    return res.status(200).send(transactions_json_1.default);
});
account.get('/payees', middlewares_1.authChecker, function (req, res) {
    return res.status(200).send(payees_json_1.default);
});
exports.default = account;
//# sourceMappingURL=account.js.map