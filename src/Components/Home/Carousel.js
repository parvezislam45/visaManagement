import React from 'react';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Carousel.css"

const content = [
    {
        title: "We Are Trusted Visa &",
        head: "Immigration Agency",
        description:
            "There are Many Variations of Passages Available but The Majority Have Suffered Alteration in Some From by Injected Humour or Randomised words .",
        text: "",
        button: "Read More",
        image: "https://images.unsplash.com/photo-1525799165-f95e2ccbb152?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        user: "Luan Gjokaj",
        userProfile: "https://i.imgur.com/JSW6mEk.png"
    },
    {
        title: "We Are Trusted Visa &",
        head: "Immigration Agency",
        description:
            "There are Many Variations of Passages Available but The Majority Have Suffered Alteration in Some From by Injected Humour or Randomised words .",
        text: "Some From by Injected Humour or Randomised words .",
        button: "Discover",
        image: "https://cdn-japantimes.com/wp-content/uploads/2020/04/np_file_9020.jpeg",
        user: "Erich Behrens",
        userProfile: "https://i.imgur.com/0Clfnu7.png"
    },
    {
        title: "We Are Trusted Visa &",
        head: "Immigration Agency",
        description:
            "There are Many Variations of Passages Available but The Majority Have Suffered Alteration in Some From by Injected Humour or Randomised words .",
        text: "Some From by Injected Humour or Randomised words .",
        image: "https://aerocorner.com/wp-content/uploads/2019/11/Passport-and-boarding-pass.jpg",
    }
];

const Carousel = () => {
    return (
        <div>
            <Slider className="slider-wrapper" autoplay={1000}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                        <div class="max-w-xl">
                                <h1 class="text-5xl font-black text-white text-start">{item.title}</h1>
                                <h1 class="text-5xl font-black text-red-500 text-start mt-3">{item.head}</h1>

                                <p class="mt-4 text-start text-md font-semibold text-white">{item.description}</p>

                                <div class="flex justify-center gap-10 mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                    <button type="button" class="text-white bg-red-600 hover:bg-blue-800 rounded-lg text-md font-bold px-8 py-5 h-14 text-center inline-flex items-center">
                                        Contract Us
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-circle-fill w-7 h-7 ml-3 -mr-3" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" fill="white"></path> </svg>
                                    </button>
                                    <button type="button" class="text-white bg-slate-900 hover:bg-blue-800 rounded-lg text-md font-bold px-8 py-5 h-14 text-center inline-flex items-center">
                                        About Us
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-circle-fill w-7 h-7 ml-3 -mr-3" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" fill="white"></path> </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;