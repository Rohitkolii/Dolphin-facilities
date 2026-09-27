import { Playfair_Display, Cormorant_Garamond } from "next/font/google";

// Shared display font — same as home page / Navbar / About.
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const display = { fontFamily: playfair.style.fontFamily };

// Luxury serif used for the hero's emphasis line (light, editorial).
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const luxury = { fontFamily: cormorant.style.fontFamily };
