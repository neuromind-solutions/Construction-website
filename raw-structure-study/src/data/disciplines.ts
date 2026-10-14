export interface Discipline {
  number: string;
  name: string;
  tags: string[];
  image: string;
  description: string;
  subheadline: string;
  deliverables: string[];
}

export const DISCIPLINES: Discipline[] = [
  {
    number: "01",
    name: "GENERAL CONTRACTING",
    tags: ["PROGRAMME", "COST CONTROL", "SITE MANAGEMENT"],
    image: "/images/XCsFzEjL11OrhWvehONxhZVKUo.jpg",
    subheadline: "Single-point delivery responsibility from groundbreaking to facility turnover.",
    description:
      "We operate as head contractor under guaranteed maximum price (GMP) or lump-sum agreements. Our site teams enforce rigorous subcontractor coordination, transparent progress telemetry, and zero tolerance for schedule slip.",
    deliverables: [
      "Critical Path Method (CPM) 4D scheduling",
      "Tier-1 subcontractor procurement and oversight",
      "Full site logistics, cranage, and security management",
      "Open-book cost control and budget auditing",
    ],
  },
  {
    number: "02",
    name: "DESIGN & BUILD",
    tags: ["INTEGRATED ENGINEERING", "BIM 4D", "FAST-TRACK"],
    image: "/images/Ejb9xKkRa10W0e7hV42bq6Rf7GY.jpg",
    subheadline: "Direct alignment of architectural ambition with constructability engineering.",
    description:
      "By eliminating the silo between structural engineers and site superintendents, we compress project delivery times by up to 25%. Every detail is modeled, clash-detected, and priced before steel is ordered.",
    deliverables: [
      "Integrated architectural & structural BIM modeling",
      "Constructability reviews and value engineering",
      "Early-stage procurement of long-lead materials",
      "Lifecycle carbon footprint optimization",
    ],
  },
  {
    number: "03",
    name: "STRUCTURAL STEEL",
    tags: ["FABRICATION", "HEAVY ERECTION", "HIGH TOLERANCE"],
    image: "/images/kQlbW52BNh2N5AkiRh0cQPwGWA.jpg",
    subheadline: "Heavy industrial steel trusses, transfer decks, and monumental frames.",
    description:
      "We engineer, fabricate, and erect complex structural steel assemblies with sub-millimeter tolerances. From high-rise perimeter bracing to long-span roof cantilevers, our certified welders and riggers execute without compromise.",
    deliverables: [
      "Heavy member fabrication up to 45 tons per piece",
      "Specialized connection detailing and non-destructive testing (NDT)",
      "High-precision laser alignment during multi-crane lifts",
      "Intumescent structural fireproofing application",
    ],
  },
  {
    number: "04",
    name: "CIVIL INFRASTRUCTURE",
    tags: ["BRIDGES", "MARINE", "EARTHWORKS"],
    image: "/images/YU4bdJs7Pxvs6xbPAMiKnFwD0A.jpg",
    subheadline: "Long-span cantilevers, deep quay walls, and grade-separated transit routes.",
    description:
      "Heavy civil works operating in challenging geotechnical conditions — urban waterways, soft alluvial soils, and congested transport corridors. Engineered to stand for century-scale design lifespans.",
    deliverables: [
      "Underwater caisson sinking and tremie concrete pours",
      "Balanced cantilever and incremental launching bridge methods",
      "Secant piling, slurry walls, and deep soil stabilization",
      "Heavy-duty marine docking and lock structures",
    ],
  },
  {
    number: "05",
    name: "RESTORATION & SEISMIC",
    tags: ["CARBON FIBER", "UNDERPINNING", "HISTORIC FABRIC"],
    image: "/images/XevLGaPtsCniv0VETXlJSmNKo.jpg",
    subheadline: "Giving historic masonry and fatigue-stressed concrete another 100 years of life.",
    description:
      "Specialized retrofitting of century-old industrial, institutional, and historic landmarks. We combine base-isolation bearings, carbon-fiber composite wraps, and surgical micro-piling to exceed modern seismic codes.",
    deliverables: [
      "Base isolation elastomeric bearing installation",
      "Carbon-fiber reinforced polymer (CFRP) structural bonding",
      "Deep foundation underpinning through restricted basements",
      "Facade preservation and sympathetic structural stabilization",
    ],
  },
];
