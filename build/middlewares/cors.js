"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsHandler = void 0;
function corsHandler(req, res, next) {
    // handle cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization');
    // handle preflight, always return 200
    if (req.method === 'OPTIONS')
        return res.status(200).end();
    return next();
}
exports.corsHandler = corsHandler;
//# sourceMappingURL=cors.js.map