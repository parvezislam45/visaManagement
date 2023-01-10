import React from 'react';
import CountUp from 'react-countup';

const Stak = () => {
    return (
        <div>
            <main class="profile-page">
                <section class="">
                    <div class="container mx-auto px-4">
                        <div class="relative flex flex-col break-words w-full mb-6 rounded-lg">
                            <div class="px-6">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full">
                                        <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 ' >
                                                <div class="mr-10 p-10 text-center bg-banner">
                                                    <span class="text-8xl font-bold block uppercase tracking-wide text-white -mt-3">
                                                        <div class="avatar">
                                                            <div class="w-20 rounded ">
                                                                <img src="https://i.ibb.co/Cmh1pmH/1.png" alt=''/>
                                                            </div>
                                                        </div>
                                                       
                                                    </span>
                                                    <span class="text-6xl mt-4 font-black block uppercase tracking-wide text-white">
                                                       
                                                    <CountUp end={500}duration={10} /></span>
                                                        <div className='mt-5'><span class="text-xl mt-10 text-white font-semibold">+ Happy Clients</span></div>
                                                    
                                                </div>
                                                <div class="mr-10 p-10 text-center bg-banner">
                                                    <span class="text-8xl font-bold block uppercase tracking-wide text-white -mt-3">
                                                        <div class="avatar">
                                                            <div class="w-20 rounded">
                                                                <img src="https://i.ibb.co/RgtkVH7/2.png" alt=''/>
                                                            </div>
                                                        </div>
                                                       
                                                    </span>
                                                    <span class="text-6xl mt-4 font-black block uppercase tracking-wide text-white">
                                                       
                                                    <CountUp end={190} duration={10}/></span>
                                                        <div className='mt-5'><span class="text-xl mt-10 text-white font-semibold">+ Countries</span></div>
                                                    
                                                </div>
                                                <div class="mr-10 p-10 text-center bg-banner">
                                                    <span class="text-8xl font-bold block uppercase tracking-wide text-white -mt-3">
                                                        <div class="avatar">
                                                            <div class="w-20 rounded">
                                                                <img src="https://i.ibb.co/m6XN0T7/3.png" alt=''/>
                                                            </div>
                                                        </div>
                                                      
                                                    </span>
                                                    <span class="text-6xl mt-4 font-black block uppercase tracking-wide text-white">
                                                     
                                                    <CountUp end={620} duration={10}/></span>
                                                        <div className='mt-5'><span class="text-xl mt-10 text-white font-semibold">+ Immigrations</span></div>
                                                    
                                                </div>
                                                <div class="mr-10 p-10 text-center bg-banner">
                                                    <span class="text-8xl font-bold block uppercase tracking-wide text-white -mt-3">
                                                        <div class="avatar">
                                                            <div class="w-16 rounded">
                                                                <img src="https://i.ibb.co/wzbhLqt/4.png" alt=''/>
                                                            </div>
                                                        </div>
                                                      
                                                    </span>
                                                    <span class="text-6xl mt-4 font-black block uppercase tracking-wide text-white">
                                                      
                                                    <CountUp end={50} duration={10}/></span>
                                                        <div className='mt-5'><span class="text-xl mt-10 text-white font-semibold">+ Win Awards</span></div>
                                                    
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Stak;