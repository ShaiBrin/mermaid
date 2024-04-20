import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Maid from "../components/Actors/Client/Maid";
 const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <>
      <Maid/>
      </>
      {children}
    </body>
  </html>
  );
}
