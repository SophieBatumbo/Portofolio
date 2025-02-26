import { Component, OnInit } from '@angular/core';
import { PresentationComponent } from "../../sections/presentation/presentation.component";
import { DataService } from '../../../services/data.service';
import { Education, Experience, Presentation, Projects, Skills } from '../../../models/model';
import { WorkExperienceComponent } from "../../sections/work-experience/work-experience.component";
import { SkillsComponent } from "../../sections/skills/skills.component";
import { ProjectsComponent } from "../../sections/projects/projects.component";
import { EducationComponent } from '../../sections/education/education.component';
import { ContactComponent } from "../../sections/contact/contact.component";
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    PresentationComponent, 
    WorkExperienceComponent, 
    SkillsComponent, 
    ProjectsComponent, 
    EducationComponent, 
    ContactComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent implements OnInit {

  presentationData!: Observable<Presentation>;
  skillsData: Observable<Skills> = of();
  experienceData: Observable<Experience[]> = of();
  projectData: Observable<Projects> = of();
  educationData: Observable<Education[]> = of();

  constructor (private dataService: DataService) {}

  ngOnInit(){
    this.presentationData = this.dataService.getPresentationData();
    this.skillsData = this.dataService.getSkillsData();
    this.experienceData = this.dataService.getWorkExperienceData();
    this.projectData = this.dataService.getProjectsData();
    this.educationData = this.dataService.getEducationData();
  }

}
