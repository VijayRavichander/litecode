"use client";
import Link from "next/link";

export function Appbar() {
  return (
    <header className="bg-violet-700 text-white px-4 md:px-6 py-2 flex items-center justify-between border-b-4 border-black">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-lg font-bold hover:text-black">LiteCode</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/problems" className="hover:underline">
          Problems
        </Link>
        <Link href="/profile/:id" className="hover:underline">
            Profile
        </Link>
        <Link href="/" className="hover:underline">
            Logout
        </Link>
      </nav>
    </header>
  );
}