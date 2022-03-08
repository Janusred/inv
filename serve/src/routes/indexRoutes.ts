import { Router } from 'express';
import { indexController } from '../controllers/indexController';

class IndexRoutes {
    router: Router = Router();

    constructor() {
        this.config();/** se implementa el metodo config para poder establecer la ruta inicial */
    }
    config(): void {
        this.router.get('/',indexController.index);
        //se crea la ruta inicial de la app.

    }
}
const indexRoutes = new IndexRoutes();/**
intaciamos la clases con el enrutador */
export default indexRoutes.router;