import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-[10vh] px-6 md:px-12 py-2 flex justify-between items-center">

      <div className="flex-shrink-0">
        <Image
          height={50}
          width={150}
          src="https://www.girmantech.com/Logo2.svg"
          alt="Company Logo"
          className="w-auto"
          priority
        />
      </div>

  
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          <FiMenu />
        </button>
      </div>

      <nav
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 p-6 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:bg-transparent md:shadow-none md:p-0`}
      >
       
        <div className="flex justify-end md:hidden">
          <button onClick={toggleMenu} className="text-3xl mb-4">
            <FiX />
          </button>
        </div>


        <ul className="space-y-4 md:space-y-0 md:flex md:gap-4 text-sm uppercase">
          <li>
            <Link href="/" className="border-b-2 border-blue-400">
              Search
            </Link>
          </li>
          <li>
            <Link className='hover:border-b-2 border-blue-500' target="_main" href="https://www.girmantech.com/">
              Website
            </Link>
          </li>
          <li>
            <Link className='hover:border-b-2 border-blue-400' href="https://www.linkedin.com/company/girmantech/">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link className='hover:border-b-2 border-blue-400' href="mailto:contact@girmantech.com">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
