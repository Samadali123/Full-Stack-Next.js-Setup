import Link from 'next/link';
import {  useEffect, useState } from 'react';
import Header from '../components/header'
import Text from '@/components/text';
import axios from 'axios';

export default function Home() {


  return (
    <div className="min-h-screen main w-full bg-white text-black overflow-hidden p-4 ">
      <Header/>
      <Text/>
    </div>
  );
}
