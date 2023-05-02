import React from 'react';
import image from '../Assests/image.svg'

function Hero() {
  return (

    <div className="container flex flex-col-reverse m-10 p-20 md:flex-row items-center px-6 mx-auto mt-10 md:justify-between">
        
        <div className="flex flex-col space-y-10 mb-10">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                We love <span className='text-[#4B74FB]'>builders</span> 
            </h1>
            <p className="max-w-sm text-center text-xl md:text-left">
            We are a headhunting firm specializing in web3, fintech and AI technologies. We seek out
            and work with builders and dreamers exploring uncharted territories.
            Let's find your dream role!

            </p>
            
            <div className="flex justify-center md:justify-start">
                <button className="p-3 px-6  text-white border-2 border-white  baseline hover:bg-white">
                    <a href="#"> JOB OPENINGS</a>
                </button>
            </div>
        </div>
        
        <div className="flex justify-center">
            <img src={image} alt="illustration intro" className='h-96 w-96'/>
        </div>
    </div>

  )
}

export default Hero