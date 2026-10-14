export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  projectTag: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "01",
    author: "ILSE VAN DIJK",
    role: "CEO",
    company: "Meridian Holdings",
    avatar: "/images/Y613vnAJPUR911i0n2tx8ZwHM.jpg",
    quote:
      "Raw Structure delivered Meridian Tower three weeks ahead of schedule. In 25 years of commercial development, that has never happened to us before. Their engineering rigor is matched only by their calm, disciplined site execution.",
    projectTag: "MERIDIAN TOWER · ROTTERDAM",
  },
  {
    id: "02",
    author: "MARKUS BRANDT",
    role: "Head of Infrastructure",
    company: "City of Hamburg",
    avatar: "/images/lApTWiLV6p4H3Ej4xwxVAC3TLY.jpg",
    quote:
      "The cantilever tolerances on the Kessel Bridge were within 2 millimeters over a 180-meter span. Their engineering was simply world class. They maintained commercial maritime traffic without a single delay throughout the 2-year build.",
    projectTag: "KESSEL BRIDGE · HAMBURG",
  },
  {
    id: "03",
    author: "ELENA ROSTOVA",
    role: "Managing Director",
    company: "Kessel Real Estate",
    avatar: "/images/wQi3fuduH13jDNFulIx6mxVM2CY.jpg",
    quote:
      "Zero lost-time incidents across an entire 24-month build programme. They don't just talk about safety culture — they run their sites like flight decks. The level of transparency in cost and schedule was unprecedented.",
    projectTag: "FOUNDRY LOFTS · BROOKLYN",
  },
];
