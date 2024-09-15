import React, { useEffect, useState } from 'react';
import SearchInput from '../components/input';
import Card from '../components/card';
import { useRouter } from 'next/router';
import axios from 'axios'; // Import axios

const Results = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { search } = router.query;

  useEffect(() => {
    if (search) {
      setSearchQuery(search);
    }
  }, [search]);

  useEffect(() => {
    if (searchQuery) {
      const getUsers = async () => {
        try {
          const { data } = await axios.get(`/api/searchUsers?query=${searchQuery}`);
          console.log(data)
          setUsers(data);
          setError(null); // Clear any previous errors
        } catch (error) {
          console.error('Error fetching users:', error);
          setError('There was an error fetching the users. Please try again later.');
          
        }
      };
      getUsers();
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="w-full h-[10vh] px-4 py-2 flex justify-between items-center bg-white shadow-md">
        <div className="flex-shrink-0">
          <img 
            src="https://www.girmantech.com/Logo2.svg" 
            alt="Girman Technologies Logo" 
            className="h-8 md:h-10 w-auto"
          />
        </div>
        <SearchInput className="flex-grow max-w-md" />
      </header>

      <main className="flex-grow p-4">
        {error && <p className="text-center text-red-500 mb-4">{error}</p>}
        {users.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user) => (
              <Card key={user._id} user={user} />
            ))}
          </div>
        ) : (
          <img 
          src="../public/results.png" 
          alt="No Results" 
          className="h-8 md:h-10 w-auto"
        />
        )}
      </main>
    </div>
  );
};

export default Results;
