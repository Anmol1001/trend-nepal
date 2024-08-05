import { BellIcon, ShoppingCart } from 'lucide-react'
import React from 'react'


const TopmenuContent = () => {
  return (
    <div className='flex justify-between pb-4'>
        <div className='flex gap-8'>
            <div>Hi! <span className='text-blue-600 underline'><a href="/">Sign In</a></span> or <span className='text-blue-600 underline'><a href="/">register</a></span></div>
            <div><a href="/">Daily Deals</a></div>
            <div><a href="/">Help & Contact</a></div>
        </div>
        <div className='flex gap-8'>
            <div>Sell</div>
            <div>Trends</div>
            <div><BellIcon /></div>
            <div><ShoppingCart/></div>
        </div>
    </div>
  )
}

export default TopmenuContent