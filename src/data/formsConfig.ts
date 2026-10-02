// Centralized Configuration for Google Form Links
// Replace these placeholder values with your actual Google Form URLs later.

export const GOOGLE_FORM_LINKS = {
  GUEST_FORM_URL: "PASTE_GUEST_GOOGLE_FORM_URL_HERE",
  FOUNDER_FORM_URL: "PASTE_FOUNDER_GOOGLE_FORM_URL_HERE",
  PARTNER_FORM_URL: "PASTE_PARTNER_GOOGLE_FORM_URL_HERE",
  // Backward compatibility keys
  guest: "PASTE_GUEST_GOOGLE_FORM_URL_HERE",
  founder: "PASTE_FOUNDER_GOOGLE_FORM_URL_HERE",
  partner: "PASTE_PARTNER_GOOGLE_FORM_URL_HERE",
};

export const REGISTRATION_TYPES = [
  {
    id: "partner",
    number: "01",
    label: "REGISTER AS PARTNER",
    title: "Register as Partner",
    path: "/register",
    formUrlKey: "PARTNER_FORM_URL" as const,
    shortDescription:
      "For brands, businesses and ecosystem organisations interested in partnering with The Catalyst Room.",
    heading: "REGISTER AS PARTNER",
    buttonText: "OPEN PARTNER FORM →",
  },
  {
    id: "guest",
    number: "02",
    label: "REGISTER AS GUEST",
    title: "Register as Guest",
    path: "/register",
    formUrlKey: "GUEST_FORM_URL" as const,
    shortDescription:
      "For invited guests and ecosystem participants who want to participate in The Catalyst Room experience.",
    heading: "REGISTER AS GUEST",
    buttonText: "OPEN GUEST FORM →",
  },
  {
    id: "founder",
    number: "03",
    label: "REGISTER AS FOUNDER",
    title: "Register as Founder",
    path: "/register",
    formUrlKey: "FOUNDER_FORM_URL" as const,
    shortDescription:
      "For founders and entrepreneurs who want to join the conversation, connect with the ecosystem and explore meaningful opportunities.",
    heading: "REGISTER AS FOUNDER",
    buttonText: "OPEN FOUNDER FORM →",
  },
];

