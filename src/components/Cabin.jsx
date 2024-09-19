import React from 'react'

export default function Cabin({cabin}) {
    const badDisc = cabin.discount >= 0.8 ? 'grayscale-[70] opacity-80' : '';
  return  <div>
    {cabin.discount === 0 ? <div className='grid grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:shadow-md gap-6 max-[500px]:gap-1'>
        <img src={cabin.image}/>
        <div className='grid max-[500px]:p-3'>
            <h3 className='text-2xl text-slate-800'>{cabin.name}</h3>
            <p>{cabin.info.slice(0,50)}...</p>
            <p className='text-xl font-bold'>${cabin.price - cabin.price * cabin.discount} <span className='text-base'>/ Night</span></p>
            <button className='text-lg text-slate-100 bg-slate-600 px-3 py-2 transition-all duration-300 hover:opacity-70'>Book now!</button>
        </div>
    </div> : <div className={`grid grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:shadow-md gap-6 max-[500px]:gap-1 ${badDisc}`}
   >
        <img src={cabin.image}/>
        <div className='grid max-[500px]:p-3'>
            <h3 className='text-2xl text-slate-800'>{cabin.name}</h3>
            <p>{cabin.info.slice(0,50)}...</p>
            {cabin.discount < 0.8 ? <>
            <div className='flex gap-2 m-2'>
            <p className='text-sm font-bold line-through opacity-50'>${cabin.price}</p>
            <p className='text-xl font-bold'>${cabin.price - cabin.price * cabin.discount} <span className='text-base'>/ Night</span></p>
            </div>
            <button className='text-lg text-slate-100 bg-slate-600  px-3 py-2 transition-all duration-300 hover:opacity-70'>Book now!</button>
            </> : <p className='text-xl font-bold'>Sold out</p>}
        </div>
    </div>}
    
    </div>
  
}
