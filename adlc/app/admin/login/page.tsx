"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/dashboard/submissions";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl,
    });

    // Usually redirect happens automatically. If it doesn't:
    if (res?.error) setErr("Invalid email or password.");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow space-y-4"
      >
        <h1 className="text-2xl font-semibold">Admin Login</h1>

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
        />

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <button className="w-full rounded-lg bg-black py-3 text-white font-semibold">
          Sign in
        </button>

        {err && <p className="text-sm text-red-600">{err}</p>}
      </form>
    </main>
  );
}