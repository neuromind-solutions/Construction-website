export interface NavItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PROJECTS", href: "/projects" },
  { label: "JOURNAL", href: "/journal" },
  { label: "CONTACT", href: "/contact" },
];

export const SITE_METADATA = {
  companyName: "RAW STRUCTURE",
  coordinates: "N 51°54' / E 4°28'",
  siteCode: "SITE 07",
  foundingYear: "1987",
  tagline: "WE BUILD WHAT STANDS.",
  heroLot: "LOT 07 — 1 200 × 900 M",
  heroDescription:
    "Raw Structure is a design-build contractor for towers, bridges and industrial buildings — engineered with obsessive precision and delivered without drama.",
  stats: {
    yearsBuilding: "38+",
    projectsDelivered: "214+",
    safeWorkHours: "1.2M",
    peopleOnPayroll: "640+",
  },
  contact: {
    addressLine1: "18 Dock Street, Unit 4",
    addressLine2: "3011 BJ Rotterdam",
    country: "The Netherlands",
    email: "build@rawstructure.com",
    phone: "+31 10 555 0187",
  },
  certifications: "ISO 9001 · ISO 45001 · VCA**",
  copyright: "© 2026 Raw Structure B.V. — All rights reserved",
};
