import Link from 'next/link';
import {  useState } from 'react';
import Header from '../components/header'
import Text from '@/components/text';
import axios from 'axios';

export default function Home() {

  
  return (
    <div className="h-screen w-screen bg-white text-black overflow-hidden p-4 ">
      <Header/>
      <Text/>
    </div>
  );
}
