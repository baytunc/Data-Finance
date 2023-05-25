import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-5xl sm:text-4xl text-4xl font-bold md:py-2'>Grow With Data.</h1>
            <div className='flex justify-center items-center text-xs'>
                <p className='md:2xl sm:text-2xl text-xl font-bold pr-2'>Fast, flexible financing for </p>
                <TypeAnimation className='text-[#00df9a] font-bold'
      sequence={[
        'BTB', // Types 'One'
        1000, // Waits 1s
        'BTC', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'SASS', // Types 'Three' without deleting 'Two'
        2000, // Waits 3s
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }} />
             </div>
             <p className='mt-2 md:text-xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS patforms</p>
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto py-1'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
