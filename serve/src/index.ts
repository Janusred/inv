import express,{Application} from 'express'; //instalamos Types de express "npm i @types/express -D"
import morgan from 'morgan'; //importamos types de los modulos que necesitamos
import cors from 'cors';

import indexRoutes from './routes/indexRoutes'; // se importan la rutas de los controladores de la REST API
import gameRoutes from './routes/gameRoutes';

class Serve {
public app : Application;

 constructor(){
     this.app = express();
     this.config();
     this.routes();
 }
 config(): void{
this.app.set('port',process.env.PORT || 3000);// configuraremos nuestra rest api en el puerto 3000
this.app.use(morgan('dev')); // ejecutamos cada modulos que instalamos 
this.app.use(cors());        // en este caso dev, que es la final de la convecion de TS a JS
this.app.use(express.json());
this.app.use(express.urlencoded({extended:false}));
 }
 routes():void{
this.app.use(indexRoutes);// indicamos la ruta que utilizara nuestro index 
this.app.use('/api/game', gameRoutes)
 }
 start(): void{
     this.app.listen(this.app.get('port'), () => {
       console.log('En el puerto!!', this.app.get('port')); 
       // ingresando a la REST API se conectara por el puerto 3000
     });
 }

}
const serve = new Serve();
serve.start();  /*ejecutamos el metodo, este nos permitira conectar 
desde el puertoo 3000 la base de datos. */               
