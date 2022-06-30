import React from 'react'

function Footer() {
  return (
    <div className='py-5 text-center text-gray-300 rounded-t-lg bg-slate-800'>
        <a href="#hero" className="block text-xl font-semibold md:text-2xl">Etisha Jain</a>
        <a href="mailto:jainetisha0714@gmail.com" className="text-sm md:text-md hover:text-indigo-500">jainetisha0714@gmail.com</a>
        <p className="mt-2 text-xs text-gray-500 ">
        © Etisha Jain Creative {new Date().getFullYear()}. All rights reserved
        </p>
    </div>
  )
}

export default Footer