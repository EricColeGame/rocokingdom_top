export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Roco Kingdom Wiki",
  shortName: "Roco Kingdom",
  logoText: "R",
  tagline: "Jinies, Guides & Beta News",
  description: "Explore Roco Kingdom Wiki for Jini collecting, beginner guides, combat strategies, world exploration, beta news, multiplayer tips, and creature guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rocokingdom.top",
  supportEmail: "support@rocokingdom.top",
  gameUrl: "https://rocokingdom.com/",
  heroVideoId: "1b_rKJ-ObI4", // Roco Kingdom - Official Trailer
  social: {
    discord: "https://discord.gg/rocokingdom",
    youtube: "https://www.youtube.com/@RocoKingdomgame",
    twitter: "https://x.com/RocoKingdomEN",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
