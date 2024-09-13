import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)

    
        const openNav = isOpen === true ? 'translate-x-[0%]' : 'translate-x-[100%]'
   
  return (
    <div className="sm:hidden">
        <button onClick={()=> setIsOpen(!isOpen)} className='z-50'>MENU</button>
    <nav onClick={()=> setIsOpen(!isOpen)} className={`grid gap-12 px-4 text-xl text-slate-50 absolute w-full h-screen bg-slate-700/50 -z-10 top-0 left-0 justify-center  content-center ${openNav} transition-all duration-500`} >
        <NavLink onClick={()=> setIsOpen(!isOpen)} to='/' className="hover:shadow-md transition duration-300 py-1 px-4 z-50">Home</NavLink>
        <NavLink onClick={()=> setIsOpen(!isOpen)} to='about' className="hover:shadow-md transition duration-300 py-1 px-4 z-50">About</NavLink>
        <NavLink onClick={()=> setIsOpen(!isOpen)} className="hover:shadow-md transition duration-300 py-1 px-4 z-50">Page3</NavLink>
    </nav>
    </div>
  )
}
