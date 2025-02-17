import { Component } from '@angular/core';
import { PresentationComponent } from "../../sections/presentation/presentation.component";
import { DataService } from '../../services/data.service';
import { Education, Experience, Presentation, Projects, Skills } from '../../models/model';
import { WorkExperienceComponent } from "../../sections/work-experience/work-experience.component";
import { SkillsComponent } from "../../sections/skills/skills.component";
import { ProjectsComponent } from "../../sections/projects/projects.component";
import { EducationComponent } from '../../sections/education/education.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [PresentationComponent, WorkExperienceComponent, SkillsComponent, ProjectsComponent, EducationComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  presentationData!: Presentation;
  skillsData!: Skills;
  experienceData!: Experience[];
  projectData!: Projects;
  educationData!: Education[];

  constructor (private dataService: DataService) {}

  ngOnInit(){
    this.dataService.getPresentationData().subscribe(
      (data) => this.presentationData = data
    );
    this.dataService.getSkillsData().subscribe(
      (data) => this.skillsData = data
    );
    this.dataService.getWorkExperienceData().subscribe(
      (data) => this.experienceData = data
    );
    this.dataService.getProjectsData().subscribe(
      (data) => this.projectData = data
    );
    this.dataService.getEducationData().subscribe(
      (data) => this.educationData = data
    );
  }

}
