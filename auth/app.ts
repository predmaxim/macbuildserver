import express, {Express} from 'express';
import cors from 'cors';
import authRoute from './routes/authRoutes';
import {APP_URL, PORT} from './libs/constants';

const app: Express = express();

app.use(cors({
  origin: APP_URL,
  credentials: true
}));
app.use(express.json());

app.use(authRoute);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`⚡️[server]: Server started on port: ${PORT}`));
  } catch (error) {
    console.log(`❌ [server]: ${error}`);
  }
};

start();
