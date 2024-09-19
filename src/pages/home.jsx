import React from 'react'
import Carousel from '../components/carousel'
import HomeKVs from '../components/HomeKVs'
import CabinsList from '../components/CabinsList'
import Hero from '../components/hero'
import Features from '../components/features'

export default function Home() {
  return (
    <>
              <div className="overflow-hidden relative">

<Hero>Home</Hero>
</div>
<Features/>
  <Carousel/>
    <HomeKVs/>
    
    </>
  )
}
