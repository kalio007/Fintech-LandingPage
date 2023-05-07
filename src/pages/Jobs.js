import React from 'react';
import { useState } from 'react'
//import { useEffect } from 'react';
//import useFetch from '../Hooks/useFetch';
import data from '../TestApi.js';
//http://localhost:1337/api/reviews

function Jobs() {
    // const { loading, error, data } = useFetch('http://box5794.temp.domains/~fintecm4/wp-json/wp/v2/job')

    // // useEffect(() => {
    // //     console.log(data?.data)
    // // },[])

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error...</p>

    const [jobs, setJobs] = useState(data);

  return (
    <div className="container p-6 m-auto flex flex-col space-y-6">
        <div>
            <h1 className='text-4xl font-bold text-center mb-6'>Some of our previous placements</h1>
        </div>
    <div className="grid grid-cols-2 gap-5 text-sm md:text-xl md:grid-cols-3 md:gap-10">
        {/* {
            data?.map((jobs) =>(
                <div  className='border-[1px] border-white h-20 w-60'>
                    <div className='border-[1px] border-white h-20 w-60 p-6 translate-x-2 -translate-y-2 bg-[#091A3D] opacity-100 '>
                        <h1 className='text-center'>{jobs.slug}</h1>
                    </div>
                </div>  

            ),
        )} */}
        {
            jobs.map((postions) =>(
                <div  className='border-[1px] border-white h-20 w-40 md:h-20 md:w-60'>
                    <div className='border-[1px] border-white h-20 w-40 md:h-20 md:w-60 p-5 md:p-4 translate-x-1 -translate-y-1 md:translate-x-2 md:-translate-y-2 bg-[#091A3D] opacity-100 '>
                        <h1 className='text-center'>{postions.job}</h1>
                    </div> 
                </div>  

            ),
        )}
        

    </div>
    </div>
  )
}

export default Jobs