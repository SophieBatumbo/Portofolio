import { DownloadFile, Education, Experience, Presentation, Projects, Skills } from "./model";

export const mockPresentation: Presentation = {
  title: "Hi all, I'm Sophie",
  description: "Curious and dedicated to web development, I design modern and responsive user interfaces. I focus on providing a seamless and intuitive user experience, ensuring that every detail improves usability and accessibility.",
  illustrationPath: "assets/illustrations-sections/presentation.png",
  illustrationDesc: "Illustration of a web developerworking on projet."
};

export const mockSkills: Skills = 
{
  title: "My skills",
  logos: [
    {path: "assets/logos/javascript.png", legend:"Javascript"}, 
    {path: "assets/logos/angular.png", legend:"Angular"}, 
    {path: "assets/logos/html.png", legend:"HTML5"}, 
    {path: "assets/logos/css.png", legend:"CSS3"}, 
    {path: "assets/logos/sass.png", legend:"SASS"}, 
    {path: "assets/logos/github.png", legend:"GitHub"}
  ],
  skills_names: ["Web development step : Javascript in 3D modelisation world, I wanted to learn about framework.", 
    "Angular step: NgBootstrap open source design system, sooo interesting, but needed to learn about integration.", 
    "Personnal project step : new skills and challenges as architecture, components' tree, and apply fresh knowledge.",
    "Web integration step : after CMA mission, SASS and CSS are now my besties ❤️. I'm ready to be an Angular developer !"],
  illustrationPath: "assets/illustrations-sections/skills.png",
  illustrationDesc: "Illustration du développement frontend."
};

export const mockProjects: Projects = 
{
  sectionTitle: "Projects",
  projectsCards: [
    {
      logoPath: "assets/logos/git-repository.svg",
      title: "Portfolio",
      link: "https://github.com/SophieBatumbo/PersonnalPage",
      description: "A modern web page responsive to present my experience and projects.",
      spotPoints: ["Developped with Angular", "SASS and CSS animations", "Responsive"],
      technos: [{name:"Typescript", color:"blue"}, {name:"SASS", color:"pink"}, {name:"HTML", color:"orange"}],
      forkNumber: '0',
      size: 2.1
    },
    {
      logoPath: "assets/logos/git-repository.svg",
      title: "Analyco",
      link: "https://github.com/SophieBatumbo/analyco-frontend",
      description: "A web application to manage a micro business accountability.",
      spotPoints: ["Developped with Angular", "FastAPI for the backend endpoints", "Minimalist and ergonomic interface"],
      technos: [{name:"Typescript", color:"blue"}, {name:"SASS", color:"pink"}, {name:"HTML", color:"orange"}],
      forkNumber: '2',
      size: 5.3
    },
    {
      logoPath: "assets/logos/git-repository.svg",
      title: "NgBootstrap",
      link: "https://github.com/SophieBatumbo/ng-bootstrap",
      description: "An open source design system fit for Angular projects.",
      spotPoints: ["Uses only Angular and Bootstrap CSS", "Downloaded 500 000/month by developers", "Does not require jQuery"],
      technos: [{name:"Typescript", color:"blue"}, {name:"SASS", color:"pink"}, {name:"HTML", color:"orange"}],
      forkNumber: '1.6k',
      size: 12.96
    }
  ],
  illustrationPath: "assets/illustrations-sections/projects.png",
  illustrationDesc: "Capture d'écran du portfolio."
};

export const mockExperiences: Experience[] = [
  {
    company: "CMA CGM",
    logoPath: "assets/logos/cma.png",
    jobTitle: "Web Developper",
    period: "Sep 2023 - Oct 2024",
    description: "Development of design system, mockup's implementation with UX/UI designers."
  },
  {
    company: "Amadeus",
    logoPath: "assets/logos/amadeus-blue.png",
    jobTitle: "Web Developper",
    period: "Feb 2023 - Aug 2023",
    description: "Development of design system, unit and e2e tests, support users of the design system."
  },
  {
    company: "Naval Group",
    logoPath: "assets/logos/navalgroup.png",
    jobTitle: "Project Engeneer",
    period: "Aug 2022 - Dec 2022",
    description: "Assist and support client via a service center, automation of data treatment in VBA."
  },
  {
    company: "Dassault Systemes",
    logoPath: "assets/logos/3ds.png",
    jobTitle: "Web Developper",
    period: "Sep 2021 - Jul 2022",
    description: "Release managment, migration of translation technology of 3D modelisation software."
  },
  {
    company: "Dassault Systemes",
    logoPath: "assets/logos/3ds.png",
    jobTitle: "Web Developper",
    period: "Mar 2021 - Sep 2021",
    description: " Internship - Implement virtual rooms with spatial sound in 3D modelisation software."
  },
  {
    company: "Dassault Systemes",
    logoPath: "assets/logos/3ds.png",
    jobTitle: "Web Developper",
    period: "May 2020 - Aug 2020",
    description: " Internship - Implement a new 3D modelisation's paradigm in 3D modelisation software."
  }
];

export const mockEducation: Education[] = [
  {
    diploma: 'Bac Scientifique',
    establishment: 'Lycée Alain',
    period: '2013 - 2016'
  },
  {
    diploma: 'Licence MIAGE',
    establishment: 'Nanterre university',
    period: '2016 - 2019'
  },
  {
    diploma: 'Master MIAGE',
    establishment: 'Nanterre university',
    period: '2019 - 2021'
  },
  {
    diploma: 'PSM1 certificate',
    establishment: 'Squad',
    period: '2024'
  }
];

export const mockDownloadFile: DownloadFile = {
  url: 'assets/resume.pdf',
  file: 'resume.pdf',
  name: 'CV_2025-02_Sophie_Batumbo.pdf'
};
