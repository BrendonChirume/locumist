import type {Metadata} from "next";
import {Radio_Canada} from "next/font/google";
import "./globals.css";
import React from "react";

const radioCanada = Radio_Canada({
    subsets: ["canadian-aboriginal"],
});


export const metadata: Metadata = {
    title: "Locumist",
    description: "Find and post flexible locum positions with ease. Connecting professionals to opportunities world wide.",
};

export default function RootLayout(
  {
      children,
  }: Readonly<{
      children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
      <body className={`${radioCanada.className}  antialiased`}>
      <main>
          {children}
      </main>
      </body>
      </html>
    );
}
