import { playfair, cormorant } from "@/lib/fonts";

// Shared display font — same as About / home page / Navbar, kept
// consistent across the whole site for the "luxury" look.
export const display = { fontFamily: playfair.style.fontFamily };

// Luxury serif — same as AboutHero, used for italic accent lines / CTA lines.
export const luxury = { fontFamily: cormorant.style.fontFamily };
