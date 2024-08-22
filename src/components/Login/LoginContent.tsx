import React from 'react'
import LoginForm from './LoginForm'

const LoginContent = () => {
  return (
    <div className='w-1/2 flex flex-col gap-4 items-center py-32'>
      <div>  
        <div className='w-16 h-16 mx-auto'>
            <img src="logo-tn.webp" alt="trend-nepal-logo" className='h-full w-full object-cover'/>
        </div>
        <div className='pb-10'>
            <h3 className='text-4xl font-bold pt-16'>Welcome back!</h3>
            <p className='pt-4 text-sm text-slate-600'>Please Enter Your Details</p>
        </div>
        <div className='h-full'>
            <LoginForm />
        </div>
        </div>
      </div>
    
  )
}

export default LoginContent