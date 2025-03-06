import mongoose, { model, Schema } from 'mongoose';

const userScoreSchema = new Schema({
    userId: { type: String, required: true, unique: true },
    score: { type: Number, default: 0 },
});

export const UserScore = model('UserScore', userScoreSchema);