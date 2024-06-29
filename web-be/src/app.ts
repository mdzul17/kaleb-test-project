import express from 'express';
import userRoutes from './routes/UserRoutes';
import authenticationRoutes from './routes/AuthenticationRoutes';

const app = express();

app.use(express.json());
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/authentications', authenticationRoutes)

export default app;
