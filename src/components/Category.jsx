import React from 'react'
import { categories } from '../data'


const Category = () => {
  return (
    <div className='max-w-[1640px] px-4 m-auto py-12'>
        <h1 className='text-4xl md:text-5xl text-center text-orange-500 font-medium'>Top Rated Menu Items</h1>
      <div className='pt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {
          categories.map((category, index) => (
            <div key={index} className='flex justify-between items-center bg-gray-100 rounded-lg'>
              <h1 className='text-2xl font-medium pl-3 over'>{category.name}</h1>
              <img
                src={category.image}
                alt="/"
                className='w-20'
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category