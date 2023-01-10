import React from "react";
import { Link } from "react-router-dom";

const Visa = () => {
  return (
    <div>
      <div
        class="w-full bg-center bg-cover h-[30rem]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1530469525856-cf37954301f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
        }}
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-900/10">
          <div class="text-center">
            <h1 class="text-5xl font-black text-white lg:text-5xl">
              <span class="text-red-600">All Visa</span>
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
                  <p class="text-md font-black mx-2 text-white">All Visa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container flex flex-col justify-center p-4 mx-auto mt-10"
        bis_skin_checked="1"
      >
        <div
          class="grid grid-cols-1 mx-auto gap-8 lg:grid-cols-3 sm:grid-cols-2"
          bis_skin_checked="1"
        >
          <div
            class="card w-96 bg-white shadow-xl mt-7"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <figure class="px-7 -mt-8">
              <img
                src="https://live.themewild.com/visapos/assets/img/service/01.jpg"
                alt="Shoes"
                class="rounded-lg h-64 -mt-10"
              />
            </figure>
            <div class="card-body items-start">
              <h2 class="card-title">Business Visa</h2>
              <p>
                There are many variations of passages available but the majority
                have suffered to the alteration in some form by injected.
              </p>
              <div className="text-start">
                <button
                  type="button"
                  class="text-red-600 bg-white hover:bg-red-600 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border-solid border-2 border-red-600"
                >
                  Learn More
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
          <div class="card w-96 bg-white shadow-xl mt-7">
            <figure class="px-7 -mt-8">
              <img
                src="https://live.themewild.com/visapos/assets/img/service/02.jpg"
                alt="Shoes"
                class="rounded-lg h-64 -mt-10"
              />
            </figure>
            <div class="card-body items-start">
              <h2 class="card-title">Student Visa</h2>
              <p>
                There are many variations of passages available but the majority
                have suffered to the alteration in some form by injected.
              </p>
              <div className="text-start">
                <button
                  type="button"
                  class="text-red-600 bg-white hover:bg-red-600 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border-solid border-2 border-red-600"
                >
                  Learn More
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
          <div class="card w-96 bg-white shadow-xl mt-7" data-aos="fade-right">
            <figure class="px-7 -mt-8">
              <img
                src="https://live.themewild.com/visapos/assets/img/service/03.jpg"
                alt="Shoes"
                class="rounded-lg h-64 -mt-10"
              />
            </figure>
            <div class="card-body items-start">
              <h2 class="card-title">Job Seeker Visa</h2>
              <p>
                There are many variations of passages available but the majority
                have suffered to the alteration in some form by injected.
              </p>
              <div className="text-start">
                <button
                  type="button"
                  class="text-red-600 bg-white hover:bg-red-600 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border-solid border-2 border-red-600"
                >
                  Learn More
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
          <div class="card w-96 bg-white shadow-xl mt-7">
            <figure class="px-7 -mt-8">
              <img
                src="https://live.themewild.com/visapos/assets/img/service/04.jpg"
                alt="Shoes"
                class="rounded-lg h-64 -mt-10"
              />
            </figure>
            <div class="card-body items-start">
              <h2 class="card-title">Tourist Visa</h2>
              <p>
                There are many variations of passages available but the majority
                have suffered to the alteration in some form by injected.
              </p>
              <div className="text-start">
                <button
                  type="button"
                  class="text-red-600 bg-white hover:bg-red-600 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border-solid border-2 border-red-600"
                >
                  Learn More
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
          <div class="card w-96 bg-white shadow-xl mt-7">
            <figure class="px-7 -mt-8">
              <img
                src="https://live.themewild.com/visapos/assets/img/service/05.jpg"
                alt="Shoes"
                class="rounded-lg h-64 -mt-10"
              />
            </figure>
            <div class="card-body items-start">
              <h2 class="card-title">Migrate Visa</h2>
              <p>
                There are many variations of passages available but the majority
                have suffered to the alteration in some form by injected.
              </p>
              <div className="text-start">
                <button
                  type="button"
                  class="text-red-600 bg-white hover:bg-red-600 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border-solid border-2 border-red-600"
                >
                  Learn More
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
          <div class="card w-96 bg-white shadow-xl mt-7">
            <figure class="px-7 -mt-8">
              <img
                src="https://live.themewild.com/visapos/assets/img/service/06.jpg"
                alt="Shoes"
                class="rounded-lg h-64 -mt-10"
              />
            </figure>
            <div class="card-body items-start">
              <h2 class="card-title">Transit Visa</h2>
              <p>
                There are many variations of passages available but the majority
                have suffered to the alteration in some form by injected.
              </p>
              <div className="text-start">
                <button
                  type="button"
                  class="text-red-600 bg-white hover:bg-red-600 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border-solid border-2 border-red-600"
                >
                  Learn More
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
    </div>
  );
};

export default Visa;
