import React from 'react'
import { IoSearch } from "react-icons/io5";
const RightSection = () => {
    return (
        <div  >
            <div className=' fixed top-0 z-30 p-2 px-3 ' >
                <div className='bg-zinc-800 rounded-full p-2 px-5 flex items-center justify-center group focus-within:border border-sky-600 focus-within:bg-black' >
                    <IoSearch className='text-2xl text-zinc-500 group-focus-within:text-sky-600' />
                    <input className='border-none outline-none bg-transparent w-full placeholder:text-zinc-500 text-white px-2' placeholder='Search' type="search" />
                </div>
            </div>
            <div>
                
               
               
            </div>
        </div>
    )
}

export default RightSection
