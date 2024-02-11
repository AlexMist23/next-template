'use client'
import { signIn } from "@/lib/auth";
import { getProviders } from "next-auth/react";

export default function Layout() {
  //const providers = getProviders()
  
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button>Sign in with GitHub</button>
      {//providers && <p>{String(providers)}</p>
      }
    </form>
  );
}
