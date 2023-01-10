import React from "react";
import { Link } from "react-router-dom";

const Country = () => {
  return (
    <div>
         <div
          class="w-full bg-center bg-cover h-[30rem]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzdHJhbGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')`,
          }}
        >
          <div class="flex items-center justify-center w-full h-full bg-gray-900/10">
            <div class="text-center">
              <h1 class="text-5xl font-black text-white lg:text-5xl">
                <span class="text-red-600">All Country</span>
              </h1>
              <div className="flex mt-3 justify-center">
                <div>
                  <Link to="/">
                    <div className="flex justify-between">
                      <figure>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          class="bi bi-house-door-fill w-5"
                          viewBox="0 0 16 16"
                        >
                          {" "}
                          <path
                            d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
                            fill="white"
                          ></path>{" "}
                        </svg>
                      </figure>
                      <p class="text-md font-black mx-2 text-white hover:text-red-600">
                        Home
                      </p>
                    </div>
                  </Link>
                </div>
                <div>
                  <div className="flex justify-between">
                    <figure>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="bi bi-chevron-double-right w-5"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path
                          fill-rule="evenodd"
                          d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                          fill="white"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                          fill="white"
                        ></path>{" "}
                      </svg>
                    </figure>
                    <p class="text-md font-black mx-2 text-white">All Country</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
<div className="container mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 mt-20">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="https://live.themewild.com/visapos/assets/img/country/06.jpg" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <div class="avatar ">
            <div class="w-20 rounded-xl items-center -mt-20 border-4 border-white">
              <img src="https://live.themewild.com/visapos/assets/img/country/newzealand.jpg" alt="david" />
            </div>
          </div>
          <h2 class="card-title">New-Zealand</h2>
          <p>
            There are Many Variations of Passages but the Majority have suffered
            Alteration in some From by Injected humour or Randomised Words
          </p>
          <div class="card-actions">
            <button
              type="button"
              class="text-black bg-white hover:text-red-600 hover:bg-white font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
            >
              Read More
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="https://live.themewild.com/visapos/assets/img/country/01.jpg" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <div class="avatar ">
            <div class="w-20 rounded-xl items-center -mt-20 border-4 border-white">
              <img src="https://live.themewild.com/visapos/assets/img/country/usa.jpg" alt="david" />
            </div>
          </div>
          <h2 class="card-title">United States</h2>
          <p>
            There are Many Variations of Passages but the Majority have suffered
            Alteration in some From by Injected humour or Randomised Words
          </p>
          <div class="card-actions">
            <button
              type="button"
              class="text-black bg-white hover:text-red-600 hover:bg-white font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
            >
              Read More
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="https://live.themewild.com/visapos/assets/img/country/02.jpg" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <div class="avatar ">
            <div class="w-20 rounded-xl items-center -mt-20 border-4 border-white">
              <img src="https://live.themewild.com/visapos/assets/img/country/australia.jpg" alt="david" />
            </div>
          </div>
          <h2 class="card-title">Australia</h2>
          <p>
            There are Many Variations of Passages but the Majority have suffered
            Alteration in some From by Injected humour or Randomised Words
          </p>
          <div class="card-actions">
            <button
              type="button"
              class="text-black bg-white hover:text-red-600 hover:bg-white font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
            >
              Read More
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="https://live.themewild.com/visapos/assets/img/country/03.jpg" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <div class="avatar ">
            <div class="w-20 rounded-xl items-center -mt-20 border-4 border-white">
              <img src="https://live.themewild.com/visapos/assets/img/country/uk.jpg" alt="david" />
            </div>
          </div>
          <h2 class="card-title">United Kingdom</h2>
          <p>
            There are Many Variations of Passages but the Majority have suffered
            Alteration in some From by Injected humour or Randomised Words
          </p>
          <div class="card-actions">
            <button
              type="button"
              class="text-black bg-white hover:text-red-600 hover:bg-white font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
            >
              Read More
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="https://live.themewild.com/visapos/assets/img/country/04.jpg" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <div class="avatar ">
            <div class="w-20 rounded-xl items-center -mt-20 border-4 border-white">
              <img src="https://live.themewild.com/visapos/assets/img/country/canada.jpg" alt="david" />
            </div>
          </div>
          <h2 class="card-title">Canada</h2>
          <p>
            There are Many Variations of Passages but the Majority have suffered
            Alteration in some From by Injected humour or Randomised Words
          </p>
          <div class="card-actions">
            <button
              type="button"
              class="text-black bg-white hover:text-red-600 hover:bg-white font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
            >
              Read More
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="https://live.themewild.com/visapos/assets/img/country/05.jpg" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <div class="avatar ">
            <div class="w-20 rounded-xl items-center -mt-20 border-4 border-white">
              <img src="https://live.themewild.com/visapos/assets/img/country/singapore.jpg" alt="david" />
            </div>
          </div>
          <h2 class="card-title">Singapore</h2>
          <p>
            There are Many Variations of Passages but the Majority have suffered
            Alteration in some From by Injected humour or Randomised Words
          </p>
          <div class="card-actions">
            <button
              type="button"
              class="text-black bg-white hover:text-red-600 hover:bg-white font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
            >
              Read More
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Country;
