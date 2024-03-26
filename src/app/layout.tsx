import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jesús Velasco Page",
  description: "Created by Next with love",
};

// Esto es un HOC: High Order Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <p className="text-red-600">RootLayout</p>
        {children}
      </body>
    </html>
  );
}
