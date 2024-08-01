import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TopBar from "@/components/common/TopBar";
import WhatApp from "@/components/common/WhatApp";
import { GoogleTagManager } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Appwisestudios | High-Quality Web Development at Affordable Prices",
  description: "Appwisestudios offers premium web development services that fit your budget. Our responsive, user-friendly, and fast-loading websites ensure a top-notch online presence. Contact us to start building your dream website!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WhatApp />
        <TopBar />
        <Header />

        {children}
        <Footer />
        <GoogleTagManager gtmId={process.env.GTM} />
      </body>
    </html>
  );
}
