"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var middlewares_1 = require("./middlewares");
var app = (0, express_1.default)();
var port = process.env.PORT || 8080;
// express built-in middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
// custom middleware
app.use(middlewares_1.corsHandler);
// app routes
app.use('/', routes_1.rootRoute);
app.use('/authenticate', routes_1.authRoute);
app.use('/account', routes_1.accountRoute);
app.use('/transfer', routes_1.transferRoute);
app.listen(port, function () { return console.log("Express now running on port " + port + "!"); });
//# sourceMappingURL=index.js.map