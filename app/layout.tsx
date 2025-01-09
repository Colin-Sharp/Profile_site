import type { Metadata } from "next";
// import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colin Sinclair-Smith",
  description: "Profile site about Colin Sinclair-Smith",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-100 w-full sm:dark:bg-black sm:bg-white  sm:dark:bg-grid-white/[0.2] sm:bg-grid-black/[0.2] relative ">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center sm:dark:bg-black sm:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          {/* <Header></Header> */}
          <main className="min-h-screen py-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-screen-lg mx-auto">
            {children}
          </main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
