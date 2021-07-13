"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var index_1 = __importDefault(require("./routes/index"));
var isProduction = process.env.NODE_ENV === 'production';
dotenv_1.default.config();
var port = process.env.PORT || 3200;
var app = express_1.default();
if (isProduction) {
    app.use(helmet_1.default());
    app.disable('x-powered-by');
    app.use(morgan_1.default('combined'));
    app.set('trust proxy', 1);
}
else {
    app.use(morgan_1.default('dev'));
}
app.use(express_1.default.json())
    .use(express_1.default.urlencoded({ extended: true }))
    .use(index_1.default)
    .get('*', function (req, res) {
    res.status(404);
});
app.listen(port, function () { return console.log("Port " + port); });
//# sourceMappingURL=index.js.map