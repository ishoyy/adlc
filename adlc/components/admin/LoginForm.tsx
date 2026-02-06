'use client'
import React from 'react'
import Image from 'next/image'
import { Form } from '../../components/index'
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    password: z.string()
        .min(6, { message: 'Password must be at least 6 characters long.' }),
});
type FormFields = z.infer<typeof schema>;


const LoginForm = () => {

    
    
   const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormFields>({ resolver: zodResolver(schema) });
       const onSubmit: SubmitHandler<FormFields> = async (data) => {
           try {
               await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation
               console.log(data);
           } catch (error) {
               setError("root", { type: "manual", message: "Submission failed" });
           }
   
       };
   

  return (
    <div className=''>
        <div>

            
        <div>
             <div className='mb-6 sm:mb-8 w-full flex justify-center'>
            <div className='w-full max-w-3xl'>
                <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit(onSubmit)}>
                    {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                    <input type="email" className='w-full border p-3 rounded-md' placeholder="Your Email" {...register("email")} />
                    {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                    <input type="password" className='w-full border p-3 rounded-md' placeholder="Your Password" {...register("password")} />
                    <div className="flex justify-center">
                        <button type="submit" className="rounded-full bg-[#FF7300] px-4 py-4 sm:w-40 sm:w-70 text-md sm:text-2xl text-white font-semibold shadow-md transition-all duration-300 hover:bg-[#facc15] hover:shadow-lg active:scale-95" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Become A Member"}</button>
                    </div>
                    {errors.root && <span className='text-red-500'>{errors.root.message}</span>}
                </form>
            </div>
        </div>
        </div>
        </div>
        </div>
  )

}

export default LoginForm