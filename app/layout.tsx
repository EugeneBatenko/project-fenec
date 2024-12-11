import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap-utilities.css";
import "bootstrap/dist/css/bootstrap-reboot.css";
import "./globals.css";
import {roboto, montserrat, logoFont, fontawsome} from "@/app/fonts";
import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { Loading } from "@/ui/loading/Loading";
import React, {Suspense} from "react";
import type { Viewport } from 'next';

export const metadata: Metadata = {
  title: "Fennec Fox",
  description: "Personal website",
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${logoFont.variable} ${montserrat.variable} ${roboto.variable} ${fontawsome.variable}`}
      >
      <Suspense fallback={<Loading/>}>
        <Header />
            <main>{children}</main>
        <Footer/>
      </Suspense>
      </body>
    </html>
  );
}
