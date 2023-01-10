import React from 'react';

const Skills = () => {
    return (
        <div>
            <div class="container flex flex-col px-6 py-10 mx-auto lg:flex-row gap-20">
                <div class="flex items-center justify-between mx-auto">
                    <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://live.themewild.com/visapos/assets/img/skill/01.jpg" alt="glasses" />
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-4xl font-black text-gray-800">
                            We Offers the <span className='text-red-600'>Best Immigration</span>Service
                        </h1>
                        <div class="description w-full mt-5 text-gray-700 text-md font-medium tracking-wide">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </div>
                        <dl className='mt-10'>
                            <dt class="text-md font-black text-gray-500">STUDENT CONSULTENCY</dt>
                            <dd class="flex items-center mb-3 mt-2">
                                <div class="w-full bg-gray-200 rounded h-2.5 mr-2">
                                    <div class="bg-red-600 h-2.5 rounded"style={{"width" : "85%"}}></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500">85%</span>
                            </dd>
                        </dl>
                        <dl className='mt-5'>
                            <dt class="text-md font-black text-gray-500">IMMIGRATION CONSULTENCY</dt>
                            <dd class="flex items-center mb-3 mt-2">
                                <div class="w-full bg-gray-200 rounded h-2.5 mr-2">
                                    <div class="bg-red-600 h-2.5 rounded"style={{"width" : "65%"}}></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500">65%</span>
                            </dd>
                        </dl>
                        <dl className='mt-5'>
                            <dt class="text-md font-black text-gray-500">TOURIST CONSULTENCY</dt>
                            <dd class="flex items-center mb-3 mt-2">
                                <div class="w-full bg-gray-200 rounded h-2.5 mr-2">
                                    <div class="bg-red-600 h-2.5 rounded"style={{"width" : "75%"}}></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500">75%</span>
                            </dd>
                        </dl>
                        <button type="button" class="text-white bg-red-500 hover:bg-blue-800 rounded-xl text-md font-bold px-5 py-2.5 text-center inline-flex items-center mt-20">
                            LEARN MORE
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-circle-fill w-9 h-9 ml-3 -mr-3" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" fill="white"></path> </svg>
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Skills;