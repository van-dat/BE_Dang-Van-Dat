import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/database';
import { errorHandler } from './middleware/errorHandler';
import userRoutes from './routes/user_routes';
import "dotenv/config";

const PORT = process.env.PORT || 5000;
connectDB();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/user', userRoutes);



app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
