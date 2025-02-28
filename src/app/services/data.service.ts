import { Injectable } from '@angular/core';
import { mockContact, mockDownloadFile, mockEducation, mockExperiences, mockLogoPage, mockNavActions, mockPresentation, mockProjects, mockSkills } from '../models/mockup-data';
import { Observable, of } from 'rxjs';
import { ContactSection, DownloadFile, EducationSection, ExperienceSection, Illustration, PresentationSection, ProjectSection, SkillSection } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getNavLogoData(): Observable<Illustration> {
    return of(mockLogoPage);
  }

  getPresentationData():Observable<PresentationSection>{
    return of(mockPresentation);
  }

  getSkillsData():Observable<SkillSection>{
    return of(mockSkills);
  }

  getWorkExperienceData():Observable<ExperienceSection>{
    return of(mockExperiences);
  }

  getProjectsData():Observable<ProjectSection>{
    return of(mockProjects);
  }

  getEducationData():Observable<EducationSection>{
    return of(mockEducation);
  }

  getContactData():Observable<ContactSection>{
    return of(mockContact);
  }

  getDownloadFileData():Observable<DownloadFile>{
    return of(mockDownloadFile);
  }

  getNavActions():Observable<string[]>{
    return of(mockNavActions);
  }
}
