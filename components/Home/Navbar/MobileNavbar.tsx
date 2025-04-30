
import Link from 'next/link'
import { navLinks } from '../../../data/navbar'
import { Close } from '@mui/icons-material'

type Props = {
    isOpen: boolean
    isClose: () => void
}

const MobileNavbar = ({isOpen, isClose}:Props) => {

    const navOpen = isOpen ? "translate-x-0":"translate-x-[-100%]"

  return (
    <div className='lg:hidden'>
      <div className={`fixed inset-0 transform transition-all ${navOpen} 
        duration-500 z-[60] bg-black opacity-70 w-full h-screen`}></div>
      <div className={`text-white fixed justify-center ${navOpen}
       flex flex-col h-full transform transition-all duration-500
        delay-300 w-3/4 bg-rose-900 gap-y-6 z-[60]`}>
        {navLinks.map((item) => {
            return <Link key={item.id} href={item.url}>
                <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px]
                pb-1 border-white sm:text-[30px]'>
                    {item.title}
                </p>
            </Link>
        })}
        <span onClick={isClose}>
        <Close className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 
        cursor-pointer'/>
        </span>
       </div>
    </div>
  )
}

export default MobileNavbar
