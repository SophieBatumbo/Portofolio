import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { DataService } from './data.service';
import { mockLogoPage, mockPresentation, mockSkills, mockExperiences, mockProjects, mockEducation, mockContact, mockDownloadFile, mockNavActions } from '../models/mockup-data';
import { Illustration, PresentationSection, SkillSection, ExperienceSection, ProjectSection, EducationSection, ContactSection, DownloadFile } from '../models/model';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMockData()', () => {
    it('should return the correct data after 500ms', fakeAsync(() => {
      let result: Illustration | undefined;
      service.getNavLogoData().subscribe((data) => (result = data));

      expect(result).toBeUndefined(); // Not yet emitted
      tick(500); // Simulate 500ms delay
      expect(result).toEqual(mockLogoPage); // Now data should be emitted
    }));
  });

  describe('getNavLogoData()', () => {
    it('should return mock logo page data', fakeAsync(() => {
      let result: Illustration | undefined;
      service.getNavLogoData().subscribe((data) => (result = data));

      tick(500);
      expect(result).toEqual(mockLogoPage);
    }));
  });

  describe('getPresentationData()', () => {
    it('should return mock presentation data', fakeAsync(() => {
      let result: PresentationSection | undefined;
      service.getPresentationData().subscribe((data) => (result = data));

      tick(500);
      expect(result).toEqual(mockPresentation);
    }));
  });

  describe('getSkillsData()', () => {
    it('should return mock skills data', fakeAsync(() => {
      let result: SkillSection | undefined;
      service.getSkillsData().subscribe((data) => (result = data));

      tick(500);
      expect(result).toEqual(mockSkills);
    }));
  });

  describe('getWorkExperienceData()', () => {
    it('should return mock experience data', fakeAsync(() => {
      let result: ExperienceSection | undefined;
      service.getWorkExperienceData().subscribe((data) => (result = data));

      tick(500);
      expect(result).toEqual(mockExperiences);
    }));
  });

  describe('getProjectsData()', () => {
    it('should return mock projects data', fakeAsync(() => {
      let result: ProjectSection | undefined;
      service.getProjectsData().subscribe((data) => (result = data));

      tick(500);
      expect(result).toEqual(mockProjects);
    }));
  });

  describe('getEducationData()', () => {
    it('should return mock education data', fakeAsync(() => {
      let result: EducationSection | undefined;
      service.getEducationData().subscribe((data) => (result = data));

      tick(500);
      expect(result).toEqual(mockEducation);
    }));
  });

  describe('getContactData()', () => {
    it('should return mock contact data', fakeAsync(() => {
      let result: ContactSection | undefined;
      service.getContactData().subscribe((data) => (result = data));

      tick(500);
      expect(result).toEqual(mockContact);
    }));
  });

  describe('getDownloadFileData()', () => {
    it('should return mock download file data', fakeAsync(() => {
      let result: DownloadFile | undefined;
      service.getDownloadFileData().subscribe((data) => (result = data));

      tick(500);
      expect(result).toEqual(mockDownloadFile);
    }));
  });

  describe('getNavActions()', () => {
    it('should return mock navigation actions data', fakeAsync(() => {
      let result: string[] | undefined;
      service.getNavActions().subscribe((data) => (result = data));

      tick(500);
      expect(result).toEqual(mockNavActions);
    }));
  });
});
