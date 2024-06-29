import express from 'express';
import userRoutes from './routes/UserRoutes';
import authenticationRoutes from './routes/AuthenticationRoutes';
import bodyParser from 'body-parser';
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors())
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/authentications', authenticationRoutes)

export default app;
