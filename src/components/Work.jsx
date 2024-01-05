import React from 'react';
import Legend from '../assets/thelegend.png'
import KRF from '../assets/krf.png'
import theBlur from '../assets/theBlur.png'



const Work = () => {

    
  
  return (
    <div name='work' className='w-full md:h-screen  text-gray-300  bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-violet-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">


  <div>
   <a href="https://thelegend.co.in" target="_blank"> 
   <img className='rounded min-h-60 min-w-72' src={Legend} alt="website mockup" />
    <h3 className='font-bold'>The Legend</h3>
    <p>e-commerce clothing brand</p>
    </a>
  </div>

  <div>
   <a href="https://krfresort.com/" target="_blank"> 
   <img className='rounded min-h-60 min-w-72' src={KRF} alt="website mockup" />
    <h3 className='font-bold'>KRF Resort</h3>
    <p>resort booking website</p>
    </a>
  </div>

  <div>
   <a href="https://theblur.io " target="_blank"> 
   <img className='rounded min-h-60 min-w-72' src={theBlur} alt="website mockup" />
    <h3 className='font-bold'>theBlur.io</h3>
    <p>web design agency</p>
    </a>
  </div>


</div>
      </div>
    </div>
  );
};

export default Work;
