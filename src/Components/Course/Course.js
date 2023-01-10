import React from "react";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div>
      <div
        class="w-full bg-center bg-cover h-[30rem]"
        style={{
          backgroundImage: `url('https://www.cityu.edu.hk/csci/sites/g/files/asqsls3421/files/styles/crop_freeform/public/media-image/shutterstock_526892083.jpg?h=d4467ebe&itok=AAlOO5fQ')`,
        }}
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-900/10">
          <div class="text-center">
            <h1 class="text-5xl font-black text-white lg:text-5xl">
              <span class="text-red-600">All Coaching</span>
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
                  <p class="text-md font-black mx-2 text-white">All Coaching</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 mt-20">
          <div class="card w-96 bg-white shadow-md mt-7">
            <figure class="px-3">
              <img src="https://www.udst.edu.qa/sites/default/files/styles/social_large/public/2022-05/ieltsbanner.jpg?h=10d4d41a&itok=1EGCvRcQ" alt="Shoes" class="rounded-lg h-64" />
            </figure>
            <div class="card-body items-start -mt-2">
              <div class="card card-side bg-base-100 gap-6">
                <div className="flex justify-between">
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74iXIpzqCgsfWlfV2nGFZM-XYZocXnarGbtu9bOnWUzHP1cHQ_C5GLgVvPkuO10oYNME&usqp=CAU"
                      alt="Movie"
                      className="w-6"
                    />
                  </figure>
                  <p class="text-md font-medium mx-2">03 Month</p>
                </div>
                <div className="flex justify-between">
                  <figure>
                    <img
                      src="https://www.vodafone.ua/storage/editor/fotos/2763c1ea2fc839a43d38945a257920a2_1586439518.svg"
                      alt="Movie"
                      className="w-6"
                    />
                  </figure>
                  <p class="text-md font-medium mx-2">25 Classes</p>
                </div>
              </div>
              <h2 class="card-title font-black mt-2">IELTS COACHING</h2>
              <p className="mt-1">
                There are many variations of passages available but the majority
                have suffered to the alteration
              </p>
              <div className="text-start">
                <button
                  type="button"
                  class="text-white bg-red-500 hover:bg-blue-800 rounded-xl text-md font-bold px-5 py-2.5 text-center inline-flex items-center mt-6"
                >
                  READ MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill w-9 h-9 ml-3 -mr-3"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-white shadow-md mt-7">
            <figure class="px-3">
              <img src="http://chandigarhedu.in/wp-content/uploads/2017/02/Advantages-of-taking-the-TOEFL-test.png" alt="Shoes" class="rounded-lg h-64" />
            </figure>
            <div class="card-body items-start -mt-2">
              <div class="card card-side bg-base-100 gap-6">
                <div className="flex justify-between">
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74iXIpzqCgsfWlfV2nGFZM-XYZocXnarGbtu9bOnWUzHP1cHQ_C5GLgVvPkuO10oYNME&usqp=CAU"
                      alt="Movie"
                      className="w-6"
                    />
                  </figure>
                  <p class="text-md font-medium mx-2">03 Month</p>
                </div>
                <div className="flex justify-between">
                  <figure>
                    <img
                      src="https://www.vodafone.ua/storage/editor/fotos/2763c1ea2fc839a43d38945a257920a2_1586439518.svg"
                      alt="Movie"
                      className="w-6"
                    />
                  </figure>
                  <p class="text-md font-medium mx-2">25 Classes</p>
                </div>
              </div>
              <h2 class="card-title font-black mt-2">TOEFL COACHING</h2>
              <p className="mt-1">
                There are many variations of passages available but the majority
                have suffered to the alteration
              </p>
              <div className="text-start">
                <button
                  type="button"
                  class="text-white bg-red-500 hover:bg-blue-800 rounded-xl text-md font-bold px-5 py-2.5 text-center inline-flex items-center mt-6"
                >
                  READ MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill w-9 h-9 ml-3 -mr-3"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-white shadow-md mt-7">
            <figure class="px-3">
              <img src="https://ik.imagekit.io/mepl/wp-content/uploads/2021/12/FeaturedImage-Eligibility-Criteria-for-PTE-Exam-2022-1.png" alt="Shoes" class="rounded-lg h-64" />
            </figure>
            <div class="card-body items-start -mt-2">
              <div class="card card-side bg-base-100 gap-6">
                <div className="flex justify-between">
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74iXIpzqCgsfWlfV2nGFZM-XYZocXnarGbtu9bOnWUzHP1cHQ_C5GLgVvPkuO10oYNME&usqp=CAU"
                      alt="Movie"
                      className="w-6"
                    />
                  </figure>
                  <p class="text-md font-medium mx-2">03 Month</p>
                </div>
                <div className="flex justify-between">
                  <figure>
                    <img
                      src="https://www.vodafone.ua/storage/editor/fotos/2763c1ea2fc839a43d38945a257920a2_1586439518.svg"
                      alt="Movie"
                      className="w-6"
                    />
                  </figure>
                  <p class="text-md font-medium mx-2">25 Classes</p>
                </div>
              </div>
              <h2 class="card-title font-black mt-2">PTE COACHING</h2>
              <p className="mt-1">
                There are many variations of passages available but the majority
                have suffered to the alteration
              </p>
              <div className="text-start">
                <button
                  type="button"
                  class="text-white bg-red-500 hover:bg-blue-800 rounded-xl text-md font-bold px-5 py-2.5 text-center inline-flex items-center mt-6"
                >
                  READ MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill w-9 h-9 ml-3 -mr-3"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-white shadow-md mt-7">
            <figure class="px-3">
              <img src="https://resize.indiatvnews.com/en/resize/newbucket/730_-/2021/05/college-students-pti-1621331362.jpg" alt="Shoes" class="rounded-lg h-64" />
            </figure>
            <div class="card-body items-start -mt-2">
              <div class="card card-side bg-base-100 gap-6">
                <div className="flex justify-between">
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74iXIpzqCgsfWlfV2nGFZM-XYZocXnarGbtu9bOnWUzHP1cHQ_C5GLgVvPkuO10oYNME&usqp=CAU"
                      alt="Movie"
                      className="w-6"
                    />
                  </figure>
                  <p class="text-md font-medium mx-2">03 Month</p>
                </div>
                <div className="flex justify-between">
                  <figure>
                    <img
                      src="https://www.vodafone.ua/storage/editor/fotos/2763c1ea2fc839a43d38945a257920a2_1586439518.svg"
                      alt="Movie"
                      className="w-6"
                    />
                  </figure>
                  <p class="text-md font-medium mx-2">25 Classes</p>
                </div>
              </div>
              <h2 class="card-title font-black mt-2">GRADUATE RE-EXAM</h2>
              <p className="mt-1">
                There are many variations of passages available but the majority
                have suffered to the alteration
              </p>
              <div className="text-start">
                <button
                  type="button"
                  class="text-white bg-red-500 hover:bg-blue-800 rounded-xl text-md font-bold px-5 py-2.5 text-center inline-flex items-center mt-6"
                >
                  READ MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill w-9 h-9 ml-3 -mr-3"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-white shadow-md mt-7">
            <figure class="px-3">
              <img src="https://www.softwaretestinghelp.com/wp-content/qa/uploads/2019/11/Test-Management-1.png" alt="Shoes" class="rounded-lg h-64" />
            </figure>
            <div class="card-body items-start -mt-2">
              <div class="card card-side bg-base-100 gap-6">
                <div className="flex justify-between">
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74iXIpzqCgsfWlfV2nGFZM-XYZocXnarGbtu9bOnWUzHP1cHQ_C5GLgVvPkuO10oYNME&usqp=CAU"
                      alt="Movie"
                      className="w-6"
                    />
                  </figure>
                  <p class="text-md font-medium mx-2">03 Month</p>
                </div>
                <div className="flex justify-between">
                  <figure>
                    <img
                      src="https://www.vodafone.ua/storage/editor/fotos/2763c1ea2fc839a43d38945a257920a2_1586439518.svg"
                      alt="Movie"
                      className="w-6"
                    />
                  </figure>
                  <p class="text-md font-medium mx-2">25 Classes</p>
                </div>
              </div>
              <h2 class="card-title font-black mt-2">MANAGEMENT TEST</h2>
              <p className="mt-1">
                There are many variations of passages available but the majority
                have suffered to the alteration
              </p>
              <div className="text-start">
                <button
                  type="button"
                  class="text-white bg-red-500 hover:bg-blue-800 rounded-xl text-md font-bold px-5 py-2.5 text-center inline-flex items-center mt-6"
                >
                  READ MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill w-9 h-9 ml-3 -mr-3"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-white shadow-md mt-7">
            <figure class="px-3">
              <img src="https://flexcollegeprep.com/wp-content/uploads/2018/12/omr-3723128_1920.jpg" alt="Shoes" class="rounded-lg h-64" />
            </figure>
            <div class="card-body items-start -mt-2">
              <div class="card card-side bg-base-100 gap-6">
                <div className="flex justify-between">
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74iXIpzqCgsfWlfV2nGFZM-XYZocXnarGbtu9bOnWUzHP1cHQ_C5GLgVvPkuO10oYNME&usqp=CAU"
                      alt="Movie"
                      className="w-6"
                    />
                  </figure>
                  <p class="text-md font-medium mx-2">03 Month</p>
                </div>
                <div className="flex justify-between">
                  <figure>
                    <img
                      src="https://www.vodafone.ua/storage/editor/fotos/2763c1ea2fc839a43d38945a257920a2_1586439518.svg"
                      alt="Movie"
                      className="w-6"
                    />
                  </figure>
                  <p class="text-md font-medium mx-2">25 Classes</p>
                </div>
              </div>
              <h2 class="card-title font-black mt-2">SCHOLASTIC APTI</h2>
              <p className="mt-1">
                There are many variations of passages available but the majority
                have suffered to the alteration
              </p>
              <div className="text-start">
                <button
                  type="button"
                  class="text-white bg-red-500 hover:bg-blue-800 rounded-xl text-md font-bold px-5 py-2.5 text-center inline-flex items-center mt-6"
                >
                  READ MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill w-9 h-9 ml-3 -mr-3"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Course;
