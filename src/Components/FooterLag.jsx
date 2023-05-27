import React from 'react';
import logo from '../Assests/logo.svg';
import Image1 from '../Assests/in.svg';
import Image2 from '../Assests/Vector.svg';
import Image3 from '../Assests/Frame.svg';


function FooterLag() {
  return (
    <div className='hidden md:block'>
        <div className="mx-10 justify-between space-y-8 border-[1px] border-[#4B718D] bg-[#091A3D] md:flex-col md:space-y-8">
          <div className="p-12">
          <div className="flex flex-col items-center justify-between space-y-12 md:flex-row md:justify-between md:space-y-0 md:items-start">
            
              <div className="flex flex-col space-y-2">
                <div>
                  <h1>Sign up for <span className="text-[#FC7208]">Job Alerts</span></h1>
                </div>
                <div className="flex space-x-4 ">
                <div className="flex">
                <input
                  type="text"
                  className="px-4 py-2 mx-0  text-[#091A3D] bg-[#0C1F47] focus:outline-none"
                  placeholder="Email"
                />
                </div>
               <div className="">
               <button
                  className="px-6 py-2 text-[#091A3D] font-semibold bg-[#FC7208] hover:bg-white focus:outline-none"
                >
                  Get job alerts
                </button>
               </div>
               </div>
               <div className='flex'>
                <img src={logo} alt='footer_image' className='h-10' />
               </div>
              </div>

          <div className="flex flex-row space-x-14">  
            <div className="flex flex-col space-y-2 text-white">
              <a href="#" className="text-[#FC7208] mb-4 hover:text-">Hire Talent</a>
              <a href="#" className="hover:text-">Web3</a>
              <a href="#" className="hover:text-">fintech Talent</a>
              <a href="#" className="hover:text-">AI</a>
              <a href="#" className="hover:text-">Sign Up</a>
              <a href="#" className="hover:text-">Login</a>
            </div>
            <div className="flex flex-col space-y-4 text-white">
              <a href="#" className="text-[#FC7208] mb-4 hover:text-">Jobs</a>
              <a href="#" className="hover:text-">Remote</a>
              <a href="#" className="hover:text-">Hybrid/Onsite</a>
            </div>
            <div className="flex flex-col space-y-4 text-white">
              <a href="#" className="text-[#FC7208] mb-4 hover:text-">About</a>
              <a href="#" className="hover:text-">Calender</a>
              <a href="#" className="hover:text-">Podcasts</a>
              <a href="#" className="hover:text-">Resources</a>
              <a href="#" className="hover:text-">Connect</a>
            </div>
          </div>
          </div>
          </div>


          <div className="flex flex-col ">

            <div className="w-full border-[1px] border-[#4B718D] h-0"></div>
            
            <div className="flex flex-row-reverse p-2 space-x-4">
              <a href="https://www.youtube.com/c/FintechRecruiters">
                <img src={Image1} alt="hello" className="h-8" />
              </a>

              <a href="https://twitter.com/fintechcareers">
                <img src={Image3} alt="" className="h-8" />
              </a>
            </div>
          </div>
           
        </div>

        <div className="flex justify-between w-full px-12 text-sm">
        <div className="flex">
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
    </div>
  )
}

export default FooterLag;