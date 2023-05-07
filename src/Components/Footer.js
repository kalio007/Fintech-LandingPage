import React from 'react'
import logo from '../Assests/logo.svg'

function Footer() {
  return (
    <div className='md:hidden'>
        <div className="mx-5 md:mx-10 justify-between space-y-8 border-[1px] border-[#4B718D] bg-[#091A3D] md:flex-col md:space-y-8">
          <div className="p-4">
          <div className="flex flex-col items-center justify-between space-y-12 md:flex-row md:justify-between md:space-y-0 md:items-start">
            
              <div className="flex flex-col space-y-2 w-full">
                <div className='flex justify-center'>
                  <h1>Sign up for <span className="text-[#1CE7C2]">Job Alerts</span></h1>
                </div>
                <div className="flex flex-col space-y-4 md:flex-row md:space-x-4">
                <div className="flex">
                <input
                  type="text"
                  className=" px-4 py-2 w-full text-[#091A3D] focus:outline-none"
                  placeholder="Email"
                />
                </div>
               <div className="w-full">
               <button
                  className="px-4 py-2 w-full text-[#091A3D] font-semibold bg-[#1CE7C2] hover:bg-white focus:outline-none"
                >
                  Get job alerts
                </button>
               </div>
               </div>
              </div>
          
            {/* <div>
              <img src="./img/logo-white.svg" className="h-8" alt="" />
            </div>
            
            <div className="flex justify-center space-x-4">
              
              <a href="#">
                <img src="./img/icon-facebook.svg" alt="" className="h-8" />
              </a>
              
              <a href="#">
                <img src="img/icon-youtube.svg" alt="" className="h-8" />
              </a>
              
              <a href="#">
                <img src="img/icon-twitter.svg" alt="" className="h-8" />
              </a>
              <a href="#">
                <img src="img/icon-pinterest.svg" alt="" className="h-8" />
              </a>
              
              <a href="#">
                <img src="img/icon-instagram.svg" alt="" className="h-8" />
              </a>
            </div> */}
          
          <div className="flex flex-row  space-x-8 text-sm md:hidden">  
            <div className="flex flex-col space-y-2 md:space-y-4 text-white">
              <a href="#" className="text-[#1CE7C2] mb-4 hover:text-">Hire Talent</a>
              <a href="#" className="hover:text-">Web3</a>
              <a href="#" className="hover:text-">fintech Talent</a>
              <a href="#" className="hover:text-">AI</a>
              <a href="#" className="hover:text-">Sign Up</a>
              <a href="#" className="hover:text-">Login</a>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-4 text-white">
              <a href="#" className="text-[#1CE7C2] mb-4 hover:text-">Jobs</a>
              <a href="#" className="hover:text-">Remote</a>
              <a href="#" className="hover:text-">Hybrid/Onsite</a>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-4 text-white">
              <a href="#" className="text-[#1CE7C2] mb-2 md:mb-4 hover:text-">About</a>
              <a href="#" className="hover:text-">Calender</a>
              <a href="#" className="hover:text-">Podcasts</a>
              <a href="#" className="hover:text-">Resources</a>
              <a href="#" className="hover:text-">Connect</a>
            </div>
          </div>
          </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex-start align-center">
            
            </div>
            
            <div className="w-4/5 border-[1px] border-[#4B718D] h-0"></div>
            
            
          </div>
          
        </div>
        <div className="flex justify-center md:justify-between w-full px-12 text-xs md:sm">
        <div className="hidden md:flex">
          { <div className=" text-[#4B608D]">
            Copyright &copy; 2023, All Rights Reserved
          </div> }
          </div>
          <div className="flex space-x-5 text-[#4B608D]">
            <p>Terms of Use_</p>
            <p>Privacy Policy_</p>
            <p>Disclaimer</p>
          </div>
          
        </div>
        <div className="flex text-xs justify-center md:hidden">
          { <div className=" text-[#4B608D] ">
            Copyright &copy; 2023, All Rights Reserved
          </div> }
          </div>
    </div>
  )
  }

export default Footer