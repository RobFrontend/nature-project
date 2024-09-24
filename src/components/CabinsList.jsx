import React, { useState } from 'react'
import cabins from '../data/cabins'
import Cabin from './Cabin'

export default function CabinsList() {
  const [isOpen, setIsOpen] = useState(true);
  const infoOpen = isOpen ? 'visible' : 'hidden';
  const [isSorted, setIsSorted] = useState('all');
  const [isPriceRange, setIsPriceRange] = useState(cabins.filter(c => c.discount < 0.8).sort((a,b) => (b.price - b.price * b.discount)  - (a.price - a.price * a.discount)).map(c => c.price - c.price * c.discount).at(0))
  
  let cab = cabins.filter(c => c.price - c.price * c.discount <= isPriceRange);
  if(isSorted === 'all') cab.sort((a,b)=> a.id - b.id);
  if(isSorted === 'price-up') cab.sort((a,b) => (a.price - a.price * a.discount)  - (b.price - b.price * b.discount));
  if(isSorted === 'price-down') cab.sort((a,b) => (b.price - b.price * b.discount)  - (a.price - a.price * a.discount));
  if(isSorted === 'discount') cab = cab.filter(c => c.discount > 0);
  if(isSorted === 'avaible') cab = cab.filter(c => c.discount < 0.8);
  
  let min = cabins.filter(c => c.discount < 0.8).sort((a,b) => (a.price - a.price * a.discount)  - (b.price - b.price * b.discount)).map(c => c.price - c.price * c.discount).at(0);
  let max = cabins.filter(c => c.discount < 0.8).sort((a,b) => (b.price - b.price * b.discount)  - (a.price - a.price * a.discount)).map(c => c.price - c.price * c.discount).at(0);
  
  
  
  return (
    <>
    <div className='bg-gradient-to-br from-slate-100 to-slate-300 py-12 min-h-screen'>
<h2 className="text-4xl text-center uppercase font-bold max-md:text-2xl max-[550px]:text-xl text-slate-600">Cabins to book</h2>
<div className='grid content-center justify-center'>
    <form className='pt-4 flex gap-24 max-w-[1200px] max-sm:gap-4 max-sm:flex-col'>
    <div className='grid self-start'>
        <label className='flex gap-2 content-center justify-center'>
         <span className='text-sm opacity-80'>${min}</span>
         <input type='range' value={isPriceRange} min={min} max={max} onChange={(e) => setIsPriceRange(price => e.target.value)} className='w-[300px] drop-shadow-sm self-center justify-self-center max-[400px]:w-[200px]'/>
         <span className='text-sm opacity-80'>${max}</span>
        </label>
        <span className='text-center'>${isPriceRange}</span>
    </div>
      <label className='flex gap-1 h-min'>
       <p>Sort by: </p>
       <select className='rounded-md' onChange={(e)=> setIsSorted(s => s = e.target.value)}>
       <option value='all' >--</option>
       <option value='price-up' >Price up</option>
       <option value='price-down' >Price down</option>
       <option value='discount'>Discount</option>
       <option value='avaible'>Avaible</option>
     </select>
      </label>

     
    </form>
</div>
    <div className='pt-8 px-8 grid grid-cols-2 gap-12 content-center justify-center max-w-[1200px] mx-auto max-[960px]:grid-cols-1 max-[960px]:max-w-[600px]'>
    {cab.map(cabin => <Cabin cabin={cabin} key={cabin.id} />)}
    </div>
    </div>
     
    <div className={`bg-red-500 text-red-50 p-4 fixed left-[50%] translate-x-[-50%] top-0 z-50 rounded-b-md ${infoOpen}`} >
    {cabins.map(cabin => cabin.discount >= 0.8 ? <p className='text-sm text-center' key={cabin.id}>{cabin.name} has {cabin.discount * 100}% discount.<br></br>It shows as 'sold out' cabin.</p>: null)}
    <div className='grid content-center justify-center pt-2'>
      <button onClick={()=> setIsOpen(!isOpen)} className='bg-red-700 text-sm text-slate-50 px-2 py-1 rounded-sm hover:opacity-75 transition-all duration-300 shadow-md'>Close info</button>
    </div>
    </div> 
    </>
  )
}
