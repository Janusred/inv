"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GameRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesController_1.default.list); /**
        establecemos en la ruta lo que el controlador debe controller debe concatenar o en dado caso
        donde comenzar a obtener la informacion */
        this.router.get('/:id', gamesController_1.default.getOne);
        this.router.post('/', gamesController_1.default.create);
        this.router.put('/:id', gamesController_1.default.update);
        this.router.delete('/:id', gamesController_1.default.delete);
        //se crea la ruta inicial de la app, para poder comprobar 
        //el fuincionamiento se manda un mensaje.
    }
}
const indexGame = new GameRoutes();
exports.default = indexGame.router;
