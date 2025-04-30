
import React from 'react'
import Heading from '../../Helper/Heading'
import Card from './Card'
import { CurrencyPound, LocalConvenienceStore, MenuBook } from '@mui/icons-material'

const Inquiry = () => {
  return (
    <div className="py-20 sm:w-3/4 mx-auto px-3 sm:px-0">
        <Heading heading='Why Choose Us'  subheading='Excellence you can rely on' />
        <div className='grid w-4/5 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-16 items-center mt-20 text-center'>
            <div>
                <Card icon={<CurrencyPound style={{fontSize: 50}}/>} title="Best Price Guarantee" />
            </div>
            <div>
                <Card icon={<MenuBook style={{fontSize: 50}}/>} title="Easy & Quick Booking" />
            </div>
            <div>
                <Card icon={<LocalConvenienceStore style={{fontSize: 50}}/>} title="Customer Care 24/7" />
            </div>
        </div>
    </div>
  )
}

export default Inquiry
