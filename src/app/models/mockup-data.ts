import { ContactSection, DownloadFile, EducationSection, ExperienceSection, Illustration, PresentationSection, ProjectSection, SkillSection } from "./model";

export const mockLogoPage: Illustration = {
  path: "assets/layout/logo.png",
  description: "Page logo"
};

export const mockPresentation: PresentationSection = {

  title: "Hi all, I'm Sophie",
  illustration: {
    path: "assets/illustrations-sections/presentation.webp",
    description: "Illustration of a web developer working on projet."
  },
  description: "Curious and dedicated to web development, I design modern and responsive user interfaces. I focus on providing a seamless and intuitive user experience, ensuring that every detail improves usability and accessibility.",
  links: [
    {
      url: "https://github.com/SophieBatumbo",
      targetAttribute: "_blank",
      icon: {
        path: "assets/logos/technos/github.png",
        description:'Github link',
        hoverPath:"assets/logos/technos/github-black.png"
      }
    },
    {
      url: "https://www.linkedin.com/in/sophie-batumbo-4a288614b/",
      targetAttribute: "_blank",
      icon: {
        path: "assets/logos/technos/linkedin.png",
        description:'LinkedIn link',
        hoverPath:"assets/logos/technos/linkedin-black.png"
      } 
    }
  ]
};

export const mockSkills: SkillSection = 
{
  title: "My skills",
  illustration: {
    path: "assets/illustrations-sections/skills.webp",
    description: "Illustration of frontend development."
  },
  logos: [
    {path: "assets/logos/technos/javascript.png", legend:"Javascript"}, 
    {path: "assets/logos/technos/angular.png", legend:"Angular"}, 
    {path: "assets/logos/technos/html.png", legend:"HTML5"}, 
    {path: "assets/logos/technos/css.png", legend:"CSS3"}, 
    {path: "assets/logos/technos/sass.png", legend:"SASS"}, 
    {path: "assets/logos/technos/github.png", legend:"GitHub"}
  ],
  skills: ["Web development step : Javascript in 3D modelisation world, I wanted to learn about framework.", 
    "Angular step: NgBootstrap open source design system, sooo interesting, but needed to learn about integration.", 
    "Personnal project step : new skills and challenges as architecture, components' tree, and apply fresh knowledge.",
    "Web integration step : after CMA mission, SASS and CSS are now my besties ❤️. I'm ready to be an Angular developer !"]
};

export const mockExperiences: ExperienceSection = {
  title: "Working experiences",
  illustration: {
    path:'',
    description:''
  },
  experiences: [
    {
      company: "CMA CGM",
      logoPath: "assets/logos/companies/cma.png",
      jobTitle: "Web Developper",
      period: "Sep 2023 - Oct 2024",
      description: "Development of design system, mockup's implementation with UX/UI designers."
    },
    {
      company: "Amadeus",
      logoPath: "assets/logos/companies/amadeus-blue.png",
      jobTitle: "Web Developper",
      period: "Feb 2023 - Aug 2023",
      description: "Development of design system, unit and e2e tests, support users of the design system."
    },
    {
      company: "Naval Group",
      logoPath: "assets/logos/companies/navalgroup.png",
      jobTitle: "Project Engeneer",
      period: "Aug 2022 - Dec 2022",
      description: "Assist and support client via a service center, automation of data treatment in VBA."
    },
    {
      company: "Dassault Systemes",
      logoPath: "assets/logos/companies/3ds.png",
      jobTitle: "Web Developper",
      period: "Sep 2021 - Jul 2022",
      description: "Release managment, migration of translation technology of 3D modelisation software."
    },
    {
      company: "Dassault Systemes",
      logoPath: "assets/logos/companies/3ds.png",
      jobTitle: "Web Developper",
      period: "Mar 2021 - Sep 2021",
      description: " Internship - Implement virtual rooms with spatial sound in 3D modelisation software."
    },
    {
      company: "Dassault Systemes",
      logoPath: "assets/logos/companies/3ds.png",
      jobTitle: "Web Developper",
      period: "May 2020 - Aug 2020",
      description: " Internship - Implement a new 3D modelisation's paradigm in 3D modelisation software."
    }
  ]
};

export const mockProjects: ProjectSection = 
{
  title: "Projects",
  illustration: {
    path: "assets/illustrations-sections/projects.webp",
    description: "Capture d'écran du portfolio."
  },
  projects: [
    {
      logoPath: "assets/icons/git-repository.svg",
      title: "Portfolio",
      link: "https://github.com/SophieBatumbo/PersonnalPage",
      description: "A modern web page responsive to present my experience and projects.",
      keyPoints: ["Developped with Angular", "SASS and CSS animations", "Responsive"],
      technos: [{name:"Typescript", color:"blue"}, {name:"SASS", color:"pink"}, {name:"HTML", color:"orange"}],
      forkNumber: '0',
      size: 2.1
    },
    {
      logoPath: "assets/icons/git-repository.svg",
      title: "Analyco",
      link: "https://github.com/SophieBatumbo/analyco-frontend",
      description: "A web application to manage a micro business accountability.",
      keyPoints: ["Developped with Angular", "FastAPI for the backend endpoints", "Minimalist and ergonomic interface"],
      technos: [{name:"Typescript", color:"blue"}, {name:"SASS", color:"pink"}, {name:"HTML", color:"orange"}],
      forkNumber: '2',
      size: 5.3
    },
    {
      logoPath: "assets/icons/git-repository.svg",
      title: "NgBootstrap",
      link: "https://github.com/SophieBatumbo/ng-bootstrap",
      description: "An open source design system fit for Angular projects.",
      keyPoints: ["Uses only Angular and Bootstrap CSS", "Downloaded 500 000/month by developers", "Does not require jQuery"],
      technos: [{name:"Typescript", color:"blue"}, {name:"SASS", color:"pink"}, {name:"HTML", color:"orange"}],
      forkNumber: '1.6k',
      size: 12.96
    }
  ]
};

export const mockEducation: EducationSection = {
  title: "Education",
  illustration: {
    path: "assets/illustrations-sections/education.webp",
    description: "education representation"
  },
  records: [
    {
      diploma: 'Bac Scientifique',
      institution: 'Lycée Alain',
      period: '2013 - 2016'
    },
    {
      diploma: 'Licence MIAGE',
      institution: 'Nanterre university',
      period: '2016 - 2019'
    },
    {
      diploma: 'Master MIAGE',
      institution: 'Nanterre university',
      period: '2019 - 2021'
    },
    {
      diploma: 'PSM1 certificate',
      institution: 'Squad',
      period: '2024'
    }
  ]
};

export const mockContact: ContactSection = {
  title: "Reach out to me",
  illustration: {
    path: '',
    description: ''
  },
  why: "Discuss a project or just wanna say hi ?",
  who: "My inbox is open for all​",
  mail: "sophie.bat@hotmail.fr",
  openToWork: true,
  links: [
    {
      url: "https://github.com/SophieBatumbo",
      targetAttribute: "_blank",
      icon: {
        path: "assets/logos/technos/github.png",
        description:'Github link',
        hoverPath:"assets/logos/technos/github-black.png"
      }
    },
    {
      url: "https://www.linkedin.com/in/sophie-batumbo-4a288614b/",
      targetAttribute: "_blank",
      icon: {
        path: "assets/logos/technos/linkedin.png",
        description:'LinkedIn link',
        hoverPath:"assets/logos/technos/linkedin-black.png"
      } 
    }
  ]
};

export const mockDownloadFile: DownloadFile = {
  url: 'assets/resume.pdf',
  name: 'CV_2025-02_Sophie_Batumbo.pdf'
};

export const mockNavActions: string[] = [
  mockSkills.title, 
  mockExperiences.title, 
  mockProjects.title, 
  mockEducation.title, 
  mockContact.title
];