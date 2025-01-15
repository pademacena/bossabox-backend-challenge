import {Router} from 'express';
import connectController from '../controllers/connect.controller';

const commonRoutes = Router();

commonRoutes.get('/status', connectController.handle);


export {commonRoutes}