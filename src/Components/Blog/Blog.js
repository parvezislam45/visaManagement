import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      {/* ----------------------- Banner -------------------- */}
      <div
        class="w-full bg-center bg-cover h-[28rem]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1525799165-f95e2ccbb152?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
        }}
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-900/10">
          <div class="text-center">
            <h1 class="text-3xl font-semibold text-white lg:text-4xl">
              <span class="text-red-600">Our Blog</span>
            </h1>
            <div className="flex mt-3">
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
                  <p class="text-md font-black mx-2 text-white">Our Blog</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------- Banner -------------------- */}

      <section class="bg-white">
        <div class="container px-6 py-10 mx-auto">
          <div class="lg:flex lg:-mx-6">
            <div class="lg:w-2/3 lg:px-10">
              <img
                class="object-cover object-center w-full h-auto rounded-xl mt-5"
                src="https://live.themewild.com/visapos/assets/img/blog/single.jpg"
                alt=""
              />
              <div className="flex justify-between">
                <div>
                  <div class="card card-side bg-base-100 gap-6 mt-8">
                    <div className="flex justify-between">
                      <figure>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaAYeXtvnmWzmGwB1xKZ5oE3ksmuSbCKxGw&usqp=CAU"
                          alt="Movie"
                          className="w-6"
                        />
                      </figure>
                      <p class="text-md font-medium mx-2">Aurthohin Parvez</p>
                    </div>
                    <div className="flex justify-between">
                      <figure>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUT9G-E7ej7Fzo6JqD8TXzYmlHSSmT7pZ8vib_SMx9eFXmrPK5PlG63jA2ASNJx6nXNMk&usqp=CAU"
                          alt="Movie"
                          className="w-6"
                        />
                      </figure>
                      <p class="text-md font-medium mx-2">3.2k Comments</p>
                    </div>
                    <div className="flex justify-between">
                      <figure>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-HLMHuijpAlUTt2qKO9EK56BG4AXTr9dI8IHchNYHWsc9NJEmgsxvA8RlcPhRtbc1a0&usqp=CAU"
                          alt="Movie"
                          className="w-6"
                        />
                      </figure>
                      <p class="text-md font-medium mx-2">1.4k Like</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-end mt-8">
                    <figure>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKJJPcKqamuYASVJbAdL7Wdetw6JYS2LSyCRkaMdo65S8nemukXJuaY4mJL-sREFx8kU&usqp=CAU"
                        alt="Movie"
                        className="w-6"
                      />
                    </figure>
                    <p class="text-md font-medium mx-2">Share</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h5 class="mt-6 text-2xl font-black tracking-tight text-gray-900 text-start">
                  It is a Long Established Fact That a Reader
                </h5>
                <p class=" mt-5 font-normal text-gray-700 dark:text-gray-400 text-start text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. But I must explain to you how all
                  this mistaken idea of denouncing pleasure and praising pain
                  was born and I will give you a complete account of the system,
                  and expound the actual teachings of the great explorer of the
                  truth, the master-builder of human happiness. No one rejects,
                  dislikes, or avoids pleasure itself, because it is pleasure,
                  but because those who do not know how to pursue pleasure
                  rationally encounter consequences that are extremely painful.
                </p>
              </div>
              <div class="hero h-48 bg-gray-200 mt-10 border-l-8 border-red-600 ">
                <div class="hero-content text-start ">
                  <div class="">
                    <p class=" text-lg mx-5">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution.
                    </p>
                    <div className="flex">
                      <div>
                        <hr className="border-b-2 border-black w-14 mx-5 mt-5"></hr>
                      </div>
                      <div>
                        <h1 className="mt-2 font-bold text-lg">David Parvez</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class=" mt-5 font-normal text-gray-700 dark:text-gray-400 text-start text-lg">
                In a free hour when our power of choice is untrammelled and when
                nothing prevents our being able to do what we like best, every
                pleasure is to be welcomed and every pain avoided. But in
                certain circumstances and owing to the claims of duty or the
                obligations of business it will frequently occur that pleasures
                have to be repudiated and annoyances accepted. The wise man
                therefore always holds in these matters to this principle of
                selection.
              </p>
              <div className="grid grid-cols-1 mx-auto gap-5 md:grid-cols-2 mt-5">
                <div class="">
                  <figure>
                    <img
                      className="rounded-lg"
                      src="https://live.themewild.com/visapos/assets/img/blog/01.jpg"
                      alt="Shoes"
                    />
                  </figure>
                </div>
                <div class="">
                  <figure>
                    <img
                      className="rounded-lg"
                      src="https://live.themewild.com/visapos/assets/img/blog/02.jpg"
                      alt="Shoes"
                    />
                  </figure>
                </div>
              </div>
              <p class=" mt-5 font-normal text-gray-700 dark:text-gray-400 text-start text-lg">
                Power of choice is untrammelled and when nothing prevents our
                being able to do what we like best, every pleasure is to be
                welcomed and every pain avoided. But in certain circumstances
                and owing to the claims of duty or the obligations of business
                it will frequently occur that pleasures have to be repudiated
                and annoyances accepted. The wise man therefore always holds in
                these matters to this principle of selection.
              </p>
              <hr class="my-6 border-gray-400 sm:mx-auto lg:my-8" />
              <div class="flex justify-start mx-12 mt-8 gap-4">
                <h1 className="font-bold text-lg mt-1">Tags :</h1>
                <button
                  type="button"
                  class="text-black bg-gray-200 hover:text-white hover:bg-red-600 font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
                >
                  Immigration
                </button>
                <button
                  type="button"
                  class="text-black bg-gray-200 hover:text-white hover:bg-red-600 font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
                >
                  Visa
                </button>
                <button
                  type="button"
                  class="text-black bg-gray-200 hover:text-white hover:bg-red-600 font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
                >
                  Country
                </button>
              </div>
              <h5 class="mt-16 text-2xl font-black tracking-tight text-gray-900 text-start">
                Comments (20)
              </h5>

              <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                <img
                  class="w-20 h-20 mx-auto rounded-full mt-10"
                  src="https://live.themewild.com/visapos/assets/img/blog/com-1.jpg"
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <div class="space-y-2 mt-4 text-center sm:mt-0 sm:text-left">
                  <div>
                    <h6 class="text-lg font-semibold leading-none mt-2">
                      Jesse Sinkler
                    </h6>
                    <div className="flex mt-2">
                      <figure>
                        <img
                          src="https://static.vecteezy.com/system/resources/thumbnails/000/417/209/small/13_-_3_-_Clock.jpg"
                          alt="Movie"
                          className="w-5"
                        />
                      </figure>
                      <p class="text-sm font-medium mx-1">20 August, 2021</p>
                    </div>
                  </div>
                  <p class="text-gray-600 text-md">
                    There are many variations of passages the majority have
                    suffered in some injected humour or randomised words which
                    don't look even slightly believable.
                  </p>
                  <div className="flex mt-2">
                    <figure>
                      <img
                        src="https://icons.iconarchive.com/icons/icons8/ios7/256/Arrows-Left-2-icon.png"
                        alt="Movie"
                        className="w-7"
                      />
                    </figure>
                    <p class="text-md font-bold mx-1">Replay</p>
                  </div>
                </div>
              </div>
              <div class="p-6 border mx-14 border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-4 sm:p-8">
                <img
                  class="w-20 h-20 mx-auto rounded-full mt-10"
                  src="https://live.themewild.com/visapos/assets/img/blog/com-2.jpg"
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <div class="space-y-2 mt-4 mx-5 text-center sm:mt-0 sm:text-left">
                  <div>
                    <h6 class="text-lg font-semibold leading-none mt-2">
                      Daniel Wellman
                    </h6>
                    <div className="flex mt-2">
                      <figure>
                        <img
                          src="https://static.vecteezy.com/system/resources/thumbnails/000/417/209/small/13_-_3_-_Clock.jpg"
                          alt="Movie"
                          className="w-5"
                        />
                      </figure>
                      <p class="text-sm font-medium mx-1">20 August, 2021</p>
                    </div>
                  </div>
                  <p class="text-gray-600 text-md">
                    There are many variations of passages the majority have
                    suffered in some injected humour or randomised words which
                    don't look even slightly believable.
                  </p>
                  <div className="flex mt-2">
                    <figure>
                      <img
                        src="https://icons.iconarchive.com/icons/icons8/ios7/256/Arrows-Left-2-icon.png"
                        alt="Movie"
                        className="w-7"
                      />
                    </figure>
                    <p class="text-md font-bold mx-1">Replay</p>
                  </div>
                </div>
              </div>
              <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                <img
                  class="w-20 h-20 mx-auto rounded-full mt-10"
                  src="https://live.themewild.com/visapos/assets/img/blog/com-3.jpg"
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <div class="space-y-2 mt-4 text-center sm:mt-0 sm:text-left">
                  <div>
                    <h6 class="text-lg font-semibold leading-none mt-2">
                      Kenneth Evans
                    </h6>
                    <div className="flex mt-2">
                      <figure>
                        <img
                          src="https://static.vecteezy.com/system/resources/thumbnails/000/417/209/small/13_-_3_-_Clock.jpg"
                          alt="Movie"
                          className="w-5"
                        />
                      </figure>
                      <p class="text-sm font-medium mx-1">20 August, 2021</p>
                    </div>
                  </div>
                  <p class="text-gray-600 text-md">
                    There are many variations of passages the majority have
                    suffered in some injected humour or randomised words which
                    don't look even slightly believable.
                  </p>
                  <div className="flex mt-2">
                    <figure>
                      <img
                        src="https://icons.iconarchive.com/icons/icons8/ios7/256/Arrows-Left-2-icon.png"
                        alt="Movie"
                        className="w-7"
                      />
                    </figure>
                    <p class="text-md font-bold mx-1">Replay</p>
                  </div>
                </div>
              </div>
              <section class="max-w-4xl p-6 mx-auto bg-gray-100 rounded-md shadow-md">
                <h2 class="text-lg font-semibold text-gray-700 capitalize">
                Leave A Comment
                </h2>

                <form>
                  <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <input
                        id="username"
                        type="text"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md h-12 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                        placeholder="Your Name*"
                      />
                    </div>

                    <div>
                      <input
                        id="username"
                        type="text"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md h-12 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                        placeholder="Your Email*"
                      />
                    </div>
                  </div>
                  <textarea
                    class="textarea border-gray-400 mt-4 w-full h-36"
                    placeholder="Your Comment*"
                  ></textarea>

                  <div class="">
                    <button
                      type="button"
                      class="text-white bg-red-600 hover:bg-blue-800 rounded-xl text-sm font-black px-3.5 py-3 text-center inline-flex items-center mt-6"
                    >
                      Post Comment
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="bi bi-telegram w-8 h-8 ml-3 -mr-0 "
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                          fill="white"
                        ></path>{" "}
                      </svg>
                    </button>
                  </div>
                </form>
              </section>
            </div>
            <div class="mt-6 lg:w-2/5 lg:mt-0 lg:px-10">
              <div>
                <div class="  bg-gray-100  h-48" bis_skin_checked="1">
                  <div
                    class="flex items-center justify-between"
                    bis_skin_checked="1"
                  >
                    <h2 className="mx-12 text-md  font-black mt-10 border-b-4 border-red-600">
                      Seacrch
                    </h2>
                  </div>
                  <div class="flex-1 items-center mt-7" bis_skin_checked="1">
                    <div class="relative w-full">
                      <input
                        type="text"
                        id="voice-search"
                        class="bg-gray-50 border mx-auto border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 pl-10 p-3"
                        placeholder="Search Here"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="  bg-gray-100 mt-10" bis_skin_checked="1">
                  <div
                    class="flex items-center justify-between"
                    bis_skin_checked="1"
                  >
                    <h2 className="mx-12 text-xl  font-black mt-3 border-b-4 border-red-600">
                      Visa Category
                    </h2>
                  </div>
                  <div class="flex-1 items-center" bis_skin_checked="1">
                    <ul class="pt-2 pb-4 space-y-1 text-sm mx-8">
                      <li class="rounded-sm">
                        <div className="flex justify-between">
                          <div>
                            <a
                              rel="noopener noreferrer"
                              href="/"
                              class="flex items-center p-2 space-x-2 rounded-md mt-4"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="bi bi-chevron-double-right w-3 h-3 text-red-600"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <path
                                  fill-rule="evenodd"
                                  d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                                  id="mainIconPathAttribute"
                                  stroke-width="1.2"
                                  stroke="#ff0000"
                                ></path>{" "}
                                <path
                                  fill-rule="evenodd"
                                  d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                                  id="mainIconPathAttribute"
                                  stroke="#ff0000"
                                ></path>{" "}
                              </svg>
                              <span className="font-black">
                                Hajj & Umrra Visa
                              </span>
                            </a>
                          </div>
                          <div className="mt-6">
                            <span className="font-bold text-md">(40)</span>
                          </div>
                        </div>
                      </li>
                      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                      <li class="rounded-sm">
                        <div className="flex justify-between">
                          <div>
                            <a
                              rel="noopener noreferrer"
                              href="/"
                              class="flex items-center p-2 space-x-2 rounded-md mt-4"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="bi bi-chevron-double-right w-3 h-3 text-red-600"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <path
                                  fill-rule="evenodd"
                                  d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                                  id="mainIconPathAttribute"
                                  stroke-width="1.2"
                                  stroke="#ff0000"
                                ></path>{" "}
                                <path
                                  fill-rule="evenodd"
                                  d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                                  id="mainIconPathAttribute"
                                  stroke="#ff0000"
                                ></path>{" "}
                              </svg>
                              <span className="font-black">Business Visa</span>
                            </a>
                          </div>
                          <div className="mt-6">
                            <span className="font-bold text-md">(20)</span>
                          </div>
                        </div>
                      </li>
                      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                      <li class="rounded-sm">
                        <div className="flex justify-between">
                          <div>
                            <a
                              rel="noopener noreferrer"
                              href="/"
                              class="flex items-center p-2 space-x-2 rounded-md mt-4"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="bi bi-chevron-double-right w-3 h-3 text-red-600"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <path
                                  fill-rule="evenodd"
                                  d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                                  id="mainIconPathAttribute"
                                  stroke-width="1.2"
                                  stroke="#ff0000"
                                ></path>{" "}
                                <path
                                  fill-rule="evenodd"
                                  d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                                  id="mainIconPathAttribute"
                                  stroke="#ff0000"
                                ></path>{" "}
                              </svg>
                              <span className="font-black">Student Visa</span>
                            </a>
                          </div>
                          <div className="mt-6">
                            <span className="font-bold text-md">(250)</span>
                          </div>
                        </div>
                      </li>
                      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                      <li class="rounded-sm">
                        <div className="flex justify-between">
                          <div>
                            <a
                              rel="noopener noreferrer"
                              href="/"
                              class="flex items-center p-2 space-x-2 rounded-md mt-4"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="bi bi-chevron-double-right w-3 h-3 text-red-600"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <path
                                  fill-rule="evenodd"
                                  d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                                  id="mainIconPathAttribute"
                                  stroke-width="1.2"
                                  stroke="#ff0000"
                                ></path>{" "}
                                <path
                                  fill-rule="evenodd"
                                  d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                                  id="mainIconPathAttribute"
                                  stroke="#ff0000"
                                ></path>{" "}
                              </svg>
                              <span className="font-black">
                                Job Seeker Visa
                              </span>
                            </a>
                          </div>
                          <div className="mt-6">
                            <span className="font-bold text-md">(70)</span>
                          </div>
                        </div>
                      </li>
                      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                      <li class="rounded-sm">
                        <div className="flex justify-between">
                          <div>
                            <a
                              rel="noopener noreferrer"
                              href="/"
                              class="flex items-center p-2 space-x-2 rounded-md mt-4"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="bi bi-chevron-double-right w-3 h-3 text-red-600"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <path
                                  fill-rule="evenodd"
                                  d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                                  id="mainIconPathAttribute"
                                  stroke-width="1.2"
                                  stroke="#ff0000"
                                ></path>{" "}
                                <path
                                  fill-rule="evenodd"
                                  d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                                  id="mainIconPathAttribute"
                                  stroke="#ff0000"
                                ></path>{" "}
                              </svg>
                              <span className="font-black">Transit Visa</span>
                            </a>
                          </div>
                          <div className="mt-6">
                            <span className="font-bold text-md">(30)</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* --------------------------- Text ----------------- */}

              <div>
                <div class="  bg-gray-100 mt-10" bis_skin_checked="1">
                  <div
                    class="flex items-center justify-between"
                    bis_skin_checked="1"
                  >
                    <h2 className="mx-12 text-md  font-black mt-3 border-b-4 border-red-600">
                      Recent Post
                    </h2>
                  </div>
                  <div class="" bis_skin_checked="1">
                    <div class="flex max-w-md bg-gray-100 mx-8 overflow-hidden">
                      <div
                        class="w-20 h-20 mt-5 bg-cover"
                        style={{
                          backgroundImage: `url('https://live.themewild.com/visapos/assets/img/blog/bs-1.jpg')`,
                        }}
                      ></div>
                      <div class="w-2/3 p-4 justify-center">
                        <h1 class="text-gray-900 font-bold text-md">
                          It is a long established fact
                          <br /> that a reader
                        </h1>
                        <div className="flex justify-start mt-1">
                          <figure>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              class="bi bi-clock w-4"
                              viewBox="0 0 16 16"
                            >
                              {" "}
                              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />{" "}
                              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />{" "}
                            </svg>
                          </figure>
                          <p class="text-sm font-normal mx-2">03 Month, 2022</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex max-w-md mx-8 bg-gray-100  overflow-hidden">
                      <div
                        class="w-20 h-20 mt-5 bg-cover"
                        style={{
                          backgroundImage: `url('https://live.themewild.com/visapos/assets/img/blog/bs-2.jpg')`,
                        }}
                      ></div>
                      <div class="w-2/3 p-4 justify-center">
                        <h1 class="text-gray-900 font-bold text-md">
                          It is a long established fact
                          <br /> that a reader
                        </h1>
                        <div className="flex justify-start mt-1">
                          <figure>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              class="bi bi-clock w-4"
                              viewBox="0 0 16 16"
                            >
                              {" "}
                              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />{" "}
                              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />{" "}
                            </svg>
                          </figure>
                          <p class="text-sm font-normal mx-2">03 Month, 2022</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex max-w-md mx-8 bg-gray-100 overflow-hidden">
                      <div
                        class="w-20 h-20 mt-5 bg-cover"
                        style={{
                          backgroundImage: `url('https://live.themewild.com/visapos/assets/img/blog/bs-3.jpg')`,
                        }}
                      ></div>
                      <div class="w-2/3 p-4 justify-center">
                        <h1 class="text-gray-900 font-bold text-md">
                          It is a long established fact
                          <br /> that a reader
                        </h1>
                        <div className="flex justify-start mt-1">
                          <figure>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              class="bi bi-clock w-4"
                              viewBox="0 0 16 16"
                            >
                              {" "}
                              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />{" "}
                              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />{" "}
                            </svg>
                          </figure>
                          <p class="text-sm font-normal mx-2">03 Month, 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="  bg-gray-100  h-48 mt-10" bis_skin_checked="1">
                  <div
                    class="flex items-center justify-between"
                    bis_skin_checked="1"
                  >
                    <h2 className="mx-12 text-md  font-black mt-10 border-b-4 border-red-600">
                      Follow Us
                    </h2>
                  </div>
                  <div class="" bis_skin_checked="1">
                    <div class=" w-full">
                      <div class="flex justify-start mx-12 mt-8 gap-2">
                        <a
                          href="#!"
                          type="button"
                          class="rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        >
                          <svg
                            id="changeColor"
                            fill="#DC7633"
                            className="w-10"
                            zoomAndPan="magnify"
                            viewBox="0 0 375 374.9999"
                            version="1.0"
                          >
                            <defs>
                              <path
                                id="pathAttribute"
                                d="M 11.972656 11.972656 L 359.222656 11.972656 L 359.222656 359.222656 L 11.972656 359.222656 Z M 11.972656 11.972656 "
                                stroke="#0a0a0a"
                                stroke-width="10"
                              ></path>
                            </defs>
                            <g>
                              <path
                                id="pathAttribute"
                                d="M 185.597656 359.222656 C 89.675781 359.222656 11.972656 280.984375 11.972656 185.597656 C 11.972656 90.210938 89.675781 11.972656 185.597656 11.972656 C 281.519531 11.972656 359.222656 89.675781 359.222656 185.597656 C 359.222656 281.519531 280.984375 359.222656 185.597656 359.222656 Z M 185.597656 22.691406 C 95.570312 22.691406 22.691406 95.570312 22.691406 185.597656 C 22.691406 275.625 95.570312 348.503906 185.597656 348.503906 C 275.625 348.503906 348.503906 275.625 348.503906 185.597656 C 348.503906 95.570312 275.089844 22.691406 185.597656 22.691406 Z M 185.597656 22.691406 "
                                fill-opacity="1"
                                fill-rule="nonzero"
                                stroke="#0a0a0a"
                                stroke-width="10"
                              ></path>
                            </g>
                            <g id="inner-icon" transform="translate(85, 75)">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-brand-facebook"
                                width="199.8"
                                height="199.8"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                id="IconChangeColor"
                              >
                                {" "}
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                                <path
                                  d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                              </svg>{" "}
                            </g>
                          </svg>
                        </a>
                        <a
                          href="#!"
                          type="button"
                          class="rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        >
                          <svg
                            id="changeColor"
                            fill="#DC7633"
                            className="w-10"
                            zoomAndPan="magnify"
                            viewBox="0 0 375 374.9999"
                            version="1.0"
                          >
                            <defs>
                              <path
                                id="pathAttribute"
                                d="M 11.972656 11.972656 L 359.222656 11.972656 L 359.222656 359.222656 L 11.972656 359.222656 Z M 11.972656 11.972656 "
                                stroke-width="10"
                                stroke="#727272"
                              ></path>
                            </defs>
                            <g>
                              <path
                                id="pathAttribute"
                                d="M 185.597656 359.222656 C 89.675781 359.222656 11.972656 280.984375 11.972656 185.597656 C 11.972656 90.210938 89.675781 11.972656 185.597656 11.972656 C 281.519531 11.972656 359.222656 89.675781 359.222656 185.597656 C 359.222656 281.519531 280.984375 359.222656 185.597656 359.222656 Z M 185.597656 22.691406 C 95.570312 22.691406 22.691406 95.570312 22.691406 185.597656 C 22.691406 275.625 95.570312 348.503906 185.597656 348.503906 C 275.625 348.503906 348.503906 275.625 348.503906 185.597656 C 348.503906 95.570312 275.089844 22.691406 185.597656 22.691406 Z M 185.597656 22.691406 "
                                fill-opacity="1"
                                fill-rule="nonzero"
                                stroke-width="10"
                                stroke="#727272"
                              ></path>
                            </g>
                            <g id="inner-icon" transform="translate(85, 75)">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="199.8"
                                height="199.8"
                                fill="currentColor"
                                class="bi bi-twitter"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <path
                                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                              </svg>{" "}
                            </g>
                          </svg>
                        </a>
                        <a
                          href="#!"
                          type="button"
                          class="rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        >
                          <svg
                            id="changeColor"
                            fill="#DC7633"
                            className="w-10"
                            zoomAndPan="magnify"
                            viewBox="0 0 375 374.9999"
                            version="1.0"
                          >
                            <defs>
                              <path
                                id="pathAttribute"
                                d="M 11.972656 11.972656 L 359.222656 11.972656 L 359.222656 359.222656 L 11.972656 359.222656 Z M 11.972656 11.972656 "
                                fill="#000000"
                                stroke-width="10"
                                stroke="#0d0d0d"
                              ></path>
                            </defs>
                            <g>
                              <path
                                id="pathAttribute"
                                d="M 185.597656 359.222656 C 89.675781 359.222656 11.972656 280.984375 11.972656 185.597656 C 11.972656 90.210938 89.675781 11.972656 185.597656 11.972656 C 281.519531 11.972656 359.222656 89.675781 359.222656 185.597656 C 359.222656 281.519531 280.984375 359.222656 185.597656 359.222656 Z M 185.597656 22.691406 C 95.570312 22.691406 22.691406 95.570312 22.691406 185.597656 C 22.691406 275.625 95.570312 348.503906 185.597656 348.503906 C 275.625 348.503906 348.503906 275.625 348.503906 185.597656 C 348.503906 95.570312 275.089844 22.691406 185.597656 22.691406 Z M 185.597656 22.691406 "
                                fill-opacity="1"
                                fill-rule="nonzero"
                                fill="#000000"
                                stroke-width="10"
                                stroke="#0d0d0d"
                              ></path>
                            </g>
                            <g id="inner-icon" transform="translate(85, 75)">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="199.8"
                                height="199.8"
                                fill="currentColor"
                                class="bi bi-instagram"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <path
                                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                              </svg>{" "}
                            </g>
                          </svg>
                        </a>
                        <a
                          href="#!"
                          type="button"
                          class="rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        >
                          <svg
                            id="changeColor"
                            fill="#DC7633"
                            className="w-10"
                            zoomAndPan="magnify"
                            viewBox="0 0 375 374.9999"
                            version="1.0"
                          >
                            <defs>
                              <path
                                id="pathAttribute"
                                d="M 11.972656 11.972656 L 359.222656 11.972656 L 359.222656 359.222656 L 11.972656 359.222656 Z M 11.972656 11.972656 "
                                stroke="#0f0f0f"
                                stroke-width="10"
                              ></path>
                            </defs>
                            <g>
                              <path
                                id="pathAttribute"
                                d="M 185.597656 359.222656 C 89.675781 359.222656 11.972656 280.984375 11.972656 185.597656 C 11.972656 90.210938 89.675781 11.972656 185.597656 11.972656 C 281.519531 11.972656 359.222656 89.675781 359.222656 185.597656 C 359.222656 281.519531 280.984375 359.222656 185.597656 359.222656 Z M 185.597656 22.691406 C 95.570312 22.691406 22.691406 95.570312 22.691406 185.597656 C 22.691406 275.625 95.570312 348.503906 185.597656 348.503906 C 275.625 348.503906 348.503906 275.625 348.503906 185.597656 C 348.503906 95.570312 275.089844 22.691406 185.597656 22.691406 Z M 185.597656 22.691406 "
                                fill-opacity="1"
                                fill-rule="nonzero"
                                stroke="#0f0f0f"
                                stroke-width="10"
                              ></path>
                            </g>
                            <g id="inner-icon" transform="translate(85, 75)">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="199.8"
                                height="199.8"
                                fill="currentColor"
                                class="bi bi-whatsapp"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <path
                                  d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                              </svg>{" "}
                            </g>
                          </svg>
                        </a>
                        <a
                          href="#!"
                          type="button"
                          class="rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        >
                          <svg
                            id="changeColor"
                            fill="#DC7633"
                            className="w-10"
                            zoomAndPan="magnify"
                            viewBox="0 0 375 374.9999"
                            version="1.0"
                          >
                            <defs>
                              <path
                                id="pathAttribute"
                                d="M 11.972656 11.972656 L 359.222656 11.972656 L 359.222656 359.222656 L 11.972656 359.222656 Z M 11.972656 11.972656 "
                                stroke="#0a0a0a"
                                stroke-width="10"
                              ></path>
                            </defs>
                            <g>
                              <path
                                id="pathAttribute"
                                d="M 185.597656 359.222656 C 89.675781 359.222656 11.972656 280.984375 11.972656 185.597656 C 11.972656 90.210938 89.675781 11.972656 185.597656 11.972656 C 281.519531 11.972656 359.222656 89.675781 359.222656 185.597656 C 359.222656 281.519531 280.984375 359.222656 185.597656 359.222656 Z M 185.597656 22.691406 C 95.570312 22.691406 22.691406 95.570312 22.691406 185.597656 C 22.691406 275.625 95.570312 348.503906 185.597656 348.503906 C 275.625 348.503906 348.503906 275.625 348.503906 185.597656 C 348.503906 95.570312 275.089844 22.691406 185.597656 22.691406 Z M 185.597656 22.691406 "
                                fill-opacity="1"
                                fill-rule="nonzero"
                                stroke="#0a0a0a"
                                stroke-width="10"
                              ></path>
                            </g>
                            <g id="inner-icon" transform="translate(85, 75)">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="199.8"
                                height="199.8"
                                fill="currentColor"
                                class="bi bi-youtube"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <path
                                  d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                              </svg>{" "}
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="  bg-gray-100 mt-10 h-72" bis_skin_checked="1">
                  <div
                    class="flex items-center justify-between"
                    bis_skin_checked="1"
                  >
                    <h2 className="mx-12 text-md  font-black mt-3 border-b-4 border-red-600">
                      Popular Tags
                    </h2>
                  </div>
                  <div class="flex justify-start mx-12 mt-8 gap-4">
                    <button
                      type="button"
                      class="text-black bg-white hover:text-white hover:bg-red-600 font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
                    >
                      Visa
                    </button>
                    <button
                      type="button"
                      class="text-black bg-white hover:text-white hover:bg-red-600 font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
                    >
                      Business
                    </button>
                    <button
                      type="button"
                      class="text-black bg-white hover:text-white hover:bg-red-600 font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
                    >
                      Travell
                    </button>
                  </div>
                  <div class="flex justify-start mx-12 mt-4 gap-4">
                    <button
                      type="button"
                      class="text-black bg-white hover:text-white hover:bg-red-600 font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
                    >
                      Education
                    </button>
                    <button
                      type="button"
                      class="text-black bg-white hover:text-white hover:bg-red-600 font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
                    >
                      Countries
                    </button>
                  </div>
                  <div class="flex justify-start mx-12 mt-4 gap-4">
                    <button
                      type="button"
                      class="text-black bg-white hover:text-white hover:bg-red-600 font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
                    >
                      Coaching
                    </button>
                    <button
                      type="button"
                      class="text-black bg-white hover:text-white hover:bg-red-600 font-extrabold text-md px-5 py-2.5 text-center inline-flex items-center"
                    >
                      Immigration
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
