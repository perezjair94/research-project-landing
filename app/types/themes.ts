export interface PhotoStory {
  id: string;
  imageUrl: string;
  content: string;
  subtopic?: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  audio?: string;
  link?: string;
  subtopic?: string;
  photoStories?: PhotoStory[];
}

export interface ThemeContent {
  overview: string;
  highlights: string[];
  testimonials: Testimonial[];
}

export interface ThemeData {
  id: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  overlayColor: string;
  content: ThemeContent;
}

export interface ThemeCard {
  id: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  overlayColor: string;
}