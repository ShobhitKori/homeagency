import React from 'react'

const DesignAgency = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-beige py-5 text-white lg:px-32 md:px-16 sm:px-8 px-4'>
      <div className='p-12 w-full'>
        <img src="./design-agency.png" alt="design agency pic" />
      </div>
      <div className='text-custom-brown p-12'>
        <p className='text-custom-orange py-8 text-2xl'>ABOUT</p>
        <h1 className='text-6xl font-bold'>An Experience Design Agency</h1>
        <h2 className='py-4 text-2xl'>Provides a full service range</h2>
        <p className='text-[#391400A3] text-2xl'>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
        <button className='my-8 bg-white rounded px-4 py-2 font-bold'>ABOUT US</button>
      </div>
    </div>
  )
}

export default DesignAgency