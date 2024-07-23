import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TopBar from "@/components/common/TopBar";
import WhatApp from "@/components/common/WhatApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Appwisestudios",
  description: "Appwisestudios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <WhatApp/>
        <TopBar />
        <Header />
        
        {children}
         <Footer />
      </body>
    </html>
  );
}
