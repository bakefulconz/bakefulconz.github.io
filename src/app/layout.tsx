import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import 'react-social-icons/facebook';
import 'react-social-icons/instagram';
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bakeful",
  description: "Home page of Bakeful",
  icons: {
    icon: "/bakeful-circle-logo.png?crop=center&height=64&width=64"
  }  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-NDL7CJ6JPT" />
      <body className={`${inter.className}`}>
        <main className="w-screen md:max-w-[1024px] max-w-[800px] text-center ml-auto mr-auto p-2">
          <Link href="/" className="ml-auto mr-auto">
            <Image src="/banner-image.svg" className="ml-auto mr-auto" priority={true} width="230" height="230" alt="Bakeful logo" />
          </Link>
          <div className="flex md:text-lg text-base font-bold flex-wrap">
            <Link href="/" className="w-1/4 md:w-1/6">Home</Link>
            <Link href="/#products" className="w-1/4 md:w-1/6">Products</Link>
            <Link href="/#faq" className="w-1/4 md:w-1/6">FAQ</Link>
            <Link href="/#contact" className="w-1/4 md:w-1/6">Contact</Link>
            <Link href="/custom" className="w-1/2 md:w-1/6">Custom Orders</Link>
            <Link href="/about" className="w-1/2 md:w-1/6">About</Link>
          </div>          
          <div className="max-w-[800px] ml-auto mr-auto">
            {children}
          </div>
          <Image src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />      
          <div className="mb-5">
            <SocialIcon url="https://www.instagram.com/bakeful.nz" />
            &nbsp;
            <SocialIcon url="https://www.facebook.com/profile.php?id=61572596709689" />
            <br /><br />
            Copyright © {new Date().getFullYear()} Bakeful
          </div>          
        </main>
      </body>
    </html>
  );
}
