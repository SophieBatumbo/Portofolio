import { Injectable } from '@angular/core';
import { mockExperiences, mockPresentation, mockProjects, mockSkills } from '../models/mockup-data';
import { Observable, of } from 'rxjs';
import { Experience, Presentation, Project, Skills } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPresentationData():Observable<Presentation>{
    return of(mockPresentation);
  }

  getSkillsData():Observable<Skills>{
    return of(mockSkills);
  }

  getWorkExperienceData():Observable<Experience[]>{
    return of(mockExperiences);
  }

  getProjectsData():Observable<Project[]>{
    return of(mockProjects);
  }

  getEducationData(){
    //return of(mockEducation);
  }
}
