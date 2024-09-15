// Adjust the import path as needed
import connectToDatabase from '../../lib/dbConnect';
import UserModel from '../../models/Users';

export default async function handler(req, res) {
  // Ensure the request method is GET
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Connect to the database
    await  connectToDatabase()

    // Get the search query from the request
    const { query } = req.query;

    // Validate query
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ message: 'Query parameter is required' });
    }

    // Create a regex pattern for the search query
    const regex = new RegExp(query, 'i'); // 'i' for case-insensitive

    // Perform the search using regex
    // const users = await UserModel.find({$or:[{first_name:regex},{last_name:regex}]})
    const users = await UserModel.find({
      $or: [
        { first_name: { $regex: regex } },  // First name matches case-insensitive regex
        { last_name: { $regex: regex } }    // Last name matches case-insensitive regex
      ]
    });

    // Return the search results
    return res.status(200).json(users);
  } catch (error) {
    console.error('Error searching users:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
