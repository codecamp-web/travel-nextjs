

import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

const styles = "text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-500"

const Footer = () => {
  return (
    <div>
      <div className='py-16 w-3/5 mx-auto items-start grid-cols-1 sm:grid-cols-2 grid 
      md:grid-cols-3 lg:grid-cols-4 gap-10 text-center'>
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Company</h1>
            <p className={styles}>About Us</p>
            <p className={styles}>Careers</p>
            <p className={styles}>Blogs</p>
            <p className={styles}>Gift Cards</p>
            <p className={styles}>Magazine</p>
        </div>
        
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Support</h1>
            <p className={styles}>Contact</p>
            <p className={styles}>Legal Notice</p>
            <p className={styles}>Privacy Policy</p>
            <p className={styles}>Terms & Condition</p>
            <p className={styles}>Sitemap</p>
        </div>

        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Other Services</h1>
            <p className={styles}>Car hire</p>
            <p className={styles}>Activity Finder</p>
            <p className={styles}>Tour List</p>
            <p className={styles}>Flight Finder</p>
            <p className={styles}>Travel Agents</p>
        </div>

        <div>
            <h1 className='text-lg font-bold'>Other Services</h1>
                <h1 className='text-sm'>Mobile Number 911 911 9111</h1>
            <div className='mt-6'>
            <h1 className='text-lg font-bold'>Our email</h1>
                <h1 className='text-sm'>headiesed@gmail.com</h1>
        </div>
        </div>
      </div>
      <div className='mt-8 w-4/5 mx-auto border-t pt-8 flex flex-col md:flex-row
      justify-between items-center text-gray-700 text-sm'>
        <p className='text-center md:text-left'>
            Copyright @ 2025 Dev. All rights reserved
        </p>
        <div className='flex items-center space-x-4 mt-4 md:mt-0 '>
            <Link href="#"><Facebook /></Link>
            <Link href="#"><Twitter /></Link>
            <Link href="#"><Instagram /></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
