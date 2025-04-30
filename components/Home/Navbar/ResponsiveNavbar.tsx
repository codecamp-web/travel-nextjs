"use client"
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'

const ResponsiveNavbar = () => {
    const [toggleNav, setToggleNav] = useState(false)

    const navOpen = () => setToggleNav(true)
    const navClose = () => setToggleNav(false)

  return (
    <div>
      <Navbar isOpen={navOpen}  />
      <MobileNavbar isOpen={toggleNav} isClose={navClose} />
    </div>
  )
}

export default ResponsiveNavbar
