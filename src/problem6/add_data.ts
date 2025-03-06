import mongoose from 'mongoose';
import 'dotenv/config'
import { UserScore } from './src/models/model_useScore';
import { User } from './src/models/model_user';

// Kết nối MongoDB
const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  }
};

const seedData = async (): Promise<void> => {
  try {
    await User.deleteMany({});
    await UserScore.deleteMany({});

    const users = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
      { username: 'user3', password: 'password3' },
    ];

    const userScores = [
      { userId: 'user1', score: 100 },
      { userId: 'user2', score: 200 },
      { userId: 'user3', score: 150 },
    ];

    for (const user of users) {
      const newUser = new User(user);
      await newUser.save();
    }

    for (const score of userScores) {
      const newScore = new UserScore(score);
      await newScore.save();
    }

    console.log('Data seeded successfully');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    mongoose.disconnect();
  }
};

connectDB().then(() => seedData());