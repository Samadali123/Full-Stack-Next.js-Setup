import mongoose from "mongoose";
// const MONGODB_URI = 'mongodb://127.0.0.1:27017/GermanTech';
const MONGODB_URI =  "mongodb+srv://samadali0125:samad123@nextjs.tzhfg.mongodb.net/GermanTech?retryWrites=true&w=majority&appName=nextjs"

async function connectToDatabase() {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected to database');
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Failed to connect to database:', error);
    throw error;
  }
}

export default connectToDatabase;