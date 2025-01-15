import {Router} from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger-output.json';
import { commonRoutes } from './common.routes';
import { toolsRoutes } from './tools.routes';

const routes = Router();

routes.use('/api', commonRoutes);
routes.use('', toolsRoutes);
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export {routes}