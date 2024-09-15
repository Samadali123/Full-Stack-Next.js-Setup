import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { useRouter } from 'next/router';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (value) => {
    setQuery(value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && query.trim() !== '') {
      router.push(`/results?search=${query}`);
    }
  };

  return (
    <div className="flex items-center bg-zinc-100 rounded-lg px-4 py-2 shadow-sm w-full max-w-lg mx-auto focus-within:ring-2 focus-within:ring-zinc-300">
      <RiSearchLine className="text-zinc-500 mr-3 text-xl" />
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full bg-transparent focus:outline-none text-zinc-800 placeholder-zinc-500 text-sm rounded-2xl md:text-base"
      />
    </div>
  );
};

export default SearchInput;
