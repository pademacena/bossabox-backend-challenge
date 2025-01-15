import {Router} from 'express';

import { commonRoutes } from './common.routes';

const routes = Router();

routes.use('/api', commonRoutes);

export {routes}