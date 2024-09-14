// components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto flex flex-col items-center py-8 sm:py-16">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-4 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-gray-800 font-black leading-7 md:leading-9">
            Unlock Your Learning Potential with
            <span className="text-indigo-700"> Free Classes</span>
          </h1>
          <p className="mt-4 sm:mt-6 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-base">
            Explore our free educational content including YouTube classes and comprehensive notes to enhance your learning experience. Dive into a world of knowledge without any cost!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-lg lg:font-semibold rounded text-white px-4 sm:px-8 border border-indigo-700 py-2 sm:py-3 text-xs sm:text-sm">
            <Link to="/courses">
            Get Started
            </Link>
          </button>
          <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-lg lg:font-semibold hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm">
            <a href="#">Watch on YouTube</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
