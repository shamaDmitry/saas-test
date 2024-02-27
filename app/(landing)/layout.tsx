import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import Footer from "@/Components/landing/shared/Footer";
import Header from "@/Components/landing/shared/Header";

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={`${inter.className} `}>
        <Theme className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </Theme>
      </body>
    </html>
  );
}
