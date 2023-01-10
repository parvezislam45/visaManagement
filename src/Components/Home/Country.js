import React from 'react';
import Slider from 'react-slick';
import { country } from '../Data3';

const Country = () => {
    const settings = {
        
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    gap: 5
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='mt-24'>
            <h1 className='text-xl font-bold text-center text-red-500'>COUNTRY</h1>
            <h2 className='text-5xl font-black text-center text-black'>Choose Your<span className='text-red-600'> Country</span></h2>
            <div className='mx-20 mt-8'>
                <Slider {...settings}>
                    {country.map((item) => (
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure class="px-10 pt-10">
                                <img src={item.img} alt="Shoes" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <div class="avatar ">
                                    <div class="w-20 rounded-xl items-center -mt-20 border-4 border-white">
                                        <img src={item.image} alt='david' />
                                    </div>
                                </div>
                                <h2 class="card-title">{item.title}</h2>
                                <p>There are Many Variations of Passages but the Majority have suffered Alteration in some From by Injected humour or Randomised Words</p>
                                <div class="card-actions">
                                    <button type="button" class="text-black bg-white hover:text-red-600 hover:bg-white font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center">
                                        Read More
                                        <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Country;