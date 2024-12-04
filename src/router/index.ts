import express, { Express, Request, Response } from 'express';
import userRoutes from './user';
import profileRoute from "./profile"; 
import partnerRoute from "./partner";
const app: Express = express();

app.use('/user', userRoutes);
app.use("/partner",partnerRoute);
app.use("/profile", profileRoute)


export default app;