import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing",
  description: "Landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>landing</h1>
        {children}
      </body>
    </html>
  );
}
