import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className="text-center text-3xl text-red-600 font-black mt-10">About Us</h1>
            <div class=" min-h-screen bg-white mt-6">
                <div class="hero-content flex-col justify-between lg:flex-row mx-auto">
                    <img src="https://i.ibb.co/16rTTv1/Screenshot-2022-12-29-155237.png" class="md:w-1/2 h-screen rounded-lg" alt=''/>
                    <div className=''>
                    <h1 class="text-xl font-black mt-10 text-red-600">About Us</h1>
                        <h1 class="text-5xl font-black mt-3">We Provide Immigration<br /><span className='text-red-600'> And Visa</span> Services</h1>
                        <div class="description w-full sm: md:w-2/3 mt-5 text-gray-700 text-md font-medium">
                            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </div>
                        <p class="flex items-start -mx-2 mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check-circle-fill w-6 h-6 mx-2" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" fill="red"></path> </svg>
                            <span class="mx-2 text-gray-700 text-md">Take a look at our round up of the best shows</span>
                        </p>
                        <p class="flex items-start -mx-2 mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check-circle-fill w-6 h-6 mx-2" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" fill="red"></path> </svg>
                            <span class="mx-2 text-gray-700 text-md">Take a look at our round up of the best shows</span>
                        </p>
                        <p class="flex items-start -mx-2 mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check-circle-fill w-6 h-6 mx-2" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" fill="red"></path> </svg>
                            <span class="mx-2 text-gray-700 text-md">Take a look at our round up of the best shows</span>
                        </p>
                        <button type="button" class="text-white bg-red-500 hover:bg-blue-800 rounded-xl text-md font-bold px-5 py-2.5 text-center inline-flex items-center mt-8">
                            DISCOVER MORE
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-circle-fill w-9 h-9 ml-3 -mr-3" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" fill="white"></path> </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;