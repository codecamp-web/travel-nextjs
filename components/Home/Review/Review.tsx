

import { Star } from '@mui/icons-material'
import React from 'react'
import Slider from './Slider'

const Review = () => {
  return (
    <div className="py-20  bg-gray-700">
      <div className='sm:w-3/4 mx-auto px-3 sm:px-0 items-center  grid
      grid-cols-1 lg:grid-cols-2 gap-10 '>
            <div>
                <h1 className='text-2xl font-semibold text-white'>
                    What our customers are saying about us ?
                </h1>
                <p className='mt-6 text-gray-400'>
                    Amazing arrangements and a great stay and schedule.. Lorem ipsum
                     dolor sit amet consectetur adipisicing elit. Fugit enim molestias
                </p>
                <div className='mt-6 flex items-center space-x-6'>
                    <div >
                        <p className='text-2xl font-bold text-white'>4.89</p>
                        <p className='text-white mb-2'>Ovrall Rating</p>
                        <div className='flex items-center'>
                           <p className='text-amber-400'>
                            <Star /><Star /><Star /><Star /><Star />
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden'>
                 <Slider />
            </div>
      </div>
    </div>
  )
}

export default Review
