import React, { useState } from 'react'
import Hero from '../components/hero'
import Features from '../components/features'

export default function About() {
  const [toTop, setToTop] = useState(0)
  const [toLeft, setToLeft] = useState(600)
  const [isRotate, setIsRotate] = useState(0)


  const key = (e) => {
    e.preventDefault()
    console.log(e.key)
    if(e.key === 'w') {
      setToTop(t => t + 10)
      setIsRotate(0)
    }
    if(e.key === 's') {
      setToTop(t => t - 10)
      setIsRotate(180)
      
    }
    if(e.key === 'd') {
      setToLeft(l => l + 10)
      setIsRotate(90)
    }
    if(e.key === 'a') {
      setToLeft(l => l - 10)
      setIsRotate(-90)
    }
    if(e.key === 'q') {
      setToTop(t => t + 10)
      setToLeft(l => l - 10)
      setIsRotate(-25)
    }
    if(e.key === 'e') {
      setToTop(t => t + 10)
      setToLeft(l => l + 10)
      setIsRotate(25)
    }
    console.log(toTop)
    console.log(rotate)
  }
  let isTop = `${toTop}`
  let isLeft = `${toLeft}`
  let rotate = `${isRotate}`
  
  return (
    <>
              <div className="overflow-hidden relative">

<Hero>About</Hero>
</div>
<Features/>
<button onKeyDown={key} className='min-h-screen relative'>
  <img   src='car.jpg' className={`max-w-[48px] absolute transition-transform duration-300  ease-in-out `} style={{bottom: `${isTop}px`, left: `${isLeft}px`, transform: `rotate(${rotate}deg)`}}/>

</button>
    
    </>
  )
}
