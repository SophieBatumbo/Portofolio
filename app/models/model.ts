export interface Presentation  {
  title: string;
  description: string;
  illustrationPath: string;
  illustrationDesc: string;
}

export interface Skills {
  title: string;
  logos: {path: string, legend: string}[];
  skills_names: string[];
  illustrationPath: string;
  illustrationDesc: string;
}

export interface Card  {
  logoPath: string;
  title: string;
  description: string;
  spotPoints: string[];
}

export interface Project {
  title: string;
  cards: Card[];
  illustrationPath: string;
  illustrationDesc: string;
}

export interface Experience {
  company: string;
  logoPath: string;
  jobTitle: string;
  period: string;
  description: string;
}