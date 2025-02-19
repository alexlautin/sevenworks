import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO;

if (!MONGODB_URI){
    throw new Error("MongoDB URI not defined");
}

async function connectToDatabase(){
    if (mongoose.connection.readyState === 1){
        return mongoose;
    }

    const options = {
        bufferCommands: false,
    };
    await mongoose.connect(MONGODB_URI!, options);
    return mongoose;
}

export default connectToDatabase;