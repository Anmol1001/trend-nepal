import React from 'react'
import Logo from './Logo'
import { ChevronDown } from 'lucide-react'
import SearchCategories from './SearchCategories'
import NavButton from './NavButton'
import HorizontalLine from '../../HorizontalLine'

const Midmenu = () => {
  return (
    <div>
    <div className='container flex gap-4 items-center'>
        <div className='flex w-1/5'>
        <div className='h-24 w-24'>
            <Logo />
        </div>
        <span className='h-24 w-24 flex items-center cursor-pointer'>
            Shop by Category 
            <ChevronDown />
        </span>
        </div>
        <div className='flex items-center w-[960px] h-16'>
            <SearchCategories />
        </div>
        <div>
            <NavButton />
        </div>
        <div className='text-sm text-slate-500'>
            Advanced
        </div>
    </div>
    <HorizontalLine />
    </div>
  )
}

export default Midmenu