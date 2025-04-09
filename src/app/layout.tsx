import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bakeful",
  description: "Home page of Bakeful",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="w-[800px] text-center ml-auto mr-auto">
          <Image src="/banner-image.svg" className="ml-auto mr-auto" width="800" height="230" alt="Bakeful logo" />
          <div className="flex text-lg font-bold">
            <Link href="/" className="flex-1">Home</Link>
            <Link href="/#products" className="flex-1">Products</Link>
            <Link href="/#faq" className="flex-1">FAQ</Link>
            <Link href="/#contact" className="flex-1">Contact</Link>
            <Link href="/about" className="flex-1">About</Link>
          </div>
          <div>
            {children}
          </div>
          <Image src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />      
          <div className="mb-5">
            Copyright © {new Date().getFullYear()} Bakeful
          </div>          
        </main>
      </body>
    </html>
  );
}
