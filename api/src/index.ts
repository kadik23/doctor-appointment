import express,{Express} from 'express';
import cookieParser from 'cookie-parser';
import config from './config';
import cors from 'cors';
import router from './app/routes';

const app: Express = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  credentials: true, 
  origin: 'http://localhost:5173', 
}
// hq3tc2xMOanMr8eP

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', router)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});