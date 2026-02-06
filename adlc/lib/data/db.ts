import Database from "better-sqlite3";
import path from "path";

const dbPath =
  process.env.NODE_ENV === "production"
    ? "/data/database.db"
    : path.join(process.cwd(), "lib/data/database.db");

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