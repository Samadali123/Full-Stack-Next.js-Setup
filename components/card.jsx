
import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogTitle, DialogTrigger } from './ui/dialog';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css'; 
import { Button } from "@/components/ui/button"
const Card = ({ user, isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);


  if (isLoading) {

    return (
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm flex flex-col items-center space-y-4">
        <div className="w-16 h-16">
          <Skeleton circle={true} height={64} width={64} />
        </div>
        <Skeleton width={150} height={24} />
        <Skeleton width={100} height={20} />
        <Skeleton width={120} height={20} />
        <Skeleton width={100} height={40} />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm flex flex-col items-center space-y-4">
      {/* User Avatar */}
      <div className="relative w-16 h-16">
        <Image
          src="/default.jpg"
          alt={`${user.first_name} ${user.last_name}`}
          layout="fill"
          className="rounded-full object-cover"
        />
      </div>

      <h2 className="text-lg md:text-xl font-semibold text-center">
        {user.first_name} {user.last_name}
      </h2>


      <div className="flex items-center text-zinc-500 space-x-1">
        <MdLocationOn className="text-xl" />
        <span>{user.city}</span>
      </div>

      <div className="flex items-center text-zinc-600 space-x-1">
        <MdPhone className="text-xl" />
        <span>{user.contact_number}</span>
      </div>


      {/* <button
        onClick={openDialog}
        className="bg-black text-white py-2 px-6 rounded-lg hover:bg-zinc-800 transition"
      >
        Fetch Details
      </button> */}
    
      <Button className="bg-black text-white hover:text-black" onClick={openDialog} >Fetch Details</Button>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={closeDialog}
          className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-30"
        >
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <DialogTitle as="h3" className="text-xl font-semibold mb-4">
              User Details
            </DialogTitle>
            <p>
              <strong>First Name:</strong> {user.first_name}
            </p>
            <p>
              <strong>Last Name:</strong> {user.last_name}
            </p>
            <p>
              <strong>City:</strong> {user.city}
            </p>
            <p>
              <strong>Contact Number:</strong> {user.contact_number}
            </p>
            <button
              onClick={closeDialog}
              className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
            >
              Close
            </button>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Card;
