import { Router } from 'express';

import UserController from './app/controllers/UserController';
import authMiddleware from './app/middlewares/auth';
import AuthController from './app/controllers/AuthController';

const routes = Router();

routes.get('/', (req, res) => res.json('jwt-testes'));

routes.post('/users', UserController.store);
routes.post('/login', AuthController.store);

routes.use(authMiddleware);

routes.get('/test', (req, res) => 
    res.json({ user: req.userId, result: 'Authenticated' })
);

export default routes;
