import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    await auth.api.signInEmail({ body: { email, password } })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? 'Sign-in failed' }, { status: 400 })
  }
}
