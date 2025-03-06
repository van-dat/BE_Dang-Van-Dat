import express from 'express';
import { json } from 'body-parser';
import connectDB from './src/config/db';
import { emitScoreUpdate, initializeSocket } from './src/utils/socketUtils';
import { getTopScores, updateScore } from './src/controllers/score_Controller';
import { authenticateToken } from './src/middlewares/authMiddleware';
import { login, register } from './src/controllers/user_controller';

const app = express();

app.use(json());

connectDB()

app.post('/api/update-score', authenticateToken, updateScore);
app.get('/api/top-scores', getTopScores);
app.post('/api/login', login);
app.post('/api/register', register)
export { app, emitScoreUpdate, initializeSocket };