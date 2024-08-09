"use client";
import Link from "next/link";

export function Appbar() {
  const id = "test"
  return (
    <header className="bg-violet-700 text-white px-4 md:px-6 py-2 flex items-center justify-between border-b-4 border-black">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-lg font-bold hover:text-black">LiteCode</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/problems" className="hover:text-black">
          Problems
        </Link>
        <Link href="/contest" className="hover:text-black">
          Contests
        </Link>
        <Link href={`/profile/${id}`} className="hover:text-black">
            Profile
        </Link>
        <Link href="/" className="hover:text-black">
            Logout
        </Link>
      </nav>
    </header>
  );
}