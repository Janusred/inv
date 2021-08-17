"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection); // coxencion para la base de datos
    //se importan las variables de keys en donde estan los parametros de la conn
    console.log('Establecida a MySql');
});
pool.getConnection;
exports.default = pool;
/*tenemos problemas con el types de promise pero
se soliuciona con el npm i promise-mysql@3.3.1 */ 
