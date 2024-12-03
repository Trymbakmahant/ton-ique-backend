import express, { Express, Request, Response } from 'express';
import userRoutes from './user';

const app: Express = express();

app.use('/user', userRoutes);


export default app;