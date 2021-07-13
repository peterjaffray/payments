"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var app = express_1.default.Router();
dotenv_1.default.config();
exports.default = app.post("", function (req, res) {
    var body = req.body || {};
    var query = req.query || {};
    console.log("body", body);
    console.log("query", query);
    res.sendStatus(200);
});
//# sourceMappingURL=log.js.map