"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferRoute = exports.accountRoute = exports.authRoute = exports.rootRoute = void 0;
var root_1 = require("./root");
Object.defineProperty(exports, "rootRoute", { enumerable: true, get: function () { return __importDefault(root_1).default; } });
var auth_1 = require("./auth");
Object.defineProperty(exports, "authRoute", { enumerable: true, get: function () { return __importDefault(auth_1).default; } });
var account_1 = require("./account");
Object.defineProperty(exports, "accountRoute", { enumerable: true, get: function () { return __importDefault(account_1).default; } });
var transfer_1 = require("./transfer");
Object.defineProperty(exports, "transferRoute", { enumerable: true, get: function () { return __importDefault(transfer_1).default; } });
//# sourceMappingURL=index.js.map