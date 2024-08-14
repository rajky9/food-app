import React from 'react'
import Card from './Card'
import { HeadLineDataCard as data } from '../data'


const HeadLineCards = () => {
  return (
    <div className='grid md:grid-cols-3 max-w-[1640px] mx-auto p-4 gap-6'>
      {
        data.map(card => {
          return <Card key={card.id} {...card} />
        })
      }
    </div>
  )
}

export default HeadLineCards