import React from 'react'
import { assets } from '../assets/assets'


const Navbar = () => {
  return (
    <div className='absolute top-[5px] left-[10px] z-10'>
         

         <img  className='w-[100px] h-[100px]' src={assets.logo} alt="" />
        
         

    </div>
  )
}

export default Navbar