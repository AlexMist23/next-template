import NextAuth from "next-auth";

import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Email from "next-auth/providers/email";
import Facebook from "next-auth/providers/facebook";

import PostgresAdapter from "@auth/pg-adapter";

import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PostgresAdapter(pool),
  providers: [
    GitHub,
    Google,
    Facebook,
    //Email({
    //  server: {
    //    host: process.env.SMTP_HOST,
    //    port: Number(process.env.SMTP_PORT),
    //    auth: {
    //      user: process.env.SMTP_USER,
    //      pass: process.env.SMTP_PASSWORD,
    //    },
    //  },
    //  from: process.env.EMAIL_FROM,
    //}),
  ],
  theme: {
    brandColor: "#ea580b",
  },
  pages: {
    signIn: "/auth/signin",
  },
});
