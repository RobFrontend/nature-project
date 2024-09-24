import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeKVs() {


  return (
    <>
    <div className='px-8 py-12 bg-gradient-to-tr from-slate-100 to-slate-300 p-8 '>
        <div className='grid gap-12 content-center justify-center max-w-[1200px] mx-auto pb-8'>

        <h2 className="text-4xl uppercase font-bold max-md:text-2xl max-[550px]:text-xl text-slate-600">Mountain River Serenity</h2>
        <div className='grid grid-cols-2 gap-8 h-min px-4 max-[960px]:grid-cols-1'>
            <img className='max-[960px]:row-start-1 max-[960px]:max-w-[400px] justify-self-center max-[500px]:max-w-full' src='kv1.webp'/>
            <div className='self-center'>
            <h3 className='text-3xl font-semibold text-slate-700 mb-8'>Field, British Columbia</h3>
                <p className='max-sm:text-justify'>Field is an unincorporated community of approximately 169 people located in the Kicking Horse River valley of southeastern British Columbia, Canada, within the confines of Yoho National Park. At an elevation of 1,256 m (4,121 ft), it is 27 km (17 mi) west of Lake Louise along the Trans-Canada Highway, which provides the only road access to the town. The community is named for Cyrus West Field of Transatlantic telegraph cable fame, who visited the area in 1884.</p>
                <div className='grid content-center justify-center pt-12'>
                <Link to='https://en.wikipedia.org/wiki/Pragser_Wildsee' target='_blank' className='px-6 py-2 bg-slate-700 text-slate-100 text-2xl shadow-md transition-all duration-500 hover:opacity-80'>Learn More</Link>
                </div>
                </div>
        </div>
        <div className='grid grid-cols-2 gap-8 h-min px-4 max-[960px]:grid-cols-1'>
            <div className='self-center'>
                <h3 className='text-3xl font-semibold text-slate-700 mb-8'>Lago di Braies</h3>
                <p className='max-sm:text-justify'>The Lago di Braies is a natural lake in the Prags Dolomites in South Tyrol, Italy. It belongs to the municipality of Prags which is located in the Prags Valley.</p>
                <p className='max-sm:text-justify'>While the lake earned the nickname "Pearl of the Alps" due to its increasing popularity among tourists, tourism had become excessive as of 2020, with 17,000 people visiting the area on a single summer day. As of the summer 2023, vehicle access was restricted because of overtourism.</p>
                <div className='grid content-center justify-center pt-12'>
                <Link to='https://en.wikipedia.org/wiki/Pragser_Wildsee' target='_blank' className='px-6 py-2 bg-slate-700 text-slate-100 text-2xl shadow-md transition-all duration-500 hover:opacity-80'>Learn More</Link>
                </div>
                </div>
            <img className='max-[960px]:row-start-1 max-[960px]:max-w-[400px] justify-self-center max-[500px]:max-w-full' src='kv2.webp'/>
        </div>
        </div>
    </div>
    <div className='px-8 py-12 bg-gradient-to-tr from-slate-700 to-slate-900 p-8'>
        <div className='grid gap-12 content-center justify-center max-w-[1200px] mx-auto pb-8'>

        <h2 className="text-4xl uppercase font-bold max-md:text-2xl max-[550px]:text-xl text-slate-400">Noctural Landscapes</h2>
        <div className='grid grid-cols-2 gap-8 h-min px-4 max-[960px]:grid-cols-1'>
            <img className='max-[960px]:row-start-1 max-[960px]:max-w-[400px] justify-self-center max-[500px]:max-w-full' src='kv3.webp'/>
            <div className='self-center'>
            <h3 className='text-3xl font-semibold text-slate-300 mb-8'>Field, British Columbia</h3>
                <p className='text-slate-100 max-sm:text-justify'>The Dolomites are a mountain range in northeastern Italy. They form part of the Southern Limestone Alps and extend from the River Adige in the west to the Piave Valley in the east. The northern and southern borders are defined by the Puster Valley and the Sugana Valley. The Dolomites are in the regions of Veneto, Trentino-Alto Adige/Südtirol and Friuli-Venezia Giulia, covering an area shared between the provinces of Belluno, Vicenza, Verona, Trentino, South Tyrol, Udine and Pordenone.</p>
                <div className='grid content-center justify-center pt-12'>
                <Link to='https://en.wikipedia.org/wiki/Dolomites' target='_blank' className='px-6 py-2 bg-slate-200 text-slate-700 text-2xl shadow-md transition-all duration-500 hover:opacity-80'>Learn More</Link>
                </div>
                </div>
        </div>
        <div className='grid grid-cols-2 gap-8 h-min px-4 max-[960px]:grid-cols-1'>
            <div className='self-center'>
                <h3 className='text-3xl font-semibold text-slate-300 mb-8'>Latemar Dolomites</h3>
                <p className='text-slate-100 max-sm:text-justify'>The Latemar landscape consists primarily of imposingly rugged rock formations and vividly blossoming meadows in its lower reaches and is, quite simply, breathtaking - UNESCO has stated that its flora and fauna are highly deserving of protection. This mountain massif certainly lives up to the mystical reputation of the Dolomites! The Latemar - a mountain to enjoy in all of its breathtaking majesty and delicate beauty.</p>
                <div className='grid content-center justify-center pt-12'>
                <Link to='https://en.wikipedia.org/wiki/Latemar' target='_blank' className='px-6 py-2 bg-slate-200 text-slate-700 text-2xl shadow-md transition-all duration-500 hover:opacity-80'>Learn More</Link>
                </div>
                </div>
            <img className='max-[960px]:row-start-1 max-[960px]:max-w-[400px] justify-self-center max-[500px]:max-w-full' src='kv4.webp'/>
        </div>
        </div>
    </div>
    </>
  )
}
