import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gradient-to-tr from-slate-100 to-slate-300 p-8 flex gap-12 content-center justify-center'>

    <p className='text-slate-800/50 font-semibold'>&copy; {new Date().getFullYear()} By robfrontend</p>
    </div>
  )
}
