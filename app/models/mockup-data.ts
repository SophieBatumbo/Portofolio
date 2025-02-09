import { Experience, Presentation, Project, Skills } from "./model";

export const mockPresentation: Presentation = {
  title: "Hi all, I'm Sophie",
  description: "Passionnée par le développement web et l'expérience utilisateur, je crée des interfaces modernes, performantes et accessibles.",
  illustrationPath: "assets/presentation.png",
  illustrationDesc: "Illustration d'une développeuse travaillant sur un projet."
};

export const mockSkills: Skills = 
{
  title: "My skills",
  logos: [{path: "assets/logos/javascript.png", legend:"Javascript"}, {path: "assets/logos/angular.png", legend:"Angular"}, {path: "assets/logos/html.png", legend:"HTML5"}, {path: "assets/logos/css.png", legend:"CSS3"}, {path: "assets/logos/sass.png", legend:"SASS"}, {path: "assets/logos/github.png", legend:"GitHub"}],
  skills_names: ["Du blabla les tutos de mimi c les meilleurs", "Again and again lorem ipsum mimi et sos", "Nos aaaaaaaaaaaaamos", "En este proyecto tatati tatata du coup parce qu'en fait hihi lol"],
  illustrationPath: "assets/skills.png",
  illustrationDesc: "Illustration du développement frontend."
};

export const mockProjects: Project[] = [
  {
    title: "Projects",
    cards: [
      {
        logoPath: "assets/logos/angular.svg",
        title: "Conception du Portfolio",
        description: "Un site web responsive et performant pour présenter mon travail.",
        spotPoints: ["Développement en Angular", "Animations CSS et Angular Animations", "Optimisation SEO"]
      },
      {
        logoPath: "assets/logos/angular.svg",
        title: "Analyco",
        description: "Une application permettant de gérer des tâches efficacement.",
        spotPoints: ["Utilisation de RxJS pour la gestion des événements", "Stockage des tâches via Firebase", "Interface minimaliste et ergonomique"]
      }
    ],
    illustrationPath: "assets/images/portfolio-project.png",
    illustrationDesc: "Capture d'écran du portfolio."
  }
];

export const mockExperiences: Experience[] = [
  {
    company: "Tech Corp",
    logoPath: "assets/logos/3ds.png",
    jobTitle: "Développeuse Frontend Angular",
    period: "Jan 2022 - Présent",
    description: "Développement et maintenance d'applications Angular à fort trafic, intégration d'API REST et optimisation des performances."
  },
  {
    company: "Web Studio",
    logoPath: "assets/logos/navalgroup.png",
    jobTitle: "Développeuse Web",
    period: "Mai 2020 - Déc 2021",
    description: "Création d'interfaces web interactives avec Angular, collaboration avec l'équipe design pour améliorer l'UX/UI."
  }
];
