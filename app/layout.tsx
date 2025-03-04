import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/store/providers";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather Dashboard",
  description: "Weather forecast application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header>
            <div className="bg-gray-600 text-white p-4 shadow-md border-b border-gray-500">
              <h1 className="text-2xl md:text-4xl font-bold">
                Weather Dashboard
              </h1>
              <div className="space-x-4 mt-4">
                <Link href="/" className="text-white hover:underline">Home</Link>
                <Link href="/about" className="text-white hover:underline">About</Link>
              </div>
            </div>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
