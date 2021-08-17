import { Router } from 'express';
import { indexController } from '../controllers/indexController';

class IndexRoutes {
    router: Router = Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',indexController.index);
        //se crea la ruta inicial de la app, para poder comprobar el fuincionamiento se manda un mensaje.

    }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;