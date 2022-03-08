"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //instalamos Types de express "npm i @types/express -D"
const morgan_1 = __importDefault(require("morgan")); //importamos types de los modulos que necesitamos
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes")); // se importan la rutas de los controladores de la REST API
const gameRoutes_1 = __importDefault(require("./routes/gameRoutes"));
class Serve {
    //Variable publica de tipo aplication
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); // configuraremos nuestra rest api en el puerto 3000
        this.app.use(morgan_1.default('dev')); // ejecutamos cada modulos que instalamos 
        this.app.use(cors_1.default()); // en este caso dev, que es la final de la convecion de TS a JS
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default); // indicamos la ruta que utilizara nuestro index 
        this.app.use('/api/game', gameRoutes_1.default); /* indicamos nuestra ruta, pero asignamos una opcion mas la cual
        el usuario podra acceder a ella cuando escriba localhost//3000/api/game */
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('En el puerto!!', this.app.get('port')); //
            // ingresando a la REST API se conectara por el puerto 3000
        });
    }
}
const serve = new Serve();
serve.start(); /*ejecutamos el metodo, este nos permitira conectar
desde el puertoo 3000 la base de datos. */
