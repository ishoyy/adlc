"use server";
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

import { auth } from "@/lib/auth";

export async function signInAction(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        await auth.api.signInEmail({
            body: { email, password },
        });
        redirect('/admin/dashboard');
    } catch (err: any) {
        // Send the user back to the login page with an encoded message
        const msg = encodeURIComponent(err?.message ?? 'Sign-in failed')
        redirect(`/admin/login?error=${msg}`)
    }
}

export async function signUpAction(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        await auth.api.signUpEmail({
            body: { email, password, name: "Admin" },
        });
        
        redirect('/admin/dashboard');
    } catch (err: any) {
        // Send the user back to the login page with an encoded message
        const msg = encodeURIComponent(err?.message ?? 'Sign-up failed')
        redirect(`/admin/login?error=${msg}`)
    }
}

export async function signOutAction() {
    await auth.api.signOut({
        headers: await headers(), // forward cookies to ensure the session is properly cleared
    })
    redirect('/admin/login')
}