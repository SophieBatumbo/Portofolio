import { Component, OnInit } from '@angular/core';
import { PresentationComponent } from "../../sections/presentation/presentation.component";
import { DataService } from '../../../services/data.service';
import { ContactSection, DownloadFile, EducationSection, ExperienceSection, PresentationSection, ProjectSection, SkillSection } from '../../../models/model';
import { ExperienceComponent } from "../../sections/experience/experience.component";
import { SkillsComponent } from "../../sections/skills/skills.component";
import { ProjectsComponent } from "../../sections/projects/projects.component";
import { EducationComponent } from '../../sections/education/education.component';
import { ContactComponent } from "../../sections/contact/contact.component";
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { ScrollDownComponent } from '../../common/scroll-down/scroll-down.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    PresentationComponent, 
    ScrollDownComponent,
    ExperienceComponent, 
    SkillsComponent, 
    ProjectsComponent, 
    EducationComponent, 
    ContactComponent,
    BackToTopComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent implements OnInit {

  presentationData$!: Observable<PresentationSection>;
  downloadResumeData$!: Observable<DownloadFile>;
  skillsData$!: Observable<SkillSection>;
  experienceData$!: Observable<ExperienceSection>;
  projectData$!: Observable<ProjectSection>;
  educationData$!: Observable<EducationSection>;
  contactData$!: Observable<ContactSection>;

  constructor (private dataService: DataService) {}

  ngOnInit(){
    this.presentationData$ = this.dataService.getPresentationData();
    this.downloadResumeData$ = this.dataService.getDownloadFileData();
    this.skillsData$ = this.dataService.getSkillsData();
    this.experienceData$ = this.dataService.getWorkExperienceData();
    this.projectData$ = this.dataService.getProjectsData();
    this.educationData$ = this.dataService.getEducationData();
    this.contactData$ = this.dataService.getContactData();
  }

}


