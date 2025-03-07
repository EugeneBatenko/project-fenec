import mongoose from 'mongoose';

async function connectMongoDB(): Promise<void> {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            throw new Error('Missing MONGO_URI in environment variables');
        }

        await mongoose.connect(mongoURI);
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

export default connectMongoDB;
