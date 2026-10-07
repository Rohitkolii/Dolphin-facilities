import localFont from "next/font/local";

export const playfair = localFont({
  src: "../assets/fonts/playfair-display-latin.woff2",
  weight: "500 700",
  variable: "--font-display",
  display: "swap",
});

export const cormorant = localFont({
  src: [
    {
      path: "../assets/fonts/cormorant-garamond-latin-normal.woff2",
      weight: "500 700",
      style: "normal",
    },
    {
      path: "../assets/fonts/cormorant-garamond-latin-italic.woff2",
      weight: "500 700",
      style: "italic",
    },
  ],
  display: "swap",
});

export const geistSans = localFont({
  src: "../assets/fonts/geist-latin.woff2",
  weight: "100 900",
  variable: "--font-geist-sans",
  display: "swap",
});

export const geistMono = localFont({
  src: "../assets/fonts/geist-mono-latin.woff2",
  weight: "100 900",
  variable: "--font-geist-mono",
  display: "swap",
});