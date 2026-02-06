import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const isProd = process.env.NODE_ENV === "production";

const dbPath = isProd
  ? "/data/database.db"
  : path.join(process.cwd(), "lib/data/database.db");

// ✅ Ensure directory exists (CRITICAL)
const dir = path.dirname(dbPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS members (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    datecreated TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;