import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SocialRail from "@/Components/home/SocialRail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dolphine Facilities",
  description: "Established in 2019, Dolphin began with a focused purpose: to create events that bring people, organisations and ideas together. As client requirements expanded, so did our capabilities. What began with event planning evolved into a broader execution platform covering brand activations, advertising, outdoor campaigns, exhibitions, digital communication, customized products, material supply and field operations.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col border-4 border-[#70c7b5]">
        {children}
        <SocialRail />
        </body>
    </html>
  );
}
