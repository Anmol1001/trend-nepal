import React from 'react'
import SignUpForm from './SignUpForm'

const SignUp = () => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
        <div className='flex flex-col gap-4 items-center h-full justify-center'>
      <div>  
        <div className='w-16 h-16 mx-auto'>
            <img src="logo-tn.webp" alt="trend-nepal-logo" className='h-full w-full object-cover'/>
        </div>
        <div className='pb-10'>
            <h3 className='text-4xl font-bold pt-16'>Sign Up</h3>
            <p className='pt-4 text-sm text-slate-600'>Create an account, and let the rewards roll in!</p>
        </div>
        <div className='h-full'>
            <SignUpForm />
        </div>
        </div>
      </div>
    
    </div>
  )
}

export default SignUp