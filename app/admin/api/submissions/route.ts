import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

    const { getDb } = await import("@/lib/data/db");
    const db = getDb();
    const stmt = db.prepare(`
      INSERT INTO members (name, email, message)
      VALUES (?, ?, ?)
    `);

    stmt.run(name, email, message);

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Server error" },
      { status: 500 }
    );
  }
}

// GET /api/submissions
export async function GET() {
  const { getDb } = await import("@/lib/data/db");
  const db = getDb();
  const stmt = db.prepare(`
    SELECT * FROM members
    ORDER BY datecreated DESC
  `);

  return NextResponse.json(stmt.all());
}
