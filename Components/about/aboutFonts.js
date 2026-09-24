import { Playfair_Display, Cormorant_Garamond } from "next/font/google";

// Shared display font for the whole about section — same as home page / Navbar.
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const display = { fontFamily: playfair.style.fontFamily };

// Luxury serif used ONLY in AboutHero (light, high-contrast, editorial).
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const luxury = { fontFamily: cormorant.style.fontFamily };