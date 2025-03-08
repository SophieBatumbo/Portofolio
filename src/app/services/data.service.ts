import { Injectable } from '@angular/core';
import { mockContact, mockDownloadFile, mockEducation, mockExperiences, mockLogoPage, mockNavActions, mockPresentation, mockProjects, mockSkills } from '../models/mockup-data';
import { delay, Observable, of } from 'rxjs';
import { ContactSection, DownloadFile, EducationSection, ExperienceSection, Illustration, PresentationSection, ProjectSection, SkillSection } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private getMockData<T>(data: T): Observable<T> {
    return of(data).pipe(delay(500));
  }

  getNavLogoData(): Observable<Illustration> {
    return this.getMockData(mockLogoPage);
  }

  getPresentationData():Observable<PresentationSection>{
    return this.getMockData(mockPresentation);
  }

  getSkillsData():Observable<SkillSection>{
    return this.getMockData(mockSkills);
  }

  getWorkExperienceData():Observable<ExperienceSection>{
    return this.getMockData(mockExperiences);
  }

  getProjectsData():Observable<ProjectSection>{
    return this.getMockData(mockProjects);
  }

  getEducationData():Observable<EducationSection>{
    return this.getMockData(mockEducation);
  }

  getContactData():Observable<ContactSection>{
    return this.getMockData(mockContact);
  }

  getDownloadFileData():Observable<DownloadFile>{
    return this.getMockData(mockDownloadFile);
  }

  getNavActions():Observable<string[]>{
    return this.getMockData(mockNavActions);
  }
}
