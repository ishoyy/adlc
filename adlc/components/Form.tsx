'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoIosClose } from "react-icons/io";
import { useState } from 'react';
import LogoIcon from '../public/logo-icon.png'
import { z } from 'zod';
import Image from 'next/image';
const schema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    name: z.string()
        .min(1, { message: 'Please enter your name.' })
        .regex(/^[A-Za-z]+$/, { message: 'Name can only contain letters.' }),
    message: z.string().min(1, { message: 'Please enter a message.' })
});

type FormFields = z.infer<typeof schema>;

const Form = () => {

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

        <div className='mb-6 sm:mb-8 w-full flex justify-center'>
            <div className='w-full max-w-3xl'>
                <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit(onSubmit)}>
                    {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                    <input type="text" className='w-full border p-3 rounded-md' placeholder="Your Name" {...register("name")} />
                    {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                    <input type="email" className='w-full border p-3 rounded-md' placeholder="Your Email" {...register("email")} />
                    {errors.message && <span className='text-red-500'>{errors.message.message}</span>}
                    <textarea rows={6} className='w-full border p-3 rounded-md  min-h-[10rem] resize-y' placeholder="Your Message" {...register("message")} />
                    <div className="flex justify-center">
                        <button type="submit" className="rounded-full bg-[#FF7300] px-4 py-4 sm:w-40 sm:w-70 text-md sm:text-2xl text-white font-semibold shadow-md transition-all duration-300 hover:bg-[#facc15] hover:shadow-lg active:scale-95" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Become A Member"}</button>
                    </div>
                    {errors.root && <span className='text-red-500'>{errors.root.message}</span>}
                </form>
            </div>
        </div>

    )
}

export default Form