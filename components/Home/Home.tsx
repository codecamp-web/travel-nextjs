

import React from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import Inquiry from './Inquiry/Inquiry'
import Review from './Review/Review'
import Newsletter from './Newsletter/Newsletter'


const Home = () => {
  return (
    <div className='overflow-hidden'>
       <Hero />
       <Destination />
       <Hotel />
       <Inquiry />
       <Review />
       <Newsletter />
    </div>
  )
}


export default Home
