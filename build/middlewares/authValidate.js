"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authChecker = void 0;
var auth_1 = require("../utils/auth");
/**
 * a middleware to check if user is authorized
 * while sending a request to a protected route
 */
function authChecker(req, res, next) {
    var authToken = req.headers.authorization;
    // phase 1: no actual auth logic yet
    if (!authToken) {
        return res
            .status(401)
            .send({ status: 'failed', description: 'Request not authorized' });
    }
    try {
        // TODO: extract the jwt payload for user data
        (0, auth_1.verifyJWT)(authToken);
    }
    catch (e) {
        return res
            .status(400)
            .send({ status: 'failed', description: 'Invalid token' });
    }
    return next();
}
exports.authChecker = authChecker;
exports.default = authChecker;
//# sourceMappingURL=authValidate.js.map