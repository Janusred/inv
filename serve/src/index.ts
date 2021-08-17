import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gameRoutes from './routes/gameRoutes';

class Serve {
public app : Application;

 constructor(){
     this.app = express();
     this.config();
     this.routes();
 }
 config(): void{
this.app.set('port',process.env.PORT || 3000);
this.app.use(morgan('dev'));
this.app.use(cors());
this.app.use(express.json());
this.app.use(express.urlencoded({extended:false}));
 }
 routes():void{
this.app.use(indexRoutes);
this.app.use('/api/game', gameRoutes)
 }
 start(): void{
     this.app.listen(this.app.get('port'), () => {
       console.log('En el puerto!!', this.app.get('port'));
     });
 }

}
const serve = new Serve();
serve.start();
