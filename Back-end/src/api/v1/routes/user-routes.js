import express from 'express';
import { home, login, register } from '../../../controllers/user-controller.js';
export const routes = express.Router();

routes.get('/' , home);
routes.post('/login', login);
routes.post('/register' , register);