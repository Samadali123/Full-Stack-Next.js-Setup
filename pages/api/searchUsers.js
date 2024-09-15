
import connectToDatabase from '../../lib/dbConnect';
import UserModel from '../../models/Users';

export default async function handler(req, res) {

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {

    await  connectToDatabase()
    const { query } = req.query;
  
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ message: 'Query parameter is required' });
    }

    const regex = new RegExp(query, 'i'); 

    const users = await UserModel.find({
      $or: [
        { first_name: { $regex: regex } },  
        { last_name: { $regex: regex } }   
      ]
    });

    return res.status(200).json(users);
  } catch (error) {
    console.error('Error searching users:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
