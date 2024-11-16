import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./containers/Footer";
import Menu from "./containers/Menu";
import MobileMenu from "./containers/MobileMenu";

const playtime = localFont({
  src: "./fonts/playtime.ttf",
  variable: "--font-playtime",
  weight: "100 400 900",
});
const openSans = localFont({
  src: "./fonts/OpenSans-Light.ttf",
  variable: "--font-open-sans",
  weight: "100 400 900",
});

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

export const metadata: Metadata = {
  title: "VFO Studio",
  description: "An inspiring art and design studio by Victor Freire Oliveira.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={`${playtime.variable} ${openSans.variable}`}>
        <Menu />
        <MobileMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
