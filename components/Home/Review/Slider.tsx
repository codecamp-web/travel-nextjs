
"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/effect-cards"
import { EffectCards } from 'swiper/modules'
import { reviewData } from '../../../data/data'
import { Star } from '@mui/icons-material'
import Image from 'next/image'

const Slider = () => {
  return (
    <div>
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} 
      className='md:w-[350px] md:h-[350px] w-4/5 h-[300px]'>
        {reviewData.map((item) => {
           return (
            <SwiperSlide key={item.id} className='bg-white rounded-3xl block'>
               <div className='w-2/3 mx-auto mt-16'>
               <p className='text-xs  font-medium'>
                {item.review}
               </p>
               <div className='flex items-center mt-4 text-amber-400'>
                <Star /><Star /><Star /><Star /><Star />
               </div>
               <div className='mt-10 flex'>
                <div className='flex items-center space-x-4'>
                    <Image src={item.image} width={30} height={30} alt={item.name} />
                </div>
                <div className='ml-5'>
                <p className='text-sm font-bold'>{item.name}</p>
                <p className='text-gray-600 text-xs'>{item.occupation}</p>
                </div>
               </div>
               </div>
            </SwiperSlide>
           )
        })}
      </Swiper>
    </div>
  )
}

export default Slider
