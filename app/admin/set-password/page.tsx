"use client"

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import StockAdmin from '../../public/stockadmin.jpg'
import LogoIcon from "../../public/logo-icon.png"
import { signInAction, signUpAction } from '@/app/actions/auth'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// avoid useSearchParams/usePathname during prerender — use window.location instead
import { IoIosClose } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import Link from 'next/link'
import router from 'next/router';
import { useParams } from 'next/navigation'



const schema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long.' }),
})
type FormFields = z.infer<typeof schema>

export default function Page() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)


  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({ resolver: zodResolver(schema) })

  const onSubmit = async (values: FormFields) => {
    setIsSubmitting(true)
    router.push('/admin/set-password')
    
  }

  return (
    <div>
      <div className='flex flex-row items-end gap-4 p-4 absolute'>
        <IoIosHome onClick={() => window.location.assign('/')} width={50} height={20} color={'#FF7300'} className="text-3xl cursor-pointer transition" />
        <Link href="/">
          <p className='font-light text-[#16205B] hover:text-[#FF7300] transition-all'>Back to Homepage</p>
        </Link>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white border-2 border-[#16205B] rounded-lg shadow-lg ">



        <div className="w-[40%] bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-stretch gap-8">
          <div className="w-full ">
            <div className="w-full">
              <div className="bg-white p-6 md:p-8 rounded-md  mt-8  ">
                <h2 className="text-xl font-semibold mb-2">Reset Password</h2>
                  <p className='text-sm text-[#656fa8] mb-10'>Enter your email to send a password reset link.</p>

                <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                  <label className="text-sm font-medium">Email</label>
                  {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
                  <input {...register('email')} name="email" type="email" required className='w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16205B]' placeholder="your@email.com" />

                 
                  <div className="flex justify-center flex-col items-center ">
                    <button type="button" className="rounded-xl bg-[#16205B] mt-4 px-6 py-2  md:w-auto text-md text-white font-semibold shadow-md transition-all duration-300 hover:bg-[#0f1a4a] active:scale-95" disabled={isSubmitting}>{isSubmitting ? 'Sending Reset Link…' : 'Send Reset Link'}</button>
                    <Link href="/admin/login" className="ml-4 rounded-xl bg-gray-300 mt-4 px-6 py-2 md:w-auto text-md">Back to Login</Link>
                  </div>

                </form>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  )
}

// Simple client-side toast that can be used across the page
function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-white border-3 border-[#e70000] px-4 py-3 rounded-md shadow-lg flex items-start gap-3">
        <div className="flex-1">
          <p className="font-semibold text-[#e70000]">Error</p>
          <p className="text-sm">{message}</p>
        </div>
        <button onClick={onClose} aria-label="Close error" className="text-xl w-9 h-9 flex rounded-full bg-white/10 hover:bg-white/20 transition">×</button>
      </div>
    </div>
  )
}

// Render toast when serverError exists
// (placed below to keep the main return simple)
export function PageToastGuard({ message, onClose }: { message: string | null; onClose: () => void }) {
  if (!message) return null
  return <Toast message={message} onClose={onClose} />
}
