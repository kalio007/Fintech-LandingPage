import React from 'react'

function Testimonal() {
  return (
    <section id="testimonials">
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        
        <h2 className="text-4xl font-bold text-center">
            Testimonals
        </h2>
        
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-[#4B718D] md:w-1/3">
                <img src="./img/avatar-anisha.png" alt="person1" className="w-16 -mt-14"/>
                <h5 className="text-lg font-bold">Etisha Li</h5>
                <p className="text-sm text-darkGrayishBlue">
                    "Manage has supercharged our team’s workflow. The ability to
        maintain visibility on larger milestones at all times keeps
        everyone motivated.”
                </p>
            </div>

            
            <div className="flex flex-col items-center p-6 space-y-6 mt-10 rounded-lg bg-[#4B718D] md:w-1/3">
                <img src="./img/avatar-ali.png" alt="person2" className="w-16 -mt-14"/>
                <h5 className="text-lg font-bold">Adelaide Jade</h5>
                <p className="text-sm text-darkGrayishBlue">
                    “We have been able to cancel so many other subscriptions since
                        using Manage. There is no more cross-channel confusion and
                        everyone is much more focused.”
                </p>
            </div>

        
            <div className="hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-[#4B718D] md:flex md:w-1/3">
                <img src="./img/avatar-richard.png" alt="person3" className="w-16 -mt-14"/>
                <h5 className="text-lg font-bold">Declan Rice</h5>
                <p className="text-sm text-darkGrayishBlue">
                    "Manage has changed our team’s workflow. The ability to
        maintain focus on important tasks at all times keeps us going.”
                </p>
            </div>
        </div>
        
        <div className="my-16">
            <div className="flex justify-center">
                <button className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                    <a href="#"> Get Started</a>
                </button>
            </div>
        </div>
    </div>
</section>
  )
}

export default Testimonal