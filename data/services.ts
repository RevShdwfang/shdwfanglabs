// data/services.ts
export type Package = {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  featured?: boolean;
};

export type FAQ = { question: string; answer: string };

export type ServiceData = {
  title: string;
  subtitle: string;
  packages: Package[];
  faq: FAQ[];
};

export const services: Record<
  "brand-identity" | "stream-forge" | "web-design" | "web-development",
  ServiceData
> = {
  "brand-identity": {
    title: "Brand Identity",
    subtitle:
      "Logo systems and visual identity design that define your message and elevate your presence.",
    packages: [
      {
        name: "Starter",
        subtitle: "A focused start to defining your brand identity.",
        price: "$250",
        features: ["Logo design (1 concept)", "Color palette selection", "Basic usage guidelines"],
      },
      {
        name: "Standard",
        subtitle: "A full-featured identity system for growing brands.",
        price: "$325",
        features: [
          "2–3 logo concepts & refinements",
          "Full logo system (primary, alt, icon)",
          "Typography & color system",
          "Mini brand guide PDF",
        ],
        featured: true,
      },
      {
        name: "Premium",
        subtitle: "A complete branding kit for content creators and businesses.",
        price: "$400",
        features: [
          "Complete branding system",
          "Social media kit",
          "Favicon & print-ready exports",
          "Comprehensive brand book (PDF)",
        ],
      },
    ],
    faq: [
      { question: "What’s included in a brand identity package?", answer: "Depending on the tier, you’ll get a custom logo, color palette, font recommendations, social assets, and a brand guide." },
      { question: "Can you redesign or improve my existing logo?", answer: "Absolutely. I can modernize your current identity while preserving the essence of your brand." },
      { question: "What if I’m not sure what direction I want?", answer: "No problem — I’ll guide you through a discovery phase to explore your vision, audience, and style preferences." },
      { question: "Do I get different logo versions?", answer: "Yes — you’ll receive full logo variations including horizontal, vertical, icon-only, and dark/light background options." },
      { question: "What file formats will I receive?", answer: "You’ll get high-resolution vector files (SVG, PDF) and raster formats (PNG, JPG), ready for print, web, and social." },
      { question: "Is there a brand guide included?", answer: "Yes — all standard and premium tiers include a brand guideline PDF with usage rules, spacing, colors, and typography." },
      { question: "Can I use the logo for merch or content?", answer: "Definitely. All final assets are yours to use on stream, products, business cards — wherever you need." },
      { question: "Will you help with future updates?", answer: "Yes — I offer follow-up design support and brand expansion packages if you grow or rebrand later on." },
    ],
  },

  "stream-forge": {
    title: "Stream Forge",
    subtitle:
      "Custom overlays, alerts, and stream branding tailored to amplify your unique presence.",
    packages: [
      {
        name: "Starter",
        subtitle: "Perfect for new streamers looking to polish their setup.",
        price: "$150",
        features: [
          "Stream screen layout (BRB/Starting Soon)",
          "Simple static overlays",
          "Basic alert graphics",
        ],
      },
      {
        name: "Standard",
        subtitle: "Level up your brand with animated overlays and transitions.",
        price: "$225",
        features: [
          "Full overlay pack",
          "Custom animated alerts",
          "Scene transitions",
          "Logo watermark or stinger",
        ],
        featured: true,
      },
      {
        name: "Premium",
        subtitle: "Complete stream identity tailored for full brand immersion.",
        price: "$300",
        features: [
          "Complete stream branding system",
          "Custom stinger transition animation",
          "Profile panel set & VOD screens",
          "Theme-consistent overlays & alerts",
        ],
      },
    ],
    faq: [
      { question: "How does it work?", answer: "Discuss brand/theme direction, mockups & previews, animation and asset prep, final delivery in all needed formats." },
      { question: "What platforms are these assets compatible with?", answer: "OBS, Streamlabs, Kick, YouTube, and Twitch — we can tailor for any setup." },
      { question: "Can I request a theme or vibe?", answer: "Absolutely. I specialize in lore-driven and aesthetic branding!" },
      { question: "Do I need to provide any files or references?", answer: "You can, but it’s not required. Logos, guides, or references help speed things up." },
      { question: "How long does it take to complete an order?", answer: "Most projects are 5–10 business days depending on complexity. Rush available." },
      { question: "Commercial/monetized usage okay?", answer: "Yes — full usage rights for creators and monetized channels." },
      { question: "What if I need revisions?", answer: "Every order includes 2 rounds of revisions. More can be added if needed." },
      { question: "How will I receive my files?", answer: "Delivered via secure client portal with organized assets." },
    ],
  },

  "web-design": {
    title: "Web Design",
    subtitle:
      "Visually stunning and user-friendly websites tailored to your brand’s identity.",
    packages: [
      {
        name: "Starter",
        subtitle: "Perfect for basic web presence with a clean, single-page layout.",
        price: "$250",
        features: ["1-page design", "Mobile-optimized", "Basic SEO setup"],
      },
      {
        name: "Standard",
        subtitle: "Great for growing brands that need multiple pages and interactivity.",
        price: "$500",
        features: ["Up to 5 pages", "Responsive design", "Contact form setup", "Design revisions"],
        featured: true,
      },
      {
        name: "Premium",
        subtitle: "Full-service creative design for a complete, optimized experience.",
        price: "$900",
        features: ["Custom UI/UX", "Content Management System", "Animations and interactivity", "Advanced SEO & optimization"],
      },
    ],
    faq: [
      { question: "Can you match my existing brand or logo?", answer: "Absolutely. I can work with your assets or refine them into a cohesive design system." },
      { question: "Will my site be mobile-friendly?", answer: "Yes — designs are responsive by default for phones, tablets, and desktops." },
      { question: "Do you offer revisions?", answer: "Yes — each package includes 1–2 rounds to ensure it feels right." },
      { question: "Not sure what you want yet?", answer: "I’ll guide you through a style/mood discovery to find the right direction." },
      { question: "Design for conversions/leads?", answer: "Definitely. UX will support your business goals." },
      { question: "Templates or custom?", answer: "Custom-built. No cookie-cutter templates." },
      { question: "Tools?", answer: "Figma, Illustrator, and more — whatever fits the project." },
      { question: "Animations/interactions?", answer: "Subtle motion, hover, scroll interactions can be included." },
      { question: "Can you also develop it?", answer: "Yep — design + dev so you can launch in one place." },
    ],
  },

  "web-development": {
    title: "Web Development",
    subtitle:
      "Powerful websites built for performance, growth, and purpose-driven results.",
    packages: [
      {
        name: "Starter",
        subtitle: "Best for basic web presence with key functionality.",
        price: "$400",
        features: [
          "Basic responsive site (up to 3 pages)",
          "Speed-optimized deployment",
          "Contact form integration",
        ],
      },
      {
        name: "Standard",
        subtitle: "Ideal for growing businesses needing more flexibility.",
        price: "$500",
        features: [
          "Up to 6 pages",
          "Custom component development",
          "SEO & metadata configuration",
          "Basic CMS integration",
        ],
        featured: true,
      },
      {
        name: "Premium",
        subtitle: "Complete full-stack solution for complex web needs.",
        price: "$600",
        features: [
          "Full-stack development (frontend + backend)",
          "Advanced CMS or API integration",
          "Dynamic UI features",
          "Full client handoff or maintenance option",
        ],
      },
    ],
    faq: [
      { question: "Will my website be mobile-friendly?", answer: "Yes — fully responsive and optimized for performance across devices." },
      { question: "How long will it take?", answer: "Usually 2–4 weeks depending on complexity and content readiness." },
      { question: "Hosting/domain setup?", answer: "I can set up on Vercel, IONOS, or others; you retain ownership." },
      { question: "Third-party integrations?", answer: "Yep — email platforms, booking, payments, analytics, etc." },
      { question: "Is SEO included?", answer: "Basic best practices (clean code, meta, performance). Advanced SEO available." },
      { question: "Already have designs?", answer: "Great — I’ll build from Figma/PSD/etc." },
      { question: "Post-launch support?", answer: "Yes — support and optional maintenance plans." },
      { question: "Will it be fast?", answer: "Absolutely. Built for speed, a11y, and performance (no bloat)." },
    ],
  },
};
