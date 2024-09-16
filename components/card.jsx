
import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './ui/dialog';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css'; 
import { Button } from "@/components/ui/button"
const Card = ({ user, isLoading }) => {


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


    
      {/* <Dialog>
        <DialogTrigger className='bg-black text-white rounded-xl px-3 py-1'>Fetch Details</DialogTrigger>
        <DialogContent className="bg-white text-black flex  gap-3 flex-col items-center justify-center" >
          <DialogTitle as="h3" className="text-xl text-center font-semibold mb-4">
            User Details
          </DialogTitle>
          <DialogDescription>
          <Image
          width={"100"}
          height={"200"}
          src="/default.jpg"
          alt={`${user.first_name} ${user.last_name}`}
          // layout="fill"
          className="rounded-full object-cover"
        />
            <p><strong>First Name:</strong> {user.first_name}</p>
            <p><strong>Last Name:</strong> {user.last_name}</p>
            <p><strong>City:</strong> {user.city}</p>
            <p>
              <strong>Contact Number:</strong> {user.contact_number}
            </p>
          </DialogDescription>
        </DialogContent>
      </Dialog> */}
<Dialog>
  <DialogTrigger className='bg-black text-white rounded-xl px-3 py-1'>
    Fetch Details
  </DialogTrigger>
  <DialogContent className="bg-white text-black p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center gap-3 w-full max-w-md mx-auto rounded-lg">
    <DialogTitle as="h3" className="text-xl sm:text-2xl lg:text-3xl text-center font-semibold mb-4">
      User Details
    </DialogTitle>
    <DialogDescription className="flex flex-col items-center text-center">
      <Image
        width={100}
        height={100}
        src="/default.jpg"
        alt={`${user.first_name} ${user.last_name}`}
        className="rounded-full object-cover"
      />
      <p className="mt-3"><strong>First Name:</strong> {user.first_name}</p>
      <p><strong>Last Name:</strong> {user.last_name}</p>
      <p><strong>City:</strong> {user.city}</p>
      <p><strong>Contact Number:</strong> {user.contact_number}</p>
    </DialogDescription>
  </DialogContent>
</Dialog>

    </div>
  );
};

export default Card;
