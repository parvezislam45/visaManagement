import React from 'react';

const FreeConsulation = () => {
    return (
        <div className='mt-40'>
            <div class="w-full bg-center bg-cover h-[40rem]" style={{
                backgroundImage: `url("https://thumbs.dreamstime.com/b/banner-smiling-telemarketing-asian-women-working-call-center-office-banner-smiling-telemarketing-asian-woman-179948933.jpg")`
            }}>
                <div class="px-6 py-12 lg:py-24 md:px-12 text-center lg:text-left">
                    <div class="container mx-auto xl:px-32 text-gray-800">
                        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
                            <div class="mt-12 lg:mt-0">


                            </div>
                            <div class="relative -mt-24">
                                <div class="block rounded-lg shadow-lg choose px-6 py-12 md:px-12">
                                    <h1 className='text-white font-bold text-4xl text-center'>Get Free Consultation</h1>
                                    <p className='text-white font-semibold text-sm text-center mt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <form>
                                        <div class="grid md:grid-cols-2 md:gap-6 mt-8">
                                            <div class="mb-6">
                                                <input type="text" class="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Name" />
                                            </div>
                                            <div class="mb-6">
                                                <input type="text" class="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div class="grid md:grid-cols-2 md:gap-6">
                                            <div class="mb-6">
                                                <select id="countries" class="block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                    <option selected>Select Visa</option>
                                                    <option value="US">Hajj & Umrra Visa</option>
                                                    <option value="CA">Business Visa</option>
                                                    <option value="FR">Student Visa</option>
                                                    <option value="DE">Job Seeker Visa</option>
                                                    <option value="DE">Tourist Visa</option>
                                                    <option value="DE">Medical Visa</option>
                                                    <option value="DE">Transit Visa</option>
                                                </select>
                                               
                                            </div>
                                            <div class="mb-6">
                                            <select id="countries" class="block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                    <option selected>Select Country</option>
                                                    <option value="US">Soudia Arab</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">United Kingdom</option>
                                                    <option value="FR">Australia</option>
                                                    <option value="DE">Canada</option>
                                                    <option value="DE">Singapur</option>
                                                </select>
                                            </div>
                                        </div>
                                        <textarea class="textarea textarea-bordered w-full py-8" placeholder="Your Massage"></textarea>
                                        <div className='items-start'>
                                            <button type="button" class="text-white bg-red-500 hover:bg-blue-800 rounded-xl text-md font-bold px-5 py-2.5 text-center inline-flex items-center mt-8">
                                                GET QUETE
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-circle-fill w-9 h-9 ml-3 -mr-3" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" fill="white"></path> </svg>
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FreeConsulation;