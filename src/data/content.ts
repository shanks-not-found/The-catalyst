export interface PartnershipTier {
  id: string;
  name: string;
  access: string;
  seats: string;
  fee: string;
  includes: string;
  featured?: boolean;
}

export interface InKindCategory {
  category: string;
  contribution: string;
  partnerPosition: string;
}

export interface Episode {
  id: string;
  number: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  isPreLaunch: boolean;
  guests?: string[];
  thumbnailUrl?: string;
}

export const SITE_METADATA = {
  title: "The Catalyst Room",
  tagline: "Where Conversations Create Momentum",
  domain: "catalyst.tech",
  founder: "John Garapati",
  founderRole: "Founder, The Catalyst Room",
  email: "john@treviaev.in",
  phone: "+91 9704202806",
  location: "Hyderabad, India",
  copyrightYear: 2026,
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Partner With Us", href: "/partner" },
  { label: "Episodes", href: "/episodes" },
  { label: "Contact", href: "/contact" },
];

export const HOME_CONTENT = {
  hero: {
    taglineChip: "Where Conversations Create Momentum",
    headline: "BUILD THE ROOM. BUILD THE ECOSYSTEM.",
    subheadline:
      "The Catalyst Room is a curated founder platform bringing founders, investors, business leaders and ecosystem stakeholders into one room — beginning at T-Hub, Hyderabad.",
    primaryCta: { text: "Partner With Us →", href: "/partner" },
    secondaryCta: { text: "Watch the Episodes →", href: "/episodes" },
  },
  eventStrip: {
    startDate: "Starting From: 30 October 2026",
    venue: "Venue: T-Hub (tentative), Hyderabad",
    format: "Format: Closed-door, curated",
    inTheRoom: "In the Room: Founders · Investors · Business & GCC leaders",
  },
  platform: {
    headline: "A curated room, not a crowded one.",
    body: "The Catalyst Room is a closed-door, curated founder ecosystem platform. It exists to move beyond conventional networking — creating meaningful conversations, relationships and potential business opportunities between the people building, backing and buying from the startup ecosystem.",
    designedAround: [
      "Real founder problems",
      "Customer validation",
      "GTM",
      "Fundraising",
      "Business strategy",
      "Partnerships",
      "Industry insights",
      "Founder-to-founder conversations",
      "Investor and business connections",
    ],
  },
  whyDifferent: [
    {
      title: "Curated by design",
      description:
        "Closed-door and intentionally selective: the right people in the room, not the most people.",
    },
    {
      title: "Beyond networking",
      description:
        "Conversations built to create relationships that can lead to potential business opportunities.",
    },
    {
      title: "Built on real problems",
      description:
        "Customer validation, GTM, fundraising and strategy, discussed founder to founder.",
    },
  ],
  statementBand: {
    quote: "This is not the destination. It is the beginning.",
  },
  longTermVision: {
    body: "The Catalyst Room is being built as a long-term platform, not a one-day event. The intention is to evolve into a recurring founder-focused media and ecosystem platform — where conversations can lead to:",
    outcomes: [
      "Business connections",
      "Customer opportunities",
      "Investor conversations",
      "Partnerships",
      "Mentorship",
      "Industry access",
      "High-quality content",
      "Founder discovery",
    ],
    closingLine: "Don’t just attend the ecosystem. Build something inside it.",
  },
};

export const ABOUT_CONTENT = {
  hero: {
    headline: "WHY BE PART OF THE FIRST ROOM?",
    subhead:
      "What association can offer your brand — opportunities, access and visibility, not guarantees.",
  },
  whyPartnerGrid: [
    {
      title: "Brand Visibility",
      description:
        "Position your brand in front of a curated founder and business ecosystem.",
    },
    {
      title: "Ecosystem Access",
      description:
        "Build relationships with founders, investors, business leaders, GCCs and ecosystem stakeholders.",
    },
    {
      title: "Content",
      description:
        "Potential association with long-form and short-form Catalyst Room content.",
    },
    {
      title: "Business Network",
      description:
        "Create relevant conversations and relationships rather than passive event advertising.",
    },
    {
      title: "Early-Mover Association",
      description:
        "Become one of the early brands associated with the platform before it scales.",
    },
    {
      title: "Long-Term Relationship",
      description:
        "Opportunity to continue the association across future episodes.",
    },
  ],
  earlyPartnerAdvantage: {
    body: "The Catalyst Room is being built as a long-term platform. Early partners have the opportunity to establish their association at the beginning of that journey, across the first three episodes, while the partner ecosystem remains intentionally limited.",
    bullets: [
      "Every room starts somewhere.",
      "We are intentionally keeping the partner ecosystem limited.",
      "Once the platform scales, this early access will no longer be available in the same way.",
    ],
    closingLine: "Be part of the room where the platform begins.",
  },
};

export const PARTNER_CONTENT = {
  hero: {
    headline: "CHOOSE YOUR PLACE IN THE ROOM.",
  },
  seatStrip: [
    { tier: "Alpha Access", count: "5 seats" },
    { tier: "Beta Access", count: "2 seats" },
    { tier: "Gamma Access", count: "Only 1 Gamma Partner" },
  ],
  partnershipTiers: [
    {
      id: "starter",
      name: "Starter Partner",
      access: "Alpha Access · 5 Seats",
      seats: "5 Seats",
      fee: "₹18,000 / 3 Ep.",
      includes:
        "Marketing materials and brochures placed in 1–2 designated spaces at each event, but not in the video frame.",
      featured: false,
    },
    {
      id: "strategic",
      name: "Strategic Partner",
      access: "Beta Access · 2 Seats",
      seats: "2 Seats",
      fee: "₹1,40,000 / 3 Ep.",
      includes:
        "Everything in Alpha, plus additional marketing placements, brochures and materials, and brand placement within the video frame.",
      featured: true,
    },
    {
      id: "presenting",
      name: "Presenting Partner",
      access: "Gamma Access · 1 Seat (Only 1 Gamma Partner)",
      seats: "1 Seat",
      fee: "₹3,00,000 / 3 Ep.",
      includes:
        "Everything in Beta, plus video end credits, social media presence, logo integration in videos and premium partner association.",
      featured: false,
    },
  ] as PartnershipTier[],
  footnote:
    "Opportunities, access and visibility — no guaranteed outcomes, and none implied.",
  inKindSection: {
    heading: "In-Kind Partners",
    intro:
      "Not every partnership needs to be monetary. We welcome select brands and service providers who can contribute meaningful products, services or infrastructure in exchange for strategic brand integration and partner recognition.",
    categories: [
      {
        category: "Food / F&B",
        contribution: "Food, snacks, beverages",
        partnerPosition: "Official Food Partner",
      },
      {
        category: "Production",
        contribution: "Videography, production, editing",
        partnerPosition: "Official Production Partner",
      },
      {
        category: "Photography",
        contribution: "Event photography",
        partnerPosition: "Official Photography Partner",
      },
      {
        category: "Media / PR",
        contribution: "Content distribution, PR",
        partnerPosition: "Official Media Partner",
      },
      {
        category: "Venue / Hospitality",
        contribution: "Venue, hospitality support",
        partnerPosition: "Official Venue/Hospitality Partner",
      },
      {
        category: "Design",
        contribution: "Creative/design support",
        partnerPosition: "Official Design Partner",
      },
      {
        category: "Workforce",
        contribution: "Event manpower/operations",
        partnerPosition: "Official Workforce Partner",
      },
      {
        category: "Gifting",
        contribution: "Founder/guest gifts",
        partnerPosition: "Official Gifting Partner",
      },
      {
        category: "Technology",
        contribution: "SaaS, tools, infrastructure",
        partnerPosition: "Official Technology Partner",
      },
      {
        category: "Other",
        contribution: "Relevant products/services",
        partnerPosition: "Official [Category] Partner",
      },
    ] as InKindCategory[],
    availabilityNote:
      "In-kind partnerships are subject to fit, quality and availability.",
    cta: {
      text: "Become a Partner →",
      href: "mailto:john@treviaev.in",
    },
  },
};

export const EPISODES_CONTENT = {
  hero: {
    headline: "CONVERSATIONS, ON THE RECORD.",
    subhead:
      "Long-form and short-form content from inside The Catalyst Room — founder conversations, investor perspectives and real business outcomes.",
  },
  episodes: [
    {
      id: "ep-1",
      number: "Episode 1",
      title: "Episode 1 — Coming 30 October 2026, T-Hub, Hyderabad",
      date: "30 October 2026",
      venue: "T-Hub, Hyderabad",
      description:
        "The inaugural closed-door session of The Catalyst Room. Featuring selected founders, investors, and GCC leaders in an unscripted, strategic exchange.",
      isPreLaunch: true,
    },
  ] as Episode[],
  whereToWatch: {
    title: "Where to Watch",
    platforms: [
      {
        name: "YouTube",
        handle: "Catalyst by John",
        status: "Active Channel",
        href: "https://youtube.com",
        isAvailable: true,
      },
      {
        name: "Spotify",
        handle: "The Catalyst Room Podcast",
        status: "Coming Soon (TBD)",
        href: "#",
        isAvailable: false,
      },
      {
        name: "Instagram",
        handle: "@catalystroom",
        status: "Coming Soon (TBD)",
        href: "#",
        isAvailable: false,
      },
      {
        name: "LinkedIn",
        handle: "The Catalyst Room",
        status: "Coming Soon (TBD)",
        href: "#",
        isAvailable: false,
      },
    ],
  },
};

export const CONTACT_CONTENT = {
  hero: {
    headline: "WE WOULD LOVE TO BUILD THIS WITH YOU.",
    subhead:
      "We are intentionally keeping the partner ecosystem selective. If your brand wants to build meaningful visibility within the founder and business ecosystem, we would love to explore having you as one of our early partners.",
  },
  form: {
    interestOptions: [
      "Sponsorship",
      "In-Kind Partnership",
      "Guest/Speaker",
      "Media",
      "Other",
    ],
    submitText: "Send Message",
  },
  directContact: {
    name: "John Garapati",
    role: "Founder, The Catalyst Room",
    email: "john@treviaev.in",
    phone: "+91 9704202806",
    location: "Hyderabad, India",
  },
};
