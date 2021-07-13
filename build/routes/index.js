"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var contact_1 = __importDefault(require("./contact"));
var invoices_1 = __importDefault(require("./invoices"));
var log_1 = __importDefault(require("./log"));
var payments_1 = __importDefault(require("./payments"));
var router = express_1.default.Router();
exports.default = router
    .use('/easypay', contact_1.default)
    .use('/contact', contact_1.default)
    .use('/invoices', invoices_1.default)
    .use('/payments', payments_1.default)
    .use('/log', log_1.default)
    .get('/favicon.ico', function (_req, res) { return res.sendStatus(204); })
    .get('', function (_req, res) { return res.sendStatus(200); });
//# sourceMappingURL=index.js.map