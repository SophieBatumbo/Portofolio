import { ContactSection, DownloadFile, EducationSection, ExperienceSection, Illustration, NavAction, PresentationSection, ProjectSection, SkillSection } from "./model";

export const mockLogoPage: Readonly<Illustration> = {
  path: "assets/layout/logo.webp",
  altText: "Page logo"
};

export const mockPresentation: Readonly<PresentationSection> = {

  title: "Hi all, I'm Sophie",
  illustration: {
    path: "assets/illustrations-sections/presentation.webp",
    altText: "Illustration of a web developer working on projet."
  },
  description: "Curious and dedicated to web development, I design modern and responsive user interfaces. I focus on providing a seamless and intuitive user experience, ensuring that every detail improves usability and accessibility.",
  links: [
    {
      url: "https://github.com/SophieBatumbo",
      targetAttribute: "_blank",
      icon: {
        path: "assets/logos/technos/github.png",
        altText:'Github link',
        hoverPath:"assets/logos/technos/github-black.png"
      }
    },
    {
      url: "https://www.linkedin.com/in/sophie-batumbo-4a288614b/",
      targetAttribute: "_blank",
      icon: {
        path: "assets/logos/technos/linkedin.png",
        altText:'LinkedIn link',
        hoverPath:"assets/logos/technos/linkedin-black.png"
      } 
    }
  ]
};

export const mockSkills: Readonly<SkillSection> = 
{
  title: "Skills",
  illustration: {
    path: "assets/illustrations-sections/skills.webp",
    altText: "Illustration of frontend development."
  },
  logos: [
    {path: "assets/logos/technos/javascript.webp", legend:"JavaScript"}, 
    {path: "assets/logos/technos/angular.webp", legend:"Angular"}, 
    {path: "assets/logos/technos/html.webp", legend:"HTML5"}, 
    {path: "assets/logos/technos/css.webp", legend:"CSS3"}, 
    {path: "assets/logos/technos/sass.webp", legend:"SASS"}, 
    {path: "assets/logos/technos/ngb.webp", legend:"NGBootstrap"},
    {path: "assets/logos/technos/github.webp", legend:"GitHub"},
    {path: "assets/logos/technos/bitbucket.svg", legend:"Bitbucket"},
    {path: "assets/logos/technos/gitlab.svg", legend:"GitLab"},
    {path: "assets/logos/technos/karma.webp", legend:"Karma"}, 
    {path: "assets/logos/technos/jasmine.webp", legend:"Jasmine"}
  ],
  skills: [
    {title:"JS development", description: "My journey began with JS for a 3D modeling software, sparking my interest in web frameworks."}, 
    {title:"Angular adventures", description: "Contributing to NgBootstrap highlighted my next focus as refining UI/UX integration skills."},  
    {title:"Web integration", description: "Creating UI elements from wireframes made SASS and CSS my besties."}, 
    {title:"Personal projects", description: "Facing new challenges such as architecture, component trees, accessibility, and performance. Ready for Angular development! 🚀"}
  ]
};

export const mockExperiences: Readonly<ExperienceSection> = {
  title: "Experiences",
  experiences: [
    {
      company: "CMA CGM",
      logoPath: "assets/logos/companies/cma.webp",
      jobTitle: "Web Developper",
      period: "Sep 2023 - Oct 2024",
      description: "Development of design system, mockups implementation with UX/UI designers.",
      skillsLogos: [
        {path: "assets/logos/technos/html.webp", altText:"HTML5 logo"}, 
        {path: "assets/logos/technos/css.webp", altText:"CSS3 logo"}, 
        {path: "assets/logos/technos/sass.webp", altText:"SASS logo"}, 
        {path: "assets/logos/technos/gitlab.svg", altText:"GitLab"}
      ]
    },
    {
      company: "Amadeus",
      logoPath: "assets/logos/companies/amadeus-blue.webp",
      jobTitle: "Web Developper",
      period: "Feb 2023 - Aug 2023",
      description: "Development of design system, unit and e2e tests, support users of the design system.",
      skillsLogos: [
        {path: "assets/logos/technos/angular.webp", altText:"Angular logo"}, 
        {path: "assets/logos/technos/html.webp", altText:"HTML5 logo"}, 
        {path: "assets/logos/technos/css.webp", altText:"CSS3 logo"}, 
        {path: "assets/logos/technos/sass.webp", altText:"SASS logo"}, 
        {path: "assets/logos/technos/ngb.webp", altText:"NGBootstrap logo"},
        {path: "assets/logos/technos/github.webp", altText:"GitHub logo"},
        {path: "assets/logos/technos/bitbucket.svg", altText:"Bitbucket logo"},
        {path: "assets/logos/technos/karma.webp", altText:"Karma logo"}, 
        {path: "assets/logos/technos/jasmine.webp", altText:"Jasmine logo"}
      ]
    },
    {
      company: "Naval Group",
      logoPath: "assets/logos/companies/navalgroup.webp",
      jobTitle: "Project Engeneer",
      period: "Aug 2022 - Dec 2022",
      description: "Assisting and supporting clients via a service center, automating data procesing in VBA."
    },
    {
      company: "Dassault Systemes",
      logoPath: "assets/logos/companies/3ds.webp",
      jobTitle: "Web Developper",
      period: "Sep 2021 - Jul 2022",
      description: "Release management, migration of the translation technology for 3D modeling software.",
      skillsLogos: [
        {
          path: "assets/logos/technos/javascript.webp",
          altText: "javascript icon"
        }
      ]
    },
    {
      company: "Dassault Systemes",
      logoPath: "assets/logos/companies/3ds.webp",
      jobTitle: "Web Developper",
      period: "Mar 2021 - Sep 2021",
      description: " Internship - Implemented virtual rooms with spatial sound in 3D modeling software.",
      skillsLogos: [
        {
          path: "assets/logos/technos/javascript.webp",
          altText: "javascript icon"
        }
      ]
    },
    {
      company: "Dassault Systemes",
      logoPath: "assets/logos/companies/3ds.webp",
      jobTitle: "Web Developper",
      period: "May 2020 - Aug 2020",
      description: " Internship - Implemented a new 3D modeling paradigm in 3D modeling software.",
      skillsLogos: [
        {
          path: "assets/logos/technos/javascript.webp",
          altText: "javascript icon"
        }
      ]
    }
  ]
};

export const mockProjects: Readonly<ProjectSection> = 
{
  title: "Projects",
  illustration: {
    path: "assets/illustrations-sections/projects.webp",
    altText: "Capture d'écran du portfolio."
  },
  projects: [
    {
      logoPath: "assets/icons/git-repository.svg",
      title: "Portfolio",
      link: "https://github.com/SophieBatumbo/PersonnalPage",
      description: "A modern, responsive web page to showcase my experience and projects.",
      keyPoints: ["Developed with Angular", "SASS & CSS animations", "Ergonomic & responsive"],
      technos: [{name:"Typescript", color:"blue"}, {name:"SASS", color:"pink"}, {name:"HTML", color:"orange"}],
      forkNumber: 0,
      size: 1.45
    },
    {
      logoPath: "assets/icons/git-repository.svg",
      title: "Analyco UI",
      link: "https://github.com/SophieBatumbo/analyco-frontend",
      description: "A web application to manage a micro business accountability.",
      keyPoints: ["Angular and PrimeNG", "REST API endpoints", "JWT authentication"],
      technos: [{name:"Typescript", color:"blue"}, {name:"SASS", color:"pink"}, {name:"HTML", color:"orange"}],
      forkNumber: 2,
      size: 5.3
    },
    {
      logoPath: "assets/icons/git-repository.svg",
      title: "NgBootstrap",
      link: "https://github.com/SophieBatumbo/ng-bootstrap",
      description: "An open source design system fit for Angular projects.",
      keyPoints: ["Angular and Bootstrap", "Downloaded 500 000/month", "Does not require jQuery"],
      technos: [{name:"Typescript", color:"blue"}, {name:"SASS", color:"pink"}, {name:"HTML", color:"orange"}],
      forkNumber: 1600,
      size: 12.96
    },
    {
      logoPath: "assets/icons/git-repository.svg",
      title: "Analyco API",
      link: "https://github.com/yupay-engineering/analyco-backend",
      description: "Endpoints for a web application to manage a micro business accountability.",
      keyPoints: ["Java", "REST API", "Quarkus"],
      technos: [{name:"Java", color:"brown"}],
      forkNumber: 2,
      size: 5.8
    }
  ]
};

export const mockEducation: Readonly<EducationSection> = {
  title: "Education",
  illustration: {
    path: "assets/illustrations-sections/education.webp",
    altText: "education representation"
  },
  records: [
    {
      diploma: 'PSM1 certificate',
      institution: 'Squad',
      period: '2024'
    },
    {
      diploma: 'Master MIAGE',
      institution: 'Nanterre university',
      period: '2019 - 2021'
    },
    {
      diploma: 'Licence MIAGE',
      institution: 'Nanterre university',
      period: '2016 - 2019'
    },
    {
      diploma: 'Bac Scientifique',
      institution: 'Lycée Alain',
      period: '2013 - 2016'
    }
  ]
};

export const mockContact: Readonly<ContactSection> = {
  title: "Contact me",
  why: "Discuss a project or anything else ?",
  who: "My inbox is open for all.​",
  mail: "sophie.bat@hotmail.fr",
  openToWork: true,
  links: [
    {
      url: "https://github.com/SophieBatumbo",
      targetAttribute: "_blank",
      icon: {
        path: "assets/logos/technos/github.png",
        altText:'Github link',
        hoverPath:"assets/logos/technos/github-black.png"
      }
    },
    {
      url: "https://www.linkedin.com/in/sophie-batumbo-4a288614b/",
      targetAttribute: "_blank",
      icon: {
        path: "assets/logos/technos/linkedin.png",
        altText:'LinkedIn link',
        hoverPath:"assets/logos/technos/linkedin-black.png"
      } 
    }
  ]
};

export const mockDownloadFile: Readonly<DownloadFile> = {
  url: 'assets/resume.pdf',
  name: 'CV_2025-04_Sophie_Batumbo.pdf'
};

export const mockNavActions: NavAction[] = [
  {title: mockSkills.title, anchor: "#skills"},
  {title: mockExperiences.title, anchor: "#workexperiences"},
  {title: mockProjects.title, anchor: "#projects"},
  {title: mockEducation.title, anchor: "#education"},
  {title: mockContact.title, anchor: "#contact"}
];