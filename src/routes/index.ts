import {Router} from 'express';

import { commonRoutes } from './common.routes';
import { toolsRoutes } from './tools.routes';

const routes = Router();

routes.use('/api', commonRoutes);
routes.use('', toolsRoutes);

export {routes}