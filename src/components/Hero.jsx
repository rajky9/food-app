import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] p-4 mx-auto'>
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h2 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h2>
          <h2 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '><span className='text-orange-500'>Food</span> Delivered</h2>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
      </div>
    </div>
  )
}

export default Hero