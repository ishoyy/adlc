import { betterAuth, isProduction } from "better-auth";
import Database from "better-sqlite3";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";
import path from "path";
import fs from "fs";
import BetterSqlite3 from "better-sqlite3";
import { FROM_EMAIL, getResend } from "./resend";
import { getResetPasswordEmailHtml } from "./email-template";


const resend = new Resend(process.env.RESEND_API_KEY!);

// Allow overriding the auth DB path via AUTH_DB_PATH env var. This helps
// when running in Docker or when your DB lives in a different folder.
let dbInstance: InstanceType<typeof BetterSqlite3> | null = null;

export function getDb() {
  if (dbInstance) return dbInstance;

  const dbPath = process.env.DB_PATH || path.join(process.cwd(), "lib", "data", "sqlite.db");

  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    console.log("Creating database directory...");
    fs.mkdirSync(dir, { recursive: true });
  }

  dbInstance = new BetterSqlite3(dbPath);
  return dbInstance;
}

function createAuth() {
  const appBase = process.env.BETTER_AUTH_URL ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    "http://localhost:3000";
  return betterAuth({
    database: getDb(),
    trustedOrigins: [appBase],
    baseURL: appBase,

    advanced: {
      useSecureCookies: isProduction,
      cookiePrefix: "adlc",
      crossSubDomainCookies: {
        enabled: false,
      },
    },
    emailAndPassword: {
      enabled: true,
      sendResetPassword: async ({ user, token }) => {
        const clientLink = `${appBase}/admin/reset-password?token=${encodeURIComponent(token)}`;
        try {
          const emailHtml = getResetPasswordEmailHtml(user.email, clientLink);
          const { data, error } = await getResend().emails.send({
            from: FROM_EMAIL,
            to: user.email,
            subject: "Password Reset Request",
            html: emailHtml,
          });
        } catch (error) {
          throw new Error("Failed to send reset password email");
        }
      }
    },
  });
}

export const auth = createAuth();