import React from 'react';
import SearchInput from '../components/input';
import Image from 'next/image';

const Text = () => {
  return (
    <div className='w-full h-[90vh] flex flex-col pt-24 items-center gap-6 px-4'>
      <div className="top flex flex-col md:flex-row gap-3 items-center">
        {/* <div className="img">
          <Image
            height={150}
            width={300}
            src="https://www.girmantech.com/Logo2.svg"
            alt="Company Logo"
            className="w-auto"
            priority
          />
        </div> */}
        <h1 className='font-bold text-4xl md:text-6xl text-center md:text-left'>Girman</h1>
      </div>
      
      <SearchInput />
    </div>
  );
}

export default Text;
