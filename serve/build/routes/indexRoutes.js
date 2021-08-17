"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
        //se crea la ruta inicial de la app, para poder comprobar el fuincionamiento se manda un mensaje.
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
