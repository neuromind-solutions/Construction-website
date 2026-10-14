export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "COMMERCIAL" | "INFRASTRUCTURE" | "RESIDENTIAL" | "HEALTHCARE" | "INDUSTRIAL";
  location: string;
  year: string;
  image: string;
  headline: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  specifications: {
    key: string;
    val: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    slug: "meridian-tower",
    title: "MERIDIAN TOWER",
    category: "COMMERCIAL",
    location: "ROTTERDAM, NL",
    year: "2025",
    image: "/images/eqrLSETPpkJONqFnCfAZhUsKem0.jpg",
    headline: "42 FLOORS OF HIGH-PERFORMANCE CARBON STEEL & CONCRETE CORE",
    description:
      "A monolithic 42-story commercial tower constructed in central Rotterdam. Built with high-strength self-compacting concrete, high-efficiency vibration dampening, and advanced post-tensioned floor slabs delivered three weeks ahead of critical schedule.",
    stats: [
      { label: "HEIGHT", value: "168 M" },
      { label: "FLOORS", value: "42" },
      { label: "CONCRETE POURED", value: "34,000 M³" },
      { label: "DELIVERY", value: "3 WKS EARLY" },
    ],
    specifications: [
      { key: "Structural System", val: "Continuous Concrete Core + Perimeter Steel Columns" },
      { key: "Tolerances", val: "± 2.5 mm per 10 vertical meters" },
      { key: "Foundation", val: "180 friction piles to dense sand at -45 m" },
      { key: "Certification", val: "BREEAM Outstanding · ISO 9001" },
    ],
  },
  {
    id: "02",
    slug: "kessel-bridge",
    title: "KESSEL BRIDGE",
    category: "INFRASTRUCTURE",
    location: "HAMBURG, DE",
    year: "2024",
    image: "/images/a37tu7mhireD1ajDd8iWq6BbrmY.jpg",
    headline: "BALANCED CANTILEVER INFRASTRUCTURE OVER ACTIVE SHIPPING CANAL",
    description:
      "A dual-carriageway balanced cantilever bridge over the industrial port canal in Hamburg. Engineered to allow uninhibited continuous container shipping traffic throughout the entire 24-month construction schedule.",
    stats: [
      { label: "SPAN", value: "180 M" },
      { label: "CLEARANCE", value: "32 M" },
      { label: "STEEL TONNAGE", value: "8,400 T" },
      { label: "TOLERANCE", value: "< 2 MM" },
    ],
    specifications: [
      { key: "Structural Method", val: "Pre-stressed Balanced Cantilever" },
      { key: "Foundation", val: "Underwater Caissons with Jet Grouting" },
      { key: "Environmental", val: "Acoustic Fish Deflectors Installed During Piling" },
      { key: "Service Life", val: "120 Years Certified Design" },
    ],
  },
  {
    id: "03",
    slug: "foundry-lofts",
    title: "FOUNDRY LOFTS",
    category: "RESIDENTIAL",
    location: "BROOKLYN, NY",
    year: "2024",
    image: "/images/ZXGCQ9ramf2nzvPDkqJe6G1p7E.jpg",
    headline: "ADAPTIVE REUSE & SEISMIC REINFORCEMENT OF HISTORIC IRONWORKS",
    description:
      "Restoration and transformation of an 1898 iron casting foundry into 120 residential lofts. Required complex underpinning of 125-year-old unreinforced brick masonry, internal seismic carbon fiber bracing, and an exposed structural steel interior framework.",
    stats: [
      { label: "UNITS", value: "120" },
      { label: "AREA", value: "18,500 M²" },
      { label: "MASONRY SAVED", value: "94%" },
      { label: "LEED", value: "PLATINUM" },
    ],
    specifications: [
      { key: "Retrofit Scope", val: "Carbon Fiber Composite Wraps & Steel Portal Frames" },
      { key: "Shoring", val: "Micro-piles to bedrock through basement vaults" },
      { key: "Thermal Envelope", val: "Vapor-permeable interior aerogel insulation" },
      { key: "Acoustic Rating", val: "STC 58 between residential partitions" },
    ],
  },
  {
    id: "04",
    slug: "atlas-clinic",
    title: "ATLAS CLINIC",
    category: "HEALTHCARE",
    location: "OSLO, NO",
    year: "2023",
    image: "/images/1Z6NS71E0hj9I28vHqgoVDEVo8.jpg",
    headline: "LOW-VIBRATION SURGICAL PAVILION WITH ELASTOMERIC FOUNDATION",
    description:
      "Specialized surgical and imaging facility in Oslo built directly above an active subway line. Achieved VC-E acoustic and vibration isolation through a floating base-isolated structural slab resting on heavy elastomeric bearings.",
    stats: [
      { label: "VIBRATION", value: "VC-E (3 µm/s)" },
      { label: "SURGICAL SUITES", value: "16" },
      { label: "ISOLATION PADS", value: "64 UNITS" },
      { label: "CLEANROOM", value: "ISO CLASS 5" },
    ],
    specifications: [
      { key: "Base Isolation", val: "Natural Rubber & Lead-Core Elastomeric Bearings" },
      { key: "Acoustic Shell", val: "Box-in-Box Double Concrete Shell with Air Cavity" },
      { key: "Electromagnetic", val: "Full Mu-Metal & Aluminum MRI Shielding" },
      { key: "Energy", val: "Passive House Hospital Standard with Geothermal Loops" },
    ],
  },
];
