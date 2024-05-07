import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Maid from "../components/Actors/Maid";
import Client from "../components/Actors/Client";
 const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "reate Next App",
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
      {/* <Client/> */}
      </>
      {children}
    </body>
  </html>
  );
}
