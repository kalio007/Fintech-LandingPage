import React from 'react';
import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import image from '../Assests/image.svg'


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
    <div className='w-full flex justify-between p-6 items-center border-shadow-2 '>
            <img src={image} className='h-10' alt='logo'/>
            <div className="flex items-center justify-between">
            <div className=" hidden md:flex space-x-6">
                <p className='text-xl'><a href="#" className="hover:text-darkGrayishBlue">Find a Job</a></p>
                <p className='text-xl'><a href="#" className="hover:text-darkGrayishBlue">Hire Talent </a></p>
                <p className='text-xl'><a href="#" className="hover:text-darkGrayishBlue">Let’s Chat!</a></p>
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
                    <li className='font-bold text-3xl p-8'><a href="#" className="hover:text-darkGrayishBlue">Find a Job</a></li>
                    <li className='font-bold text-3xl p-8'><a href="Hire Talent" className="hover:text-darkGrayishBlue">_Hire Talent </a></li>
                    <li className='font-bold text-3xl p-8'><a href="#" className="hover:text-darkGrayishBlue">Let’s Chat!_</a></li>
                </ul>
            </div>
        </div> 
  )
}

export default NavBar