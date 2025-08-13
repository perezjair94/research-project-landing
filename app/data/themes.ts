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
    color: "bg-cv-orange",
    size: "medium",
    position: { x: -120, y: -80 },
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
    color: "bg-cv-blue",
    size: "medium",
    position: { x: 0, y: -100 },
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
    color: "bg-cv-green",
    size: "small",
    position: { x: 120, y: -80 },
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
    color: "bg-cv-pink",
    size: "large",
    position: { x: 100, y: 20 },
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
    color: "bg-cv-teal",
    size: "small",
    position: { x: 140, y: 100 },
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
    color: "bg-cv-purple",
    size: "medium",
    position: { x: 0, y: 80 },
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
    color: "bg-yellow-600",
    size: "small",
    position: { x: -80, y: 60 },
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
    color: "bg-cv-teal",
    size: "large",
    position: { x: -0, y: 0 },
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

