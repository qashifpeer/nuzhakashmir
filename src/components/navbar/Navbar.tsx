import { links } from '@/contants'
import Link from 'next/link'
import React from 'react'
import NavLinks from './navLinks/NavLinks'

const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-between padding-container'>
      <div>NuZha</div>
      <div>
        <NavLinks />
      </div>
      </div>

    </nav>
  )
}

export default Navbar