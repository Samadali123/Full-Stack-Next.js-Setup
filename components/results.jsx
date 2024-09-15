
import React, { useEffect, useState } from 'react';
import SearchInput from '../components/input';
import Card from '../components/card';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import ClipLoader from 'react-spinners/ClipLoader';

const Results = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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
        setLoading(true);
        try {
          const { data } = await axios.get(`/api/searchUsers?query=${searchQuery}`);
          if (data.length > 0) {
            setUsers(data);
            setError(null);
          } else {
            setUsers([]);
            setError(null);
          }
        } catch (error) {
          console.error('Error fetching users:', error);
          setUsers([]);
          setError('There was an error fetching the users. Please try again later.');
        } finally {
          setLoading(false);
        }
      };
      getUsers();
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

<header className="w-full px-4 py-2 bg-white shadow-md flex items-center justify-between">
  {/* Logo Section */}
  <div className="flex-shrink-0">
    <Image
      width={150} 
      height={40} 
      src="https://www.girmantech.com/Logo2.svg"
      alt="Girman Technologies Logo"
      className="h-auto w-auto max-w-xs md:max-w-md" 
    />
  </div>

  <div className="flex-grow mx-4">
    <SearchInput className="w-full" />
  </div>

  <div className="hidden md:flex items-center">

  </div>
</header>


      <main className="flex-grow p-4 w-full flex justify-center items-center">

        {loading ? (
          <ClipLoader color="#007bff" loading={loading} size={50} />
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : users.length === 0 ? (
         
          <div className="w-full flex justify-center items-center">
            <Image
              height={500}
              width={1000}
              src="/results.png"
              alt="No Results"
              className="max-w-xs md:max-w-md mx-auto"
            />
          </div>
        ) : (
    
          <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto">
            {users.map((user) => (
              <Card key={user._id} user={user} isLoading={loading} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Results;
