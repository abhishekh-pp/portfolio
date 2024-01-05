import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Linkedin from '../assets/linkedin.png'
import GitHub from '../assets/github.png';
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-violet-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Abhishekh
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Developer and Designer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
  <div className='flex justify-center py-3'>
    <a href="https://github.com/abhishekh-pp"><img className='h-10 mx-5' src={GitHub} alt="github link" /></a>
    <a href="https://www.linkedin.com/in/abhishekh-pp/"><img className='h-10 mx-5' src={Linkedin} alt="linkedin link" /></a>
  </div>
        {/* <div  className='className="text-9xl flex justify-center gap-16 py-3 text-gray-100'>
          <button className='h-72'>
          <FaLinkedin className='w-full' />
          </button>
          <button>
          <FaGithub />
          </button>
          </div> */}
          
        {/* <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          
          
        </div> */}
      </div>
    </div>
  );
};

export default Home;
