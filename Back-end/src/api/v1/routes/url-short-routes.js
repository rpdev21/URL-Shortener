import express from 'express';
import { getBigURL } from '../../../controllers/short-controller.js';
import { urlShort } from '../../../controllers/short-controller.js';
export const shortRoute = express.Router();
shortRoute.post('/short-url' , urlShort);
shortRoute.get('/small/:code', getBigURL);

