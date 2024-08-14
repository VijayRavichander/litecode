"use client";
import { Button } from "@repo/ui/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function Appbar() {
  const session = useSession();
  const status = session.status;
  const id = session.data ? session.data.user.id : "";
  
  return (
    <header className="bg-black text-white px-4 md:px-6 py-3 flex items-center justify-between border-b-2 border-violet-900">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-lg font-bold hover:text-violet-500">
          LiteCode
        </span>
      </Link>
      {status == "unauthenticated" ? (
        <nav>
          <Button onClick={() => {signIn()}}>SignIn</Button>
        </nav>
      ) : (
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/problems" className="hover:text-violet-500">
            Problems
          </Link>
          <Link href="/contest" className="hover:text-violet-500">
            Contests
          </Link>
          <Link href={`/profile/${id}`} className="hover:text-violet-500">
            Profile
          </Link>
          <Button
            onClick={() => {
              signOut();
            }}
            className="hover:text-violet-500"
          >
            Logout
          </Button>
        </nav>
      )}
    </header>
  );
}
