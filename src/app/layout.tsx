import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className="w-[100vw] min-h-screen">
      <body className={`${inter.className}`}>
        <main className="w-screen text-center mt-4">
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
