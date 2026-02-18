import React from 'react'
import { getDb } from '@/lib/data/db'
import { auth } from '@/lib/auth'
import { signOutAction } from "../../actions/auth"
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Logo from '../../../public/LOGO.png'
import Link from 'next/link'

type Member = {
    id: number
    name: string
    email: string
    message: string
    datecreated?: string
}
export const dynamic = 'force-dynamic'

export default async function Page() {
    // Server-side: read all members from the SQLite database
    const db = getDb()
    const stmt = db.prepare('SELECT id, name, email, message, datecreated FROM members ORDER BY id DESC')
    const members: Member[] = stmt.all()

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        redirect("/admin/login")
    }

    if (!session && window.location.pathname == '/admin/dashboard') {
        return (
            <main className="p-6">
                <div className='flex flex-row items-center justify-between mb-6'>
                <p>You must be signed in to view this page.</p>
                <Link href="/admin/login" className="rounded-xl bg-[#16205B]  px-6 py-2 w-full md:w-auto text-md text-white font-semibold shadow-md transition-all duration-300 hover:bg-[#FF7300] active:scale-95">Go to Login</Link>
                </div>
            </main>
        )
    }

    return (
        <main className="p-6">
            <div className='flex flex-row items-center justify-between mb-6'>
            <Image src={Logo} alt='Logo' width={150} height={20} priority />
            <form action={signOutAction} className="flex justify-end mb-4">
                <button type="submit" className="rounded-xl bg-[#16205B]  px-6 py-2 w-full md:w-auto text-md text-white font-semibold shadow-md transition-all duration-300 hover:bg-[#FF7300] active:scale-95">Sign Out</button>
            </form>
            </div>
            <h1 className="text-3xl font-semibold mb-10 flex justify-center ">Admin Dashboard</h1>

            <div className='shadow-xl rounded-lg p-6 bg-white border-2 border-gray-200'>

                {members.length === 0 ? (
                    <p>No submissions yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-left">ID</th>
                                    <th className="px-4 py-2 text-left">Name</th>
                                    <th className="px-4 py-2 text-left">Email</th>
                                    <th className="px-4 py-2 text-left">Message</th>
                                    <th className="px-4 py-2 text-left">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map((m) => (
                                    <tr key={m.id} className="border-t">
                                        <td className="px-4 py-2 align-top">{m.id}</td>
                                        <td className="px-4 py-2 align-top">{m.name}</td>
                                        <td className="px-4 py-2 align-top">{m.email}</td>
                                        <td className="px-4 py-2 align-top max-w-xl wrap-break-word">{m.message}</td>
                                        <td className="px-4 py-2 align-top">{m.datecreated ?? ''}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                )}
            </div>
        </main>
    )
}
