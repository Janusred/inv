
import mysql from 'promise-mysql';
import keys from './keys';
 const pool =mysql.createPool(keys.database);

 pool.getConnection()
 .then(connection => {
     pool.releaseConnection(connection);// coxencion para la base de datos
     //se importan las variables de keys en donde estan los parametros de la conn
     console.log('Establecida a MySql');
 });
pool.getConnection
export default pool;
/*tenemos problemas con el types de promise pero 
se soliuciona con el npm i promise-mysql@3.3.1 */