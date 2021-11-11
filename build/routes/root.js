"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var root = express_1.default.Router();
var path = require('path');
root.get('/', function (req, res) {
    return res.status(200).send({
        status: 'success',
        description: 'Server running well!',
        availableRoutes: [
            '/authenticate/login',
            '/account/balances',
            '/account/transactions',
            '/account/payees',
            '/transfer',
        ],
    });
});
exports.default = root;
//# sourceMappingURL=root.js.map