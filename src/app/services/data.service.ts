import { Injectable } from '@angular/core';
import { mockDownloadFile, mockEducation, mockExperiences, mockPresentation, mockProjects, mockSkills } from '../models/mockup-data';
import { Observable, of } from 'rxjs';
import { DownloadFile, Education, Experience, Presentation, Projects, Skills } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getPresentationData():Observable<Presentation>{
    return of(mockPresentation);
  }

  getSkillsData():Observable<Skills>{
    return of(mockSkills);
  }

  getWorkExperienceData():Observable<Experience[]>{
    return of(mockExperiences);
  }

  getProjectsData():Observable<Projects>{
    return of(mockProjects);
  }

  getEducationData():Observable<Education[]>{
    return of(mockEducation);
  }

  getDownloadFileData():Observable<DownloadFile>{
    return of(mockDownloadFile);
  }
}
