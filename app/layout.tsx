import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap-utilities.css";
import "bootstrap/dist/css/bootstrap-reboot.css";
import "./globals.css";
import { roboto, montserrat, logoFont } from "@/app/fonts";
import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "Fennec Fox",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${logoFont.variable} ${montserrat.variable} ${roboto.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
