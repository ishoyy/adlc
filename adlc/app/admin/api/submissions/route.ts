import { NextResponse } from "next/server";
import db from "@/lib/data/db";

export const runtime = "nodejs";

// POST /api/submissions
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const stmt = db.prepare(`
      INSERT INTO members (name, email, message)
      VALUES (?, ?, ?)
    `);

    stmt.run(name, email, message);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("DB ERROR:", err);
    return NextResponse.json(
      { error: err.message ?? "Server error" },
      { status: 500 }
    );
  }
}

// GET /api/submissions
export async function GET() {
  const stmt = db.prepare(`
    SELECT * FROM members
    ORDER BY datecreated DESC
  `);

  return NextResponse.json(stmt.all());
}