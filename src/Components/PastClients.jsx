import React from 'react';
import img1 from '../Assests/image 5.svg';
import img2 from '../Assests/image 8.svg';
import img3 from '../Assests/image 9.svg';
import img4 from '../Assests/image 11.svg';
import img5 from '../Assests/image10.svg';

function PastClient(){
    return(
        <div className='flex flex-col'>
            <div>
                <p>
                    with a few  past web3 clients
                </p>
            </div>
            <div className='grid grid-cols-2 gap-10'>
                <div > <img src={img1} className=''alt='comapny1'/></div>
                <div> <img src={img1} alt='comapny1'/></div>
                <div> <img src={img2} className='w-6 h-6'alt='comapny1'/></div>
                <div> <img src={img3} className='w-6 h-6'alt='comapny1'/></div>
                <div> <img src={img4} className='w-6 h-6'alt='comapny1'/></div>
                <div> <img src={img5} className='w-6 h-6'alt='comapny1'/></div>
            </div>
            <div>
                <p>
                    “Here’s to the crazy ones, the misfits, rebels and the troublemakers!....”
                <br/>
                    -Steve Jobs
                </p>
            </div>
        </div>
    )
}
export default PastClient;