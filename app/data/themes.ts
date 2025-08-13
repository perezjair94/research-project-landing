export interface SubTheme {
  id: string;
  title: string;
  highlights: number;
}

export interface Theme {
  id: string;
  title: string;
  color: string;
  size: "small" | "medium" | "large";
  position: { x: number; y: number };
  subthemes: SubTheme[];
}

export const themes: Theme[] = [
  {
    id: "community-life",
    title: "Community Life",
    color: "bg-cv-orange/80",
    size: "medium",
    position: { x: -180, y: -55 },
    subthemes: [
      { id: "community-events", title: "Community Events", highlights: 45 },
      {
        id: "neighborhood-relationships",
        title: "Neighborhood Relationships",
        highlights: 38,
      },
      { id: "social-activities", title: "Social Activities", highlights: 29 },
      { id: "community-spaces", title: "Community Spaces", highlights: 22 },
    ],
  },
  {
    id: "public-health",
    title: "Public Health",
    color: "bg-cv-blue/50",
    size: "medium",
    position: { x: 0, y: -200 },
    subthemes: [
      { id: "healthcare-access", title: "Healthcare Access", highlights: 52 },
      { id: "health-facilities", title: "Health Facilities", highlights: 41 },
      { id: "mental-health", title: "Mental Health", highlights: 33 },
      {
        id: "environmental-health",
        title: "Environmental Health",
        highlights: 28,
      },
    ],
  },
  {
    id: "economic-opportunity",
    title: "Economic Opportunity",
    color: "bg-cv-green/80",
    size: "small",
    position: { x: 145, y: -125 },
    subthemes: [
      { id: "job-opportunities", title: "Job Opportunities", highlights: 67 },
      { id: "local-business", title: "Local Business", highlights: 34 },
      { id: "financial-services", title: "Financial Services", highlights: 26 },
      { id: "entrepreneurship", title: "Entrepreneurship", highlights: 19 },
    ],
  },
  {
    id: "housing",
    title: "Housing",
    color: "bg-cv-pink/50",
    size: "large",
    position: { x: 180, y: 30 },
    subthemes: [
      { id: "housing-quality", title: "Housing Quality", highlights: 89 },
      {
        id: "housing-affordability",
        title: "Housing Affordability",
        highlights: 226,
      },
      { id: "homeownership", title: "Homeownership", highlights: 68 },
      {
        id: "gentrification",
        title: "Gentrification And Displacement",
        highlights: 145,
      },
    ],
  },
  {
    id: "safety",
    title: "Safety",
    color: "bg-cv-teal/50",
    size: "small",
    position: { x: 135, y: 180 },
    subthemes: [
      { id: "crime-prevention", title: "Crime Prevention", highlights: 78 },
      { id: "police-relations", title: "Police Relations", highlights: 56 },
      { id: "traffic-safety", title: "Traffic Safety", highlights: 42 },
      { id: "emergency-services", title: "Emergency Services", highlights: 31 },
    ],
  },
  {
    id: "inequality",
    title: "Inequality",
    color: "bg-cv-purple/50",
    size: "medium",
    position: { x: 0, y: 160 },
    subthemes: [
      { id: "social-inequality", title: "Social Inequality", highlights: 93 },
      { id: "economic-disparity", title: "Economic Disparity", highlights: 71 },
      { id: "discrimination", title: "Discrimination", highlights: 48 },
      {
        id: "access-opportunities",
        title: "Access to Opportunities",
        highlights: 62,
      },
    ],
  },
  {
    id: "education",
    title: "Education",
    color: "bg-cv-yellow/50",
    size: "small",
    position: { x: -145, y: 105 },
    subthemes: [
      { id: "school-quality", title: "School Quality", highlights: 84 },
      {
        id: "educational-programs",
        title: "Educational Programs",
        highlights: 47,
      },
      { id: "youth-development", title: "Youth Development", highlights: 39 },
      { id: "adult-education", title: "Adult Education", highlights: 25 },
    ],
  },
  {
    id: "government-institutions",
    title: "Government And Institutions",
    color: "bg-cv-teal/50",
    size: "large",
    position: { x: -10, y: -20 },
    subthemes: [
      { id: "civic-engagement", title: "Civic Engagement", highlights: 156 },
      {
        id: "government-services",
        title: "Government Services",
        highlights: 134,
      },
      {
        id: "institutional-trust",
        title: "Institutional Trust",
        highlights: 89,
      },
      {
        id: "public-participation",
        title: "Public Participation",
        highlights: 72,
      },
    ],
  },
];
