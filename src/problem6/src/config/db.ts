import mongoose from 'mongoose';
import 'dotenv/config'
const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect('mongodb://localhost:27017/scoreboard');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

export default connectDB;