import React from 'react'
import { SignUpInputs } from '../lib/defination'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<SignUpInputs>();

    const registerUser = async (newUser: any) => {
      const response = await axios.post('http://localhost:3000/api/users', newUser)
      return response.data;
    } 

    const registerForm = useMutation({
      mutationFn: registerUser
    })

    const onSubmit: SubmitHandler<SignUpInputs> = (data) => {
      registerForm.mutate(data);      
    }

  return (
    <div className='flex flex-col last:mb-auto h-full'>
     <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <input 
      {...register("name",
       {required: true,
        setValueAs: value => value.trim()})} 
        placeholder='Your Name' 
        className='block border-b-2 border-black pt-4' />

      <input {...register("email", {required: true})} placeholder='Email' type='email' className='block border-b-2 border-black pt-4' />
      <input {...register("password", { required: true })} placeholder='password' type='password' className='block border-b-2 border-black pt-4' />
    
      <label className='text-left'>
      <input type="checkbox" {...register("accept_terms")}/>
       <span className='pl-2 text-sm '>I accept all the terms</span>
      </label>
      
      <input type="submit" className='mt-4 py-4 px-2 bg-black text-white rounded-xl cursor-pointer' />
    </form>
    <div className='h-full flex items-end justify-center'>
        <p className='text-center'>Dont have an account? <a href="/" className='hover:underline text-blue-600 pl-2'> Sign in</a></p>
    </div>
    </div>
  )
}

export default SignUpForm