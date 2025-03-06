import { Request, Response } from 'express';
import { UserScore } from '../models/model_useScore';
import { emitScoreUpdate } from '../utils/socketUtils';

export const updateScore = async (req: Request, res: Response): Promise<void> => {
    const { userId, scoreIncrease } = req.body;

    if (typeof scoreIncrease !== 'number' || scoreIncrease <= 0) {
        res.status(400).json({ error: 'Invalid scoreIncrease value' });
        return; 
    }

    try {
        let userScore = await UserScore.findOne({ userId });
        if (!userScore) {
            userScore = new UserScore({ userId, score: 0 });
        }

        userScore.score += scoreIncrease;
        await userScore.save();

        emitScoreUpdate(userId, userScore.score);

        res.status(200).json({ message: 'Score updated successfully', newScore: userScore.score });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getTopScores = async (req: Request, res: Response) => {
    try {
        const topScores = await UserScore.find()
            .sort({ score: -1 })
            .limit(10)
            .select('userId score -_id');

        res.status(200).json(topScores);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};