import React from 'react';
import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import logo from '../Assests/logo.svg'


function NavBar() {
     const [nav, setNav] = useState(false);
        const handleSubmit = () => {
            setNav(!nav);
            // this ensures a no scroll when the navbar is open
            if (!nav) {
                document.body.style.overflow = 'hidden'
            } else{
                document.body.style.overflow = 'scroll'
            }
        }
  return (
    <div className='w-full flex justify-between px-10 py-6 items-center border-shadow-2 '>
            <img src={logo} className='h-10' alt='logo'/>
            <div className="flex items-center justify-between">
            <div className=" hidden md:flex space-x-10">
                <p className='text-xl'><a href="" className="">Find a Job</a></p>
                <p className='text-xl'><a href="" className="">Hire Talent </a></p>
                <p className='text-xl'><a href="https://calendly.com/nako/quick-coffee-chat-10-mins" className="">Let’s Chat!</a></p>
            </div>
            </div>
            {/* <div className="hidden md:flex ">
                <button className="p-2 px-6 text-white bg-[#1CE7C2] baseline hover:bg-brightRedLight">
                    <a href="#">Sign In</a>
                </button>
            </div> */}
            <HiMenuAlt3 size={25} onClick={handleSubmit} className='z-20 text-white cursor-pointer md:hidden '/>
            <div className={nav ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-4  flex-col z-10' 
                                : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}
            >
                <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                    <li className='font-bold text-3xl p-8'><a href="#" className="">Find a Job</a></li>
                    <li className='font-bold text-3xl p-8'><a href="https://calendly.com/nako/web3employer?back=1&month=2023-05" className="">Hire Talent </a></li>
                    <li className='font-bold text-3xl p-8'><a href="https://calendly.com/nako/quick-coffee-chat-10-mins" className="">Let’s Chat!</a></li>
                </ul>
            </div>
        </div> 
  )
}

export default NavBar