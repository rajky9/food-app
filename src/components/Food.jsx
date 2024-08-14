import React, { useState } from 'react'
import { food } from '../data'


const Food = () => {
  const [filteredFood, setFilteredFood] = useState(food)

  const handleTypeClick = (type) => {
    setFilteredFood(food.filter(item => item.category === type))
  }

  const handlePriceClick = (price) => {
    setFilteredFood(food.filter(item => item.price === price))
  }

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-8'>
      <h2 className='text-orange-500 font-bold text-3xl md:text-5xl text-center'>
        Top Rated Menu items
      </h2>
      <div className='flex flex-col md:flex-row justify-between'>
        <div>
          <p className='font-bold md:text-2xl pb-2'>Filter Type</p>
          <div className='flex gap-3 flex-wrap'>
            <button onClick={() => setFilteredFood(food)} className='text-orange-500 border-orange-500 hover:text-white hover:bg-orange-500'>All</button>
            <button onClick={() => handleTypeClick('burger')} className='text-orange-500 border-orange-500 hover:text-white hover:bg-orange-500'>Burgers</button>
            <button onClick={() => handleTypeClick('pizza')} className='text-orange-500 border-orange-500 hover:text-white hover:bg-orange-500'>Pizza</button>
            <button onClick={() => handleTypeClick('salad')} className='text-orange-500 border-orange-500 hover:text-white hover:bg-orange-500'>Salads</button>
            <button onClick={() => handleTypeClick('chicken')} className='text-orange-500 border-orange-500 hover:text-white hover:bg-orange-500'>Chicken</button>
          </div>
        </div>
        <div className='pt-2 md:pt-0'>
          <p className='font-bold md:text-2xl pb-2'>Filter Price</p>
          <div className='flex gap-3 flex-wrap w-full justify-between'>
            <button onClick={() => handlePriceClick('$')} className='text-orange-500 border-orange-500 hover:text-white hover:bg-orange-500'>$</button>
            <button onClick={() => handlePriceClick('$$')} className='text-orange-500 border-orange-500 hover:text-white hover:bg-orange-500'>$$</button>
            <button onClick={() => handlePriceClick('$$$')} className='text-orange-500 border-orange-500 hover:text-white hover:bg-orange-500'>$$$</button>
            <button onClick={() => handlePriceClick('$$$$')} className='text-orange-500 border-orange-500 hover:text-white hover:bg-orange-500'>$$$$</button>
          </div>
        </div>
      </div>
      {/* Display foods*/}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-4'>
        {
          filteredFood.map((item, index) => (
            <div
              className='border rounded-lg shadow-lg hover:scale-105 duration-300 cursor-pointer'
              key={index}
            >
              <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt="/" />
              <div className='flex justify-between items-center py-4 px-2'>
                <p className='font-bold'>{item.name}</p>
                <p>
                  <span className='bg-orange-500 rounded-full text-white p-1'>
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Food