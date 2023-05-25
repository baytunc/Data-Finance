import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4 lg:mt-0'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-1 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                    <button className='bg-[#00df9a] text-black w-[150px] rounded-md font-medium ml-4 my-6 mx-auto py-1 px-6'>Notify Me</button>
                </div>
            </div>
            <p className='absolute right-2 mt-4 lg:mt-[100px] mr-[220px] lg:mr-[10] lg:text-right'>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span> </p>
        </div>
        
    </div>
  )
}

export default Newsletter
