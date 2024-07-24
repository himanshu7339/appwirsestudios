import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TopBar from "@/components/common/TopBar";
import WhatApp from "@/components/common/WhatApp";
import { GoogleAnalytics } from '@next/third-parties/google'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Appwisestudios",
  description: "Appwisestudios",
};
console.log(process.env.GTM)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <GoogleAnalytics gaId={process.env.GTM} />
      <WhatApp/>
        <TopBar />
        <Header />
        
        {children}
         <Footer />
      </body>
    </html>
  );
}
