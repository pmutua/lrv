"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ApplicationsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Games'));
    }
}
const applicationsRoutes = new ApplicationsRoutes();
exports.default = applicationsRoutes.router;
