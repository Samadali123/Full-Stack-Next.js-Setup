import { useState } from 'react';
import Results from '../components/results'


export default function Home() {
  return (
    <div className="w-full bg-white text-black overflow-hidden p-4 ">
        <Results/>  
    </div>
  );
}