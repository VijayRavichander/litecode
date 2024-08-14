import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Appbar } from "../components/Appbar";
import { Toaster } from "@ui/components/ui/toaster"
import { Providers } from "./providers/provider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "LiteCode",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 text-white`}>
        <Providers>
        <div>
          <Appbar />
        </div>
        <div className="min-h-screen">
          {children}
        </div>
        <Toaster />
      </Providers>
      </body>
    </html>
  );
}
