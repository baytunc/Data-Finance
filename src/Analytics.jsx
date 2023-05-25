import React from 'react'
import Laptop from '../src/assets/laptop.jpg';


function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={Laptop} alt="/" />
        <div className='flex flex-col items-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='font-bold mt-2 mb-2 text-lg'>Manage Data Analytics Centerally</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat natus ipsam maiores minus earum architecto? Cum deleniti accusantium labore, fugit ab atque temporibus fuga suscipit. Ipsum nemo officia ad?</p>
            <button className='bg-[#000000] flex flex-col items-center  w-[200px] rounded-md font-medium my-6 mx-auto py-1 text-[#00df9a]'>Get Started</button>
            <p className='absolute bottom-10 right-0 p-4 text-white'>Burak Aytunc</p>
        </div>
      </div>
    </div>
  )
}

export default Analytics
