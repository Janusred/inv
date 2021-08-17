import {Router} from 'express';
import gamesController from '../controllers/gamesController';

class GameRoutes{// la ruta tiene como nombre game
    router : Router = Router();

    constructor(){
this.config();
    }
    config():void{
        this.router.get('/',gamesController.list);
        this.router.get('/:id',gamesController.getOne);
        
        this.router.post('/',gamesController.create);
        this.router.put('/:id',gamesController.update);
        
        this.router.delete('/:id', gamesController.delete);
        //se crea la ruta inicial de la app, para poder comprobar 
        //el fuincionamiento se manda un mensaje.

    }
}
 const indexGame=new GameRoutes();
 export default indexGame.router; 