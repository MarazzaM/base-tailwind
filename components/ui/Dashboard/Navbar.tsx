import React from 'react'
import Image from 'next/image'
import { BsBell } from 'react-icons/bs'

function Navbar() {
  return (
    <nav className='bg-primary  '>
        <div className='flex'>

          <div className='p-2'>
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
</div>
          </div>

        </div>
    </nav>
  )
}

export default Navbar