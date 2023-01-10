import React from 'react';

const VisaCard = () => {
    return (
        <div className='mt-10'>
            <div class="flex items-center justify-center">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    <div class="relative bg-sky-900 py-6 px-6 rounded-2xl w-96 my-4 shadow-xl">
                        <div class="px-5 py-4 bg-sky-900 shadow rounded-lg">
                            <div class=" mb-2">
                                <img class="w-20 h-20 border-4 rounded-lg border-sky-500 bg-red-600" src="https://www.invest-visa.com/img/Icons/contract.png" alt='' />

                            </div>
                            <h1 className='text-2xl font-black text-white'>Online Visa Application</h1>
                            <p class="text-white d leading-snug md:leading-normal mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                            
                        </div>
                    </div>
                    <div class="relative bg-red-600 py-6 px-6 rounded-2xl w-96 my-4 shadow-xl">
                        <div class="px-5 py-4 bg-red-600 shadow rounded-lg">
                            <div class=" mb-2">
                                <img class="w-20 h-20 border-4 rounded-lg border-sky-500 bg-black" src="https://eoev6uz5obe.exactdn.com/wp-content/uploads/2021/12/services-investor-visas.png?strip=all&lossy=1&ssl=1" alt='' />

                            </div>
                            <h1 className='text-2xl font-black text-white'> Visa Information</h1>
                            <p class="text-white d leading-snug md:leading-normal mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                            
                        </div>
                    </div>
                    <div class="relative bg-sky-900 py-6 px-6 rounded-2xl w-96 my-4 shadow-xl">
                        <div class="px-5 py-4 bg-sky-900 shadow rounded-lg">
                            <div class=" mb-2">
                                <img class="w-20 h-20 border-4 rounded-lg border-sky-500 bg-amber-900" src="https://longvisionedu.com.np/wp-content/uploads/2021/04/visa-1.png" alt='' />

                            </div>
                            <h1 className='text-2xl font-black text-white'>Immigration Resources</h1>
                            <p class="text-white d leading-snug md:leading-normal mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                            
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default VisaCard;