import React from 'react'
import Hero from '../components/hero'
import Features from '../components/features'

export default function About() {
  
  
  return (
    <>
              <div className="overflow-hidden relative">

<Hero>About</Hero>
</div>
<Features/>
<div className='bg-gradient-to-br from-slate-100 to-slate-300'>
  <div className='grid grid-cols-2 content-center justify-center justify-items-center items-center max-[920px]:grid-cols-1 '>
    <div className='overflow-hidden'>

    <img src='about.webp' alt='about' className='hover:scale-105 transition-all duration-1000'/>
    </div>
<div className='px-12  grid w-[60%] gap-3 max-[1220px]:w-[80%] max-[920px]:row-start-1 max-[920px]:py-12 max-[920px]:w-[60%] max-sm:w-[80%] max-[475px]:w-[100%]'>
  <h2 className='text-4xl text-center'>What we believe</h2>
  <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis corrupti enim amet aspernatur natus inventore ratione veniam, ipsam consequatur dignissimos earum dolore odit consectetur molestiae beatae dolor possimus maiores. Doloremque!</p>
</div>
  </div>
</div>
    
    </>
  )
}
