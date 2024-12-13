import React, { useState } from 'react'
import { MdHomeFilled } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { FaRegEnvelope } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { MdOutlinePerson } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import imgmy from '../../assets/myim.png'
import { FiMoreHorizontal } from "react-icons/fi";
import { FaFeather } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { logout } from '../../Firebase/Firebase.js';
import { useNavigate } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { MdPerson } from "react-icons/md";
const Sidebar = () => {
   const navigate = useNavigate()

    return (
        <div className='px-3 h-screen flex  justify-around flex-col fixed top-0' >
            <div onClick={()=>navigate('/home')} className='cursor-pointer p-3 rounded-full hover:bg-zinc-800 w-14' >
                <img onClick={()=>navigate('/home')} className=' ' src="https://www.anaka.net/logos/x.png" alt="" />
            </div>
            <div className='h-full px-3 w-full lg:block flex flex-col items-start' >
                <div onClick={()=>navigate('/home')} className='group cursor-pointer' >
                    <div className='group-hover:bg-zinc-800 rounded-full p-2 cursor-pointer flex items-center justify-around lg:w-32 ' >
                    {
                            location.pathname === '/home' ?
                            <MdHomeFilled className='text-white text-3xl' /> :
                            <GoHome className='text-white text-3xl'  />
                        }
                        <h1 className='text-white text-xl font-bold hidden lg:block' > Home</h1>
                    </div>

                </div>
                <div className='group cursor-pointer' >
                    <div className='group-hover:bg-zinc-800 rounded-full p-2 cursor-pointer flex items-center justify-around lg:w-32 ' >
                        <IoIosSearch className='text-white text-3xl' />
                        <h1 className='text-white text-xl hidden lg:block ' > Explore</h1>
                    </div>

                </div>
                <div className='group cursor-pointer' >
                    <div className='group-hover:bg-zinc-800 rounded-full p-2 cursor-pointer flex items-center justify-around lg:w-44 ' >
                        <GoBell className='text-white text-3xl' />
                        <h1 className='text-white text-xl hidden lg:block' > Notification</h1>
                    </div>

                </div>
                <div className='group cursor-pointer' >
                    <div className='group-hover:bg-zinc-800 rounded-full p-2 cursor-pointer flex items-center justify-around lg:w-44 ' >
                        <FaRegEnvelope className='text-white text-3xl' />
                        <h1 className='text-white text-xl hidden lg:block' > Messages</h1>
                    </div>

                </div>
                <div className='group cursor-pointer' >
                    <div className='group-hover:bg-zinc-800 rounded-full p-2 cursor-pointer flex items-center justify-around lg:w-48 ' >
                        <BsPeople className='text-white text-3xl' />
                        <h1 className='text-white text-xl hidden lg:block' > Communities</h1>
                    </div>

                </div>
                <div onClick={()=> navigate('/profile')} className='group cursor-pointer' >
                    <div className='group-hover:bg-zinc-800 rounded-full p-2 cursor-pointer flex items-center justify-around lg:w-32 ' >
                    {
                            location.pathname === '/profile' || location.pathname === '/skill' || location.pathname === '/education' || location.pathname === '/media' || location.pathname === 'contactus'  ? 
                            <MdPerson className='text-white text-3xl' /> :
                            <MdOutlinePerson className='text-white text-3xl' /> 
                        }
                        <h1 className='text-white text-xl hidden lg:block' > Profile</h1>
                    </div>

                </div>
                <div className='group cursor-pointer ' >
                    <div className='group-hover:bg-zinc-800 rounded-full p-2 cursor-pointer flex items-center justify-around lg:w-32 ' >
                        <CiCircleMore className='text-white text-3xl' />
                        <h1 className='text-white text-xl hidden lg:block' > More</h1>
                    </div>

                </div>
                <div className='group cursor-pointer  ' onClick={()=>logout()} >
                    <div className='group-hover:bg-zinc-800 rounded-full p-2 cursor-pointer flex items-center justify-around lg:w-32 ' >
                        <PiSignOutBold  className='text-white text-3xl' />
                        <h1 className='text-white text-xl hidden lg:block' > Signout</h1>
                    </div>

                </div>
                <div className='bg-sky-500 mt-2 mx-3  hover:bg-sky-600 cursor-pointer text-center rounded-full  p-3' >
                    <h1 className='text-white hidden lg:block' >Post</h1>
                    <h1 className='text-white lg:hidden block' ><FaFeather /></h1>
                </div>
             
            </div>
            <div className=' hover:bg-zinc-900 cursor-pointer text-left rounded-full  p-3 flex items-center justify-around' >
                <img className='w-16 h-16 rounded-full' src={imgmy} alt="" />
                <div className='flex items-center justify-between' >
                    <div className='mx-3 text-balance hidden lg:block' >
                      <h1 className='text-white text-sm' >Krishna Shrivastava</h1>
                    <h1 className='text-zinc-600 text-sm' >@Webdeveloper</h1>    
                    </div>
                   
                    <FiMoreHorizontal className='text-white hidden lg:block text-2xl' /> 
                </div>
                  
                </div>
        </div>
    )
}

export default Sidebar
