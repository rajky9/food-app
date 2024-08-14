import React from 'react'

const Card = (card) => {
  return (
    <div className='relative rounded-xl'>
      <div className='bg-black/50 absolute w-full h-full rounded-xl text-white'>
        <p className='text-2xl px-2 pt-4 font-bold'>{card.title}</p>
        <p className='text-xl px-2'>{card.desc}</p>
        <button className='absolute bottom-4 mx-2 bg-white text-black'>Order now</button>
      </div>
        <img className='rounded-xl w-full max-h-[160px] object-cover' src={card.url} alt="/" />

    </div>
  )
}

export default Card