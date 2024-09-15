import React, { useState } from 'react';
import { Dialog } from 'shadcn-ui';
import Image from 'next/image';

const Card = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm flex flex-col items-center">
      {/* User Avatar */}
      <div className="relative">
        <Image
          src="/default.png" // Default avatar if no image is provided
          alt={`${user.first_name} ${user.last_name}`}
          width={64}
          height={64}
          className="rounded-full object-cover"
        />
      </div>

      {/* User Name */}
      <h2 className="mt-4 text-2xl font-semibold">{user.first_name} {user.last_name}</h2>

      {/* User City */}
      <div className="mt-2 flex items-center text-zinc-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zM12 14.25c-2.486 0-4.5 2.014-4.5 4.5s2.014 4.5 4.5 4.5 4.5-2.014 4.5-4.5-2.014-4.5-4.5-4.5z" />
        </svg>
        {user.city}
      </div>

      {/* User Contact Number */}
      <div className="mt-4 text-zinc-600">
        <p className="text-lg font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884l2-1A2 2 0 016.77 5.13l.67 1.492a2 2 0 01-.45 2.195l-.36.36c.205.52.4 1.023.591 1.528l.355-.35a2 2 0 012.195-.451l1.492.671a2 2 0 01.756 2.765l-1 2a2 2 0 01-2.243.986 15.947 15.947 0 01-6.547-3.6 15.947 15.947 0 01-3.6-6.546 2 2 0 01.986-2.244z" />
          </svg>
          {user.contact_number}
        </p>
        <p className="text-zinc-400 text-sm">Available on phone</p>
      </div>

      {/* Fetch Details Button */}
      <button
        onClick={openDialog}
        className="mt-4 bg-black text-white py-2 px-6 rounded-lg hover:bg-zinc-800 transition"
      >
        Fetch Details
      </button>

      {/* Dialog for Showing User Details */}
      <Dialog open={isOpen} onClose={closeDialog} className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
          <Dialog.Title as="h3" className="text-xl font-semibold mb-4">User Details</Dialog.Title>
          <p><strong>First Name:</strong> {user.first_name}</p>
          <p><strong>Last Name:</strong> {user.last_name}</p>
          <p><strong>City:</strong> {user.city}</p>
          <p><strong>Contact Number:</strong> {user.contact_number}</p>
          <button
            onClick={closeDialog}
            className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
          >
            Close
          </button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Card;
