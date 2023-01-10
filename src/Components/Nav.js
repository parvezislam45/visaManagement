import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div class="navbar bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 ">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">
              <li>
                <a className="hover:text-red-500">HOME</a>
              </li>
            </Link>
          <li tabindex="0">
              <a className="hover:text-red-500">COACHING</a>
        
            <ul class="p-2 bg-white text-black">
              <li>
                <Link to="/course"><a className="hover:text-red-500">ALL COACHING</a></Link>
                
              </li>
              <li>
                <a className="hover:text-red-500">IELTS COACHING</a>
              </li>
              <li>
                <a className="hover:text-red-500">TOEFL</a>
              </li>
              <li>
                <a className="hover:text-red-500">PTE COACHING</a>
              </li>
              <li>
                <a className="hover:text-red-500">GRADUATE RE-EXAM</a>
              </li>
              <li>
                <a className="hover:text-red-500">MANAGEMENT TEST</a>
              </li>
              <li>
                <a className="hover:text-red-500">SCHOLASTIC APTI</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a className="hover:text-red-500">VISA </a>
            <ul class="p-2 bg-white text-black">
              <Link to="/visa">
                <li>
                  <a className="hover:text-red-500">ALL VISA</a>
                </li>
              </Link>
              <Link to="/student">
                <li>
                  <a className="hover:text-red-500">STUDENT VISA</a>
                </li>
              </Link>
              <Link to="/hajj"> <li>
                <a className="hover:text-red-500">HAJJ & UMRRA VISA</a>
              </li></Link>
              <Link to="/business"> <li>
                <a className="hover:text-red-500">BUSINESS VISA</a>
              </li></Link>
              <Link className="/job"><li>
                <a className="hover:text-red-500">JOB SEEKER VISA</a>
              </li></Link>
              <Link to="/tourist"><li>
                <a className="hover:text-red-500">TOURIST VISA</a>
              </li></Link>
              <Link className="medical"><li>
                <a className="hover:text-red-500">MEDICAL VISA</a>
              </li></Link>
              <Link to="/transit"> <li>
                <a className="hover:text-red-500">TRANSIT VISA</a>
              </li></Link>
            </ul>
          </li>
          <li tabindex="0">
            <a className="hover:text-red-500">COUNTRY</a>
            <ul class="p-2 bg-white text-black">
              <Link to="/allCountry"> <li>
                <a className="hover:text-red-500">ALL COUNTRY</a>
              </li></Link>
             <Link to="/soudia"><li>
                <a className="hover:text-red-500">SOUDIA ARAB</a>
              </li></Link>
             <Link to="/usa"><li>
                <a className="hover:text-red-500">UNITED STATE</a>
              </li></Link>
              <Link to="/uk"><li>
                <a className="hover:text-red-500">UNITED KINGDOM</a>
              </li></Link>
              <Link to="/australia"><li>
                <a className="hover:text-red-500">AUSTRALIA</a>
              </li></Link>
              <Link to="/canada"> <li>
                <a className="hover:text-red-500">CANADA</a>
              </li></Link>
              <Link to="/singapur"><li>
                <a className="hover:text-red-500">SINGAPUR</a>
              </li></Link>
            </ul>
          </li>
          <Link to="/blog"><li className="hover:text-red-500">
            <a>BLOG</a>
          </li></Link>
          <Link to="contract"><li className="hover:text-red-500">
            <a>CONTRACT</a>
          </li></Link>
          </ul>
        </div>
        <h1 className="text-xl font-black text-black">David Visa & Immigration Service</h1>
        {/* <a class="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
      <div
        class="container lg:flex flex-wrap items-center justify-between mx-auto hidden"
        id="navbar-sticky "
      >
        <ul class="menu menu-horizontal px-1 mx-auto text-black text-sm font-black ">
        <Link to="/" className="mt-1">
              <li>
                <a className="hover:text-red-500">HOME</a>
              </li>
            </Link>
          <li tabindex="0">
            <Link>
              <a className="hover:text-red-500">COACHING</a>
            </Link>

            <ul class="p-2 bg-white text-black">
             
              <li>
              <Link to="/course"><a className="hover:text-red-500">ALL COACHING</a></Link>
                
              </li>
              <li>
                <Link to="/ielts"><a className="hover:text-red-500">IELTS COACHING</a></Link>
                
              </li>
              <li>
                <Link to="/toefl"> <a className="hover:text-red-500">TOEFL COACHING</a></Link>
               
              </li>
              <li>
              <Link to="/pte">  <a className="hover:text-red-500">PTE COACHING</a></Link>
              
              </li>
              <li>
              <Link to="/exam"><a className="hover:text-red-500">GRADUATE RE-EXAM</a></Link>
                
              </li>
              <li>
              <Link to="/management"> <a className="hover:text-red-500">MANAGEMENT TEST</a></Link>
               
              </li>
              <li>
              <Link to="/scholastic"><a className="hover:text-red-500">SCHOLASTIC APTI</a></Link>
                
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a className="hover:text-red-500">VISA </a>
            <ul class="p-2 bg-white text-black">
              <Link to="/visa">
                <li>
                  <a className="hover:text-red-500">ALL VISA</a>
                </li>
              </Link>
              <Link to="/student">
                <li>
                  <a className="hover:text-red-500">STUDENT VISA</a>
                </li>
              </Link>
              <Link to="/hajj"> <li>
                <a className="hover:text-red-500">HAJJ & UMRRA VISA</a>
              </li></Link>
              <Link to="/business"> <li>
                <a className="hover:text-red-500">BUSINESS VISA</a>
              </li></Link>
              <Link to="/job"><li>
                <a className="hover:text-red-500">JOB SEEKER VISA</a>
              </li></Link>
              <Link to="/tour"><li>
                <a className="hover:text-red-500">TOURIST VISA</a>
              </li></Link>
              <Link to="medical"><li>
                <a className="hover:text-red-500">MEDICAL VISA</a>
              </li></Link>
              <Link to="/transit"> <li>
                <a className="hover:text-red-500">TRANSIT VISA</a>
              </li></Link>
            </ul>
          </li>
          <li tabindex="0">
            <a className="hover:text-red-500">COUNTRY</a>
            <ul class="p-2 bg-white text-black">
              <Link to="/country"> <li>
                <a className="hover:text-red-500">ALL COUNTRY</a>
              </li></Link>
             <Link to="/soudia"><li>
                <a className="hover:text-red-500">SOUDIA ARAB</a>
              </li></Link>
             <Link to="/usa"><li>
                <a className="hover:text-red-500">UNITED STATE</a>
              </li></Link>
              <Link to="/uk"><li>
                <a className="hover:text-red-500">UNITED KINGDOM</a>
              </li></Link>
              <Link to="/australia"><li>
                <a className="hover:text-red-500">AUSTRALIA</a>
              </li></Link>
              <Link to="/canada"> <li>
                <a className="hover:text-red-500">CANADA</a>
              </li></Link>
              <Link to="/singapur"><li>
                <a className="hover:text-red-500">SINGAPUR</a>
              </li></Link>
            </ul>
          </li>
          <Link to="/blog"className="mt-1"><li className="hover:text-red-500">
            <a>BLOG</a>
          </li></Link>
          <Link to="contract"className="mt-1"><li className="hover:text-red-500">
            <a>CONTRACT</a>
          </li></Link>
          
          <div className="">
            <button
              type="button"
              class="text-white bg-red-500 hover:bg-blue-800 rounded-xl text-sm font-bold px-5 py-2.5 text-center inline-flex items-center mt-2"
            >
              GET QUETE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-arrow-right-circle-fill w-6 h-6 ml-3 -mr-3"
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
        </ul>
      </div>
    </div>
  );
};

export default Nav;
