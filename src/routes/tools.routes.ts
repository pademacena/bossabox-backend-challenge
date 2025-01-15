import {Router} from 'express';
import toolsController from '../controllers/tools.controller';

const toolsRoutes = Router();

toolsRoutes.post('/tools', toolsController.create);
toolsRoutes.get('/tools', toolsController.list);
toolsRoutes.delete('/tools/:id', toolsController.delete);


export {toolsRoutes}