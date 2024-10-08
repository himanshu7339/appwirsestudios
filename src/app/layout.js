import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TopBar from "@/components/common/TopBar";
import WhatApp from "@/components/common/WhatApp";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import HamburgerMenu from "@/components/common/HamburgerMenu";
const barlow = Barlow({ subsets: [], weight:['400','700','800'] });

export const metadata = {
  title: "Hire a Professional Freelancer Website Developer!",
  description:
    "Appwisestudios offers premium web development services that fit your budget. Our responsive, user-friendly, and fast-loading websites ensure a top-notch online presence. Contact us to start building your dream website!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className={barlow.className}>
        <WhatApp />
        <TopBar />
        <Header />
        <HamburgerMenu/>

        {children}
        <Footer />
        <GoogleTagManager gtmId="GTM-W6CN9J3W" />
        <GoogleAnalytics gaId="G-1BQK1H600E" />
      </body>
    </html>
  );
}
