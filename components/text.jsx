import React from 'react'
import SearchInput from  '../components/input'

const text = () => {
  return (
    <div className=' w-full h-[90vh] flex flex-col pt-24 items-center gap-3 '>
           <div className="top flex gap-3 items-center">
           <div className="img">
            <img src="" alt="" />
           </div>
           <h1 className='font-bold text-6xl'>Girman</h1> 
           </div>
           <SearchInput/>
    </div>
  )
}

export default text