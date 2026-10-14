export interface TimelineLevel {
  levelNumber: string;
  outlineNumber: string;
  title: string;
  timeframe: string;
  image: string;
  description: string;
  bulletPoints: string[];
}

export const TIMELINE_LEVELS: TimelineLevel[] = [
  {
    levelNumber: "LEVEL 00",
    outlineNumber: "01",
    title: "SURVEY",
    timeframe: "WEEK 0–4",
    image: "/images/yBBY6MbyHbb3vNonuZPaW1SRx4.jpg",
    description:
      "Laser geodetic surveying, 3D LiDAR point-cloud mapping, and geotechnical borehole drilling. We establish sub-millimeter bench references before earth is disturbed.",
    bulletPoints: [
      "Subsoil radar scanning to 30m depth",
      "Digital terrain elevation modeling",
      "Environmental & water table baseline survey",
    ],
  },
  {
    levelNumber: "LEVEL 01",
    outlineNumber: "02",
    title: "EXCAVATE",
    timeframe: "WEEK 4–12",
    image: "/images/umiAul3BCC6J5wiNHx7VCJRrs.jpg",
    description:
      "Secant piling walls, interlocking sheet piles, and deep trenching down to load-bearing stratum. Dewatering systems running 24/7 with real-time settlement telemetry.",
    bulletPoints: [
      "Deep basement retention piling",
      "High-volume controlled earth removal",
      "Adjacent structure vibration sensors",
    ],
  },
  {
    levelNumber: "LEVEL 02",
    outlineNumber: "03",
    title: "FOUNDATION",
    timeframe: "WEEK 12–24",
    image: "/images/N3y8qP9josbTFQ04tUWWGGECc.jpg",
    description:
      "Mass raft foundation pour executed in continuous 48-hour shifts. High-density multi-layer steel rebar cages integrated with internal fiber-optic thermal cure sensors.",
    bulletPoints: [
      "Continuous mass pour logistics",
      "Self-compacting low-heat concrete mix",
      "Internal thermal dissipation cooling tubes",
    ],
  },
  {
    levelNumber: "LEVEL 03",
    outlineNumber: "04",
    title: "FRAME",
    timeframe: "MONTH 6–18",
    image: "/images/kQlbW52BNh2N5AkiRh0cQPwGWA.jpg",
    description:
      "High-speed hydraulic climbing forms for the concrete central core. Simultaneous erection of composite structural steel trusses and post-tensioned floor slabs.",
    bulletPoints: [
      "Self-climbing hydraulic formwork",
      "Heavy dual-tower crane synchronization",
      "Floor-by-floor safety perimeter cocoons",
    ],
  },
  {
    levelNumber: "LEVEL 04",
    outlineNumber: "05",
    title: "HANDOVER",
    timeframe: "MONTH 18+",
    image: "/images/lQ9et0c22tqAJR1VFU4r9RQCf3w.jpg",
    description:
      "Triple-glazed unitized curtain wall enclosure, full MEP commissioning, acoustic testing, and structured BIM asset model handover to facility management.",
    bulletPoints: [
      "Envelope air-tightness & pressure testing",
      "Full building systems integration audit",
      "Zero-defect client commissioning ceremony",
    ],
  },
];
