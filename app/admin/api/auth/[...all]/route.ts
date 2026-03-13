import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextResponse } from "next/server";

const { GET: authGET, POST: authPOST } = toNextJsHandler(auth);

// CORS headers for better-auth
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Handle preflight requests
export async function OPTIONS() {
  return new Response(null, { headers: corsHeaders });
}

// Wrap handlers with CORS headers
export async function GET(request: Request) {
  const response = await authGET(request);
  if (response instanceof Response) {
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
  }
  return response;
}

export async function POST(request: Request) {
  const response = await authPOST(request);
  if (response instanceof Response) {
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
  }
  return response;
}