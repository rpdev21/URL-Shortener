import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { routes as userRoutes } from './src/api/v1/routes/user-routes.js';
import { error404 } from './src/utils/middlewares/404.js';
import { connectDB } from './src/utils/db/connection.js';
import cors from 'cors';
import { shortRoute } from './src/api/v1/routes/url-short-routes.js';

const app = express();
app.use(cors());

app.use(express.json());

app.use('/', userRoutes);
app.use('/' , shortRoute);
app.use(error404);

const promise = connectDB();
promise.then(result =>{
    console.log('DB connected successfully');
    const server = app.listen(3000, err => {
    if (err) 
        console.log('Server crash ', err);
    else
        console.log('Server is running on port 3000');

})

}).catch(err => {
    console.log('DB connection error ', err);
    console.error(err.stack);
});