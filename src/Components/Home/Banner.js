import React from 'react';
import Slider from 'react-slick';
import { cardSlider } from '../../Data';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
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
            <h1 className='text-xl font-bold text-center text-red-500'>Coaching</h1>
            <h2 className='text-5xl font-black text-center text-black'>Best Coaching <span className='text-red-600'>For Us</span></h2>
            <div className='mx-10 mt-8'>
                <Slider {...settings}>
                    {cardSlider.map((item) => (
                        <div class="w-96 ">
                            <div class="card w-96 bg-white shadow-md mt-7">
                                <figure class="px-3">
                                    <img src={item.img} alt="Shoes" class="rounded-lg h-64" />
                                </figure>
                                <div class="card-body items-start -mt-2">
                                    <div class="card card-side bg-base-100 gap-6">
                                        <div className='flex justify-between'>
                                            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74iXIpzqCgsfWlfV2nGFZM-XYZocXnarGbtu9bOnWUzHP1cHQ_C5GLgVvPkuO10oYNME&usqp=CAU" alt="Movie" className='w-6' /></figure>
                                            <p class="text-md font-medium mx-2">03 Month</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <figure><img src="https://www.vodafone.ua/storage/editor/fotos/2763c1ea2fc839a43d38945a257920a2_1586439518.svg" alt="Movie" className='w-6' /></figure>
                                            <p class="text-md font-medium mx-2">25 Classes</p>
                                        </div>


                                    </div>
                                    <h2 class="card-title font-black mt-2">{item.title}</h2>
                                    <p className='mt-1'>There are many variations of passages available but the majority have suffered to the alteration</p>
                                    <div className='text-start'>
                                        <button type="button" class="text-white bg-red-500 hover:bg-blue-800 rounded-xl text-md font-bold px-5 py-2.5 text-center inline-flex items-center mt-6">
                                            READ MORE
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-circle-fill w-9 h-9 ml-3 -mr-3" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" fill="white"></path> </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Banner;