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
  link: string;
  description: string;
  spotPoints: string[];
  technos: {name: string, color: string}[];
  forkNumber: string;
  size: number;
}

export interface Projects {
  sectionTitle: string;
  projectsCards: Card[];
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

export interface Education {
  diploma: string;
  establishment: string;
  period: string;
}

export interface DownloadFile {
  url: string;
  file: string;
  name: string;
}