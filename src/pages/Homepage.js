import React from 'react';
//import { useEffect } from 'react';
import useFetch from '../Hooks/useFetch';
//http://localhost:1337/api/reviews
function Homepage() {
    const { loading, error, data } = useFetch('http://box5794.temp.domains/~fintecm4/wp-json/wp/v2/job')

    // useEffect(() => {
    //     console.log(data?.data)
    // },[])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

  return (
    <div className="container p-6 m-auto flex flex-col space-y-6">
    <div className="grid grid-cols-3 gap-10">
        {
            data?.map((jobs) =>(
                <div  className='border-[1px] border-white h-20 w-60'>
                    <div className='border-[1px] border-white h-20 w-60 p-6 translate-x-2 -translate-y-2 bg-[#091A3D] opacity-100 '>
                        <h1 className='text-center'>{jobs.slug}</h1>
                    </div>
                </div>  

            ),
        )}
    </div>
    </div>
  )
}

export default Homepage