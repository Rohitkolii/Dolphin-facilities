import { Playfair_Display, Cormorant_Garamond } from "next/font/google";

// Shared display font — same as About / home page / Navbar, kept
// consistent across the whole site for the "luxury" look.
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const display = { fontFamily: playfair.style.fontFamily };

// Luxury serif — same as AboutHero, used for italic accent lines / CTA lines.
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const luxury = { fontFamily: cormorant.style.fontFamily };
