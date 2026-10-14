export interface MetricStat {
  tag: string;
  number: number | string;
  suffix: string;
  description: string;
}

export const METRIC_STATS: MetricStat[] = [
  {
    tag: "(01) YEARS BUILDING",
    number: 38,
    suffix: "+",
    description: "Since a single excavator in 1987.",
  },
  {
    tag: "(02) PROJECTS DELIVERED",
    number: 214,
    suffix: "+",
    description: "Towers, bridges, plants and homes.",
  },
  {
    tag: "(03) SAFE WORK HOURS",
    number: "1.2M",
    suffix: "",
    description: "Without a lost-time incident.",
  },
  {
    tag: "(04) PEOPLE ON PAYROLL",
    number: 640,
    suffix: "+",
    description: "Engineers, foremen & trades.",
  },
];
