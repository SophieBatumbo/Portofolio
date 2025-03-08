export interface Illustration {
  path: string;
  altText: string;
  hoverPath?: string;
}

export interface Logo {
  path: string;
  legend: string;
}

export interface Section {
  title: string;
  illustration?: Illustration;
}

export interface ProjectCard {
  logoPath: string;
  title: string;
  link: string;
  description: string;
  keyPoints: string[];
  technos: {name: string, color: string}[];
  forkNumber: number;
  size: number;
}

export interface AcademicRecord {
  diploma: string;
  institution: string;
  period: string;
}

export interface WorkExperience {
  company: string;
  logoPath: string;
  jobTitle: string;
  period: string;
  description: string;
}

export interface DownloadFile {
  url: string;
  name: string;
}

export interface Link {
  url: string;
  targetAttribute: "_self" | "_blank";
  icon?: Illustration;
}

export interface Skill {
  title: string;
  description: string;
}

/** SECTIONS **/

export interface PresentationSection extends Section {
  description: string;
  links: Link[];
}

export interface SkillSection extends Section {
  logos: Logo[];
  skills: Skill[];
}

export interface ProjectSection extends Section {
  projects: ProjectCard[];
}

export interface ExperienceSection extends Section {
  experiences: WorkExperience[];
}

export interface EducationSection extends Section {
  records: AcademicRecord[];
}

export interface ContactSection extends Section {
  why: string;
  who: string;
  mail: string;
  openToWork: boolean;
  links: Link[];
}
