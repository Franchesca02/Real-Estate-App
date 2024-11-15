import { useState } from 'react';
import {assets} from '../assets/assets';
import { useEffect } from 'react';


const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
if(showMobileMenu) {
  document.body.style.overflow = 'hidden'
} else {
   document.body.style.overflow = 'auto'
}
return() => {
   document.body.style.overflow = 'hidden'
};
  }, [showMobileMenu])
  return (
    <div className="absolute left-0 top-0 w-full z-10">
 
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />

            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Tesimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>

            <img src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer' onClick={() => setShowMobileMenu(true)} />
        </div>
        {/* -----------Mobile Menu----------- */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} top-0 right-0 overflow-hidden bottom-0 bg-white transition-all`}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img src={assets.cross_icon} className='w-6' alt="" onClick={() => setShowMobileMenu(false)} />
          </div>
          <ul className='flex flex-col items-center font-medium text-lg mt-5 px-5 gap-2'>
            <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 inline-block rounded-full'>Home</a>
            <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 inline-block rounded-full'>About</a>
            <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 inline-block rounded-full'>Projects</a>
            <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 inline-block rounded-full'>Testimonials</a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
