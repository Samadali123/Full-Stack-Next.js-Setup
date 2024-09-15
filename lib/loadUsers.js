import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import UserModel from '../models/Users.js'; 
import connectToDatabase from './dbConnect.js'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function importUsers() {
  try {
    await connectToDatabase();

    const jsonPath = path.join(__dirname, '..', 'data', 'users.json');
    const jsonData = fs.readFileSync(jsonPath, 'utf8');
    const users = JSON.parse(jsonData);

    await UserModel.insertMany(users);
    console.log('Users imported successfully!');
  } catch (error) {
    console.error("Error importing users:", error);
  }
}

importUsers();