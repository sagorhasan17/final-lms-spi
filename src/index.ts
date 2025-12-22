import express from 'express';
import dotenv from 'dotenv';
import { UserRoutes } from './app/models/User/user.routes.js';

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;



app.use('/api/v1/users', UserRoutes);

app.get('/', (req, res) => {
  res.send(`This server is properly running on port : ${port}`);
});

export default app;
