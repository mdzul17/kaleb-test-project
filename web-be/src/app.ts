import express from 'express';
import userRoutes from './routes/UserRoutes';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
