export interface PartnershipTier {
  id: string;
  name: string;
  fee: string;
  association: string;
  keyBenefits: string;
  description: string;
  badge?: string | null;
}

export interface StrategicCategory {
  category: string;
  description: string;
  partnerPosition: string;
}

export interface Episode {
  id: string;
  number: string;
  title: string;
  guestName: string;
  guestRole: string;
  date: string;
  venue: string;
  format: string;
  audience: string;
  description: string;
  isPreLaunch: boolean;
  thumbnailText: string;
  brandText: string;
}

export const SITE_METADATA = {
  title: "The Catalyst Room",
  tagline: "Where Conversations Create Momentum",
  domain: "catalyst.tech",
  location: "Hyderabad, India",
  copyrightYear: 2026,
  footerDescription:
    "The Catalyst Room is a curated business media and ecosystem platform bringing founders, investors, business leaders and ecosystem stakeholders together through meaningful conversations and connections.",
};

// ==========================================
// HERO IMAGE CONFIGURATION
// Change this URL to replace the hero image on the homepage
// ==========================================
export const HERO_IMAGE_URL = "/hero-image.jpg";

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Partner With Us", href: "/partner" },
  { label: "Episodes", href: "/episodes" },
  { label: "Speak With Us", href: "/contact" },
];

// ==========================================
// SECTION IMAGE CONFIGURATION
// Change this URL to replace the image in "A ROOM BUILT FOR THE PEOPLE..." section
// ==========================================
export const SECTION_IMAGE_URL = "/section-image.jpg";

// ==========================================
// ABOUT SECTION IMAGE CONFIGURATION
// Change this URL to replace the image on the About page hero section
// ==========================================
export const ABOUT_SECTION_IMAGE_URL = "/about-section.jpg";

export const HOME_CONTENT = {
  hero: {
    taglineChip: "Where Conversations Create Momentum",
    headline: "Where Conversations Create Momentum",
    subheadline:
      "The Catalyst Room is a curated business media and ecosystem platform bringing founders, investors, CEOs, GCC leaders and industry experts into one room for meaningful conversations, connections and opportunities.",
    primaryCta: { text: "REGISTER →", href: "/register" },
    secondaryCta: { text: "EXPLORE PARTNERSHIPS →", href: "/partner" },
  },
  eventStrip: [
    { label: "NEXT EPISODE", value: "30 October 2026" },
    { label: "VENUE", value: "T-Hub, Hyderabad" },
    { label: "FORMAT", value: "Long-form Conversation + Curated Room" },
    { label: "IN THE ROOM", value: "Founders · Investors · CEOs · GCC Leaders" },
  ],
  statementBand: {
    quote: "This is not the destination. It is the beginning.",
  },
  episode01Feature: {
    eyebrow: "EPISODE 01",
    headline: "The conversation that starts it all.",
    guestName: "Ajay Jain",
    guestRole: "Founder & Managing Partner, SilverX Fund",
    description:
      "A deep conversation on technology, capital, founders, markets and what it takes to build companies that matter.",
    statusBadge: "COMING 30 OCTOBER 2026",
    subtext: "A curated room, not a crowded one.",
    primaryCta: { text: "REGISTER →", href: "/register" },
  },
  builtAround: {
    eyebrow: "FOUNDATION",
    headline: "BUILT AROUND",
    points: [
      "Real business problems",
      "Founder-to-founder conversations",
      "Customer opportunities",
      "GTM & growth",
      "Fundraising & capital",
      "Partnerships",
      "Industry access",
      "Strategic connections",
    ],
  },
  theFormat: {
    eyebrow: "THE FORMAT",
    headline: "ONE ROOM. TWO EXPERIENCES.",
    subhead: "This is what differentiates The Catalyst Room from a normal podcast.",
    experiences: [
      {
        number: "01",
        title: "THE CONVERSATION",
        description:
          "A professional long-form conversation with a prominent founder, investor, CEO or industry leader.",
      },
      {
        number: "02",
        title: "THE ROOM",
        description:
          "A curated gathering of serious founders and ecosystem leaders for deeper conversations, connections and opportunities.",
      },
    ],
  },
  curatedRoomPositioning: {
    eyebrow: "OUR POSITIONING",
    headline: "A ROOM BUILT FOR THE PEOPLE BUILDING WHAT’S NEXT.",
    body: "The Catalyst Room exists to move beyond noisy events and surface-level networking. We intentionally construct selective environments where relevance matters over volume, quality matters over crowd size, and meaningful business relationships replace transactional pitches.",
  },
  whoIsInTheRoom: {
    eyebrow: "THE ECOSYSTEM",
    headline: "THE PEOPLE WHO BUILD THE ECOSYSTEM.",
    cards: [
      {
        title: "FOUNDERS",
        description: "Building real companies and solving real problems.",
      },
      {
        title: "INVESTORS",
        description: "Backing the next generation of businesses.",
      },
      {
        title: "BUSINESS LEADERS",
        description:
          "Operators with experience building and scaling organisations.",
      },
      {
        title: "GCC LEADERS",
        description:
          "Creating opportunities across technology, talent and enterprise.",
      },
      {
        title: "INDUSTRY EXPERTS",
        description: "Bringing domain knowledge and market perspective.",
      },
    ],
  },
  whyDifferent: [
    {
      number: "01",
      title: "CURATED BY DESIGN",
      description:
        "Closed-door and intentionally selective. The right people in the room, not the most people.",
    },
    {
      number: "02",
      title: "BEYOND NETWORKING",
      description:
        "Conversations designed to create relationships, ideas and potential business opportunities.",
    },
    {
      number: "03",
      title: "BUILT FOR BUILDERS",
      description:
        "Real companies. Real challenges. Real conversations about building, scaling and navigating business.",
    },
  ],
  longTermVision: {
    eyebrow: "LONG-TERM VISION",
    headline: "The Long-Term Vision",
    body: "The Catalyst Room is being built as a recurring business media and ecosystem platform — not a one-day event. Each conversation is designed to create value beyond the recording itself.",
    outcomes: [
      "Business Connections",
      "Customer Opportunities",
      "Investor Conversations",
      "Partnerships",
      "Mentorship",
      "Industry Access",
      "High-Quality Content",
      "Founder Discovery",
    ],
  },
  buildWithTheRoom: {
    eyebrow: "PARTNERSHIPS",
    headline: "BUILD WITH THE ROOM.",
    subhead:
      "We’re partnering with brands, businesses and ecosystem organisations that want to be part of the conversations shaping the next generation of companies.",
    buttons: [
      { text: "BECOME A PARTNER →", href: "/contact" },
      { text: "VIEW PARTNERSHIP OPTIONS →", href: "/partner" },
    ],
  },
};

export const NEXT_EPISODE_REGISTRATION_CONTENT = {
  hero: {
    eyebrow: "UPCOMING EPISODE REGISTRATION",
    headline: "REGISTER FOR OUR NEXT EPISODE",
    subhead:
      "Express your interest to participate in the closed-door recording and curated room experience for Episode 01 of The Catalyst Room.",
  },
  episodeDetails: {
    number: "EPISODE 01",
    guestName: "Ajay Jain",
    guestRole: "Founder & Managing Partner, SilverX Fund",
    date: "30 October 2026",
    venue: "T-Hub, Hyderabad",
    format: "Long-form Conversation + Curated Room",
  },
  aboutNextEpisode: {
    headline: "ABOUT THE NEXT EPISODE",
    conversationSummary:
      "A deep conversation on technology, capital, founders, markets and what it takes to build companies that matter.",
    roomConcept:
      "The Catalyst Room brings a carefully selected group of founders, investors, CEOs, GCC leaders and industry experts together for meaningful conversations, connections and potential opportunities.",
  },
  objective: {
    headline: "THE OBJECTIVE",
    intro:
      "This session is intentionally structured around tangible business outcomes and strategic exchange:",
    points: [
      "Meaningful business conversations",
      "Founder-to-founder interaction",
      "Customer opportunities",
      "GTM & growth",
      "Fundraising & capital",
      "Partnerships",
      "Industry access",
      "Strategic connections",
    ],
  },
  thisIsFor: {
    headline: "THIS IS FOR:",
    audiences: [
      {
        title: "FOUNDERS",
        description: "Building or scaling real companies.",
      },
      {
        title: "INVESTORS",
        description: "Engaged in backing and supporting businesses.",
      },
      {
        title: "BUSINESS LEADERS",
        description:
          "Operators involved in building, scaling or leading organisations.",
      },
      {
        title: "GCC LEADERS",
        description:
          "Leaders working across technology, talent, enterprise and global capability centres.",
      },
      {
        title: "INDUSTRY EXPERTS",
        description:
          "People bringing meaningful domain expertise and market perspective.",
      },
    ],
  },
  curationCriteria: {
    headline: "WHO GETS INVITED?",
    body: "The Catalyst Room is intentionally curated. Registrations are reviewed based on relevance to the conversation, business experience, role, domain expertise and the potential to contribute meaningfully to the room.",
    notes: [
      "Registration expresses interest.",
      "The room is curated by design.",
      "Submission does not guarantee admission.",
      "Selected participants will receive confirmation & details separately.",
    ],
  },
  form: {
    headline: "REGISTER FOR THE ROOM",
    subhead: "Complete the curation application form below.",
    audienceOptions: [
      "Founder",
      "Investor",
      "Business Leader",
      "GCC Leader",
      "Industry Expert",
      "Other",
    ],
    submitText: "REGISTER FOR THE ROOM →",
    confirmationMsg: {
      title: "REGISTRATION RECEIVED",
      body: "Thank you for your interest in The Catalyst Room.",
      detail:
        "Your details have been received and will be reviewed as part of the room curation process. Selected participants will receive further details regarding Episode 01.",
    },
  },
};

export const ABOUT_CONTENT = {
  hero: {
    eyebrow: "ABOUT THE CATALYST ROOM",
    headline: "A ROOM BUILT FOR THE PEOPLE BUILDING WHAT’S NEXT.",
    subhead:
      "The Catalyst Room is a curated business media and ecosystem platform bringing founders, investors, CEOs, GCC leaders and industry experts together through meaningful conversations and connections.",
  },
  whatIsCatalystRoom: {
    heading: "WHAT IS THE CATALYST ROOM?",
    intro:
      "The Catalyst Room brings the people building, backing, operating and shaping businesses into the same room. Each episode combines a long-form conversation with a prominent business leader and a carefully curated room of founders and ecosystem stakeholders.",
    cards: [
      {
        number: "01",
        title: "CONVERSATIONS",
        description:
          "Long-form conversations with founders, investors, CEOs and industry leaders.",
      },
      {
        number: "02",
        title: "THE ROOM",
        description:
          "A closed-door gathering of carefully selected founders and ecosystem stakeholders.",
      },
      {
        number: "03",
        title: "CONNECTIONS",
        description:
          "Meaningful relationships across founders, capital, customers, businesses and industry.",
      },
      {
        number: "04",
        title: "OPPORTUNITIES",
        description:
          "Creating the conditions for partnerships, customer conversations, investment and collaboration.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "THE FORMAT",
    heading: "ONE PLATFORM. TWO EXPERIENCES.",
    subhead: "This is what differentiates The Catalyst Room from a normal podcast.",
    experiences: [
      {
        title: "THE CONVERSATION",
        description:
          "A professional long-form discussion exploring the person, company, market, decisions and lessons behind the business.",
      },
      {
        title: "THE ROOM",
        description:
          "A curated gathering where serious founders and ecosystem leaders continue the conversation beyond the recording.",
      },
    ],
  },
  whoBelongs: {
    eyebrow: "AUDIENCE",
    heading: "WHO BELONGS IN THE ROOM?",
    audiences: [
      {
        title: "FOUNDERS",
        description: "Building companies and solving real problems.",
      },
      {
        title: "INVESTORS",
        description: "Backing businesses, technology and ambitious teams.",
      },
      {
        title: "BUSINESS LEADERS",
        description: "Operators building and scaling organisations.",
      },
      {
        title: "GCC LEADERS",
        description:
          "Connecting startups with enterprise, technology and industry.",
      },
      {
        title: "INDUSTRY EXPERTS",
        description: "Bringing domain knowledge, perspective and access.",
      },
    ],
  },
  whyTheRoomExists: {
    eyebrow: "PHILOSOPHY",
    heading: "WHY THE ROOM EXISTS",
    intro:
      "Startup ecosystems often have plenty of events, podcasts and networking opportunities. What is often missing is a carefully constructed environment where the right people can have the right conversation. The Catalyst Room exists to create that environment — intentionally, selectively and repeatedly.",
    cards: [
      {
        title: "CURATED BY DESIGN",
        description:
          "The right people in the room, not simply the most people.",
      },
      {
        title: "BEYOND NETWORKING",
        description:
          "Conversations designed to move toward relationships and opportunities.",
      },
      {
        title: "BUILT FOR BUILDERS",
        description:
          "Real companies, real challenges and conversations that go beyond surface-level stories.",
      },
    ],
  },
  longTermVision: {
    eyebrow: "LONG-TERM PLATFORM",
    heading: "BUILT BEYOND A SINGLE EPISODE.",
    intro:
      "The Catalyst Room is being built as a recurring business media and ecosystem platform. Over time, the room can become a place where conversations lead to business connections, customer opportunities, investor conversations, partnerships, mentorship, industry access and founder discovery.",
    tiles: [
      "Business Connections",
      "Customer Opportunities",
      "Investor Conversations",
      "Partnerships",
      "Mentorship",
      "Industry Access",
      "High-Quality Content",
      "Founder Discovery",
    ],
  },
  finalCta: {
    headline: "THE ROOM IS JUST BEGINNING.",
    subhead:
      "Follow the conversations. Meet the people building. Find your place in the ecosystem.",
    buttons: [
      { text: "EXPLORE EPISODES →", href: "/episodes" },
      { text: "REGISTER WITH THE ROOM →", href: "/register" },
      { text: "PARTNER WITH US →", href: "/partner" },
    ],
  },
};

export const PARTNER_CONTENT = {
  partnerWithTheRoom: {
    eyebrow: "PARTNERSHIPS",
    headline: "PARTNER WITH THE ROOM",
    subhead:
      "We’re partnering with brands, businesses and ecosystem organisations that want to be part of the conversations shaping the next generation of companies.",
    buttons: [
      { text: "BECOME A PARTNER →", href: "/contact" },
      { text: "VIEW PARTNERSHIP OPTIONS →", href: "#two-ways-to-partner" },
    ],
  },
  hero: {
    eyebrow: "PARTNERSHIPS",
    headline: "BUILD WITH THE ROOM.",
    subhead:
      "The Catalyst Room works with brands, businesses and ecosystem organisations that want to be part of meaningful conversations shaping the startup and business ecosystem.",
    ctaText: "EXPLORE PARTNERSHIPS →",
  },
  twoWaysToPartner: {
    heading: "TWO WAYS TO PARTNER",
    intro:
      "Whether through financial sponsorship or meaningful products, services and infrastructure, we work with partners who bring value to the room.",
    cards: [
      {
        number: "01",
        title: "SPONSORSHIP",
        description:
          "Support the platform financially and build sustained brand association across the series.",
        benefits: [
          "Brand visibility",
          "Content integration",
          "Founder ecosystem presence",
          "Partner recognition",
          "Multi-episode association",
        ],
        ctaText: "EXPLORE SPONSORSHIP →",
        href: "#sponsorship-opportunities",
      },
      {
        number: "02",
        title: "STRATEGIC PARTNERSHIP",
        description:
          "Contribute products, services, infrastructure or expertise in exchange for strategic brand integration and recognition.",
        categories: [
          "Food & F&B",
          "Space & hospitality",
          "Production & Post production",
          "Media & PR",
          "Technology",
          "Legal & finance",
          "Design",
          "Other ecosystem services",
        ],
        ctaText: "BECOME A PARTNER →",
        href: "#strategic-partnerships",
      },
    ],
  },
  sponsorship: {
    heading: "SPONSORSHIP OPPORTUNITIES",
    subhead:
      "Three partnership levels designed for brands looking to build sustained association across the first three episodes.",
    tiers: [
      {
        id: "community",
        name: "Community Partner – Alpha",
        fee: "₹18,000 / 3 Episodes",
        association: "Early ecosystem association",
        keyBenefits: "Brand placement · Event visibility · 5 seats",
        description:
          "For brands looking to establish an early association with The Catalyst Room.",
        badge: null,
      },
      {
        id: "strategic",
        name: "Strategic Partner - Beta",
        fee: "₹1,50,000 / 3 Episodes",
        association: "Expanded brand association",
        keyBenefits:
          "Brand placement · Content integration · 2 seats · Social visibility",
        description:
          "For brands seeking stronger visibility and deeper ecosystem association.",
        badge: null,
      },
      {
        id: "presenting",
        name: "Presenting Partner - Gamma",
        fee: "₹3,00,000 / 3 Episodes",
        association: "Lead partner association",
        keyBenefits:
          "Video integration · End credits · Social presence · 1 seat · Premium positioning",
        description:
          "For one brand seeking the highest level of association across the initial series.",
        badge: "MOST LIMITED",
      },
    ] as PartnershipTier[],
    legalQualifier:
      "Partnerships provide opportunities for visibility, association and ecosystem engagement. Specific outcomes, leads, introductions or commercial opportunities are not guaranteed.",
  },
  whatPartnersReceive: {
    heading: "WHAT PARTNERS RECEIVE",
    items: [
      {
        title: "BRAND ASSOCIATION",
        description:
          "Position your brand alongside a curated business and founder ecosystem.",
      },
      {
        title: "CONTENT VISIBILITY",
        description:
          "Relevant integration across episodes, social content and platform communications.",
      },
      {
        title: "ECOSYSTEM PRESENCE",
        description:
          "Build relationships with founders, investors, business leaders and ecosystem stakeholders.",
      },
      {
        title: "PARTNER RECOGNITION",
        description:
          "Official partner positioning across relevant events and content.",
      },
      {
        title: "LONG-TERM ASSOCIATION",
        description:
          "Opportunities to continue the relationship across future episodes.",
      },
      {
        title: "RELEVANT CONNECTIONS",
        description:
          "Potential introductions and conversations where there is genuine relevance and mutual interest.",
      },
    ],
    qualifier: "Opportunities are subject to relevance, availability and mutual fit.",
  },
  strategicPartnerships: {
    heading: "STRATEGIC PARTNERSHIPS",
    intro:
      "Not every contribution needs to be financial. The Catalyst Room works with selected organisations that can contribute meaningful products, services, infrastructure or expertise.",
    categories: [
      {
        category: "FOOD & F&B",
        description: "Food, beverages and hospitality",
        partnerPosition: "Official Food Partner",
      },
      {
        category: "SPACE & HOSPITALITY",
        description: "Venue and event infrastructure",
        partnerPosition: "Official Space Partner",
      },
      {
        category: "PRODUCTION",
        description: "Videography, production and post-production",
        partnerPosition: "Official Production Partner",
      },
      {
        category: "MEDIA & PR",
        description: "Content distribution and amplification",
        partnerPosition: "Official Media Partner",
      },
      {
        category: "LEGAL & FINANCE",
        description: "Legal, accounting and financial support",
        partnerPosition: "Official Legal & Finance Partner",
      },
      {
        category: "TECHNOLOGY",
        description: "SaaS, infrastructure and technology",
        partnerPosition: "Official Technology Partner",
      },
      {
        category: "DESIGN & CREATIVE",
        description: "Branding, graphics and creative",
        partnerPosition: "Official Design Partner",
      },
      {
        category: "PHOTOGRAPHY",
        description: "Event and founder photography",
        partnerPosition: "Official Photography Partner",
      },
      {
        category: "OTHER",
        description: "Relevant products, services or expertise",
        partnerPosition: "Official [Category] Partner",
      },
    ] as StrategicCategory[],
  },
  buildFromBeginning: {
    heading: "BUILD FROM THE BEGINNING",
    intro:
      "The Catalyst Room is starting with a deliberately limited partner ecosystem. We’re looking to build long-term relationships with organisations that genuinely add value to the room and the people in it.",
    cards: [
      {
        number: "01",
        title: "LIMITED PARTNER ECOSYSTEM",
        description:
          "We work with a focused set of partners across relevant categories.",
      },
      {
        number: "02",
        title: "BUILT FOR CONTINUITY",
        description:
          "Partnerships can extend beyond the first three episodes.",
      },
      {
        number: "03",
        title: "MUTUAL VALUE",
        description:
          "We prioritise meaningful contribution over simple logo placement.",
      },
    ],
  },
  finalCta: {
    heading: "LET’S BUILD THE ROOM TOGETHER.",
    subhead:
      "Tell us what you can bring to the room, and we’ll explore the right partnership structure.",
    buttons: [
      { text: "BECOME A PARTNER →", href: "/contact" },
      { text: "DISCUSS SPONSORSHIP →", href: "/contact" },
    ],
  },
};

export const EPISODES_CONTENT = {
  hero: {
    eyebrow: "THE CATALYST ROOM · EPISODES",
    headline: "THE CONVERSATIONS START HERE.",
    subhead:
      "Long-form conversations with investors, founders, business leaders and ecosystem builders — recorded inside The Catalyst Room.",
  },
  episode01: {
    label: "EPISODE 01 · INAUGURAL SESSION",
    headline: "Ajay Jain — Building, Backing & Betting on Deep Tech",
    description:
      "Our inaugural session brings Ajay Jain, Founder & Managing Partner at SilverX Fund, into The Catalyst Room for a long-form conversation on deep tech, investing, founders and building companies that matter.",
    date: "30 OCTOBER 2026",
    venue: "T-HUB · HYDERABAD",
    format: "CLOSED-DOOR RECORDING",
    audience: "INVESTORS · FOUNDERS · GCC LEADERS",
    ctaText: "GET EPISODE NOTIFICATION →",
    ctaSubtext: "Register now",
    videoStatus: "EPISODE 01 · COMING SOON",
    brandText: "THE CATALYST ROOM",
  },
  formatSection: {
    eyebrow: "THE FORMAT",
    headline: "MORE THAN A PODCAST.",
    cards: [
      {
        number: "01",
        title: "THE CONVERSATION",
        description:
          "A long-form conversation with a prominent investor, founder, business leader or ecosystem expert.",
      },
      {
        number: "02",
        title: "THE ROOM",
        description:
          "A curated room of serious founders, investors and ecosystem stakeholders.",
      },
      {
        number: "03",
        title: "THE CONNECTIONS",
        description:
          "Conversations continue beyond the recording — creating opportunities for relationships, partnerships and business connections.",
      },
    ],
  },
  upcomingEpisodes: {
    eyebrow: "THE SERIES",
    headline: "MORE ROOMS. MORE CONVERSATIONS.",
    subhead:
      "The Catalyst Room will evolve into a recurring series featuring people shaping startups, technology, capital and business.",
    episodes: [
      {
        number: "EPISODE 02",
        status: "COMING SOON",
        description: "Guest announcement coming soon.",
      },
      {
        number: "EPISODE 03",
        status: "COMING SOON",
        description: "Guest announcement coming soon.",
      },
    ],
  },
  followSeries: {
    eyebrow: "FOLLOW THE SERIES",
    headline: "THE ROOM, OUTSIDE THE ROOM.",
    subhead:
      "Episodes, clips, insights and moments from The Catalyst Room will be released across our official channels.",
    channels: [
      {
        name: "YouTube",
        description: "Full-length episodes & conversations",
        status: "COMING SOON",
      },
      {
        name: "Instagram",
        description: "Clips, moments & highlights",
        status: "COMING SOON",
      },
      {
        name: "LinkedIn",
        description: "Founder insights & ecosystem conversations",
        status: "COMING SOON",
      },
    ],
  },
  finalCta: {
    headline: "WANT TO BE IN THE ROOM?",
    subhead:
      "The Catalyst Room brings together carefully selected founders, investors, business leaders and ecosystem stakeholders.",
    buttons: [
      { text: "PARTNER WITH US →", href: "/partner" },
      { text: "GET IN TOUCH →", href: "/contact" },
    ],
  },
};

export const CONTACT_CONTENT = {
  hero: {
    eyebrow: "GET IN TOUCH",
    headline: "LET’S BUILD THE ROOM.",
    subhead:
      "Whether you’re a founder, investor, business leader, ecosystem partner, brand or creator, we’d love to hear from you.",
  },
  form: {
    label: "START A CONVERSATION",
    headline: "Tell Us What Brings You Here",
    interestOptions: [
      "Joining as a Founder",
      "Guest / Speaker",
      "Partnership",
      "Sponsorship",
      "Media / Creator Collaboration",
      "Investor / Ecosystem Collaboration",
      "Other",
    ],
    submitText: "START THE CONVERSATION →",
  },
  finalCta: {
    headline: "HAVE SOMETHING ELSE IN MIND?",
    subhead:
      "We’re building The Catalyst Room one conversation at a time. If there’s a relevant way to collaborate, tell us about it.",
    buttonText: "GET IN TOUCH →",
  },
};

