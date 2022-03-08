"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config(); /** se implementa el metodo config para poder establecer la ruta inicial */
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
        //se crea la ruta inicial de la app.
    }
}
const indexRoutes = new IndexRoutes(); /**
intaciamos la clases con el enrutador */
exports.default = indexRoutes.router;
