import React from 'react'
import { LoginInputs } from '../lib/defination'
import { useForm, SubmitHandler } from 'react-hook-form'



const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<LoginInputs>();

    const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data)

  return (
    <div className='flex flex-col last:mb-auto h-full'>
     <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <input {...register("username", {required: true})} placeholder='username' className='block border-b-2 border-black pt-4' />
      <input {...register("password", { required: true})} placeholder='password' type='password' className='block border-b-2 border-black pt-4' />
      <div className='flex justify-between items-center'>
      <label className=''>
      <input type="checkbox" {...register("remember_me")}/>
       <span className='pl-2 text-sm '>Remember me</span>
      </label>
      <span className='text-[12px] hover:underline'><a href="/">Forget your password?</a></span>
      </div>
      <input type="submit" className='mt-4 py-4 px-2 bg-black text-white rounded-xl cursor-pointer' />
    </form>
    <div className='h-full flex items-end justify-center'>
        <p className='text-center'>Dont have an account? <a href="/" className='hover:underline text-blue-600 pl-2'> Sign in</a></p>
    </div>
    </div>
  )
}

export default LoginForm