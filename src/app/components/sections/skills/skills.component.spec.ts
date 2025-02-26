import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';
import { DataService } from '../../../services/data.service';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsComponent);
    dataService = TestBed.inject(DataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display list of skills', () => {
    component.skills = {
      title: 'My super skills',
      logos: [{path:'assets/cuteImage.png', legend:'colorfull and cute'},{path:'', legend:''}],
      skills_names: ['brave', 'empathic', 'giver'],
      illustrationPath: 'assets/funImage.png',
      illustrationDesc: 'crazy image'
    };
    let skillsElement = fixture.nativeElement;
    //expect(compiled.querySelector('h2').textContent).toBe('My super skills');
    expect(skillsElement.querySelector('ul.skills-list li:first-child').textContent).toBe('brave');
    expect(skillsElement.querySelector('ul.skills-list li:nth-child(2)').textContent).toBe('empathic');
    expect(skillsElement.querySelector('ul.skills-list li:last-child').textContent).toBe('giver');
    /*expect(compiled.querySelector('section.logos span:first-child img').src).toBe('assets/cuteImage.png');
    expect(compiled.querySelector('section.logos span:first-child legend').textContent).toBe('colorfull and cute');
    expect(compiled.querySelector('section#skills > img').src).toBe('assets/funImage.png');
    expect(compiled.querySelector('section#skills > img').alt).toBe('crazy image');*/
  });

  it('should display title of section', () => {
    component.skills = {
      title: 'My super skills',
      logos: [{path:'assets/cuteImage.png', legend:'colorfull and cute'},{path:'', legend:''}],
      skills_names: ['brave', 'empathic', 'giver'],
      illustrationPath: 'assets/funImage.png',
      illustrationDesc: 'crazy image'
    };
    let compiled: HTMLElement = fixture.nativeElement;
    console.error(compiled.querySelector('h2'));
    //expect(compiled.querySelector('h2').textContent).toBe('My super skills');
    expect(compiled.textContent).toContain('My super skills');
    /*expect(compiled.querySelector('ul.skills-list li:first-child').textContent).toBe('brave');
    expect(compiled.querySelector('ul.skills-list li:nth-child(2)').textContent).toBe('empathic');
    expect(compiled.querySelector('ul.skills-list li:last-child').textContent).toBe('giver');
    expect(compiled.querySelector('section.logos span:first-child img').src).toBe('assets/cuteImage.png');
    expect(compiled.querySelector('section.logos span:first-child legend').textContent).toBe('colorfull and cute');
    expect(compiled.querySelector('section#skills > img').src).toBe('assets/funImage.png');
    expect(compiled.querySelector('section#skills > img').alt).toBe('crazy image');*/
  });

  /*it('should display list of skills', () => {
    component.skills = {
      title: 'My super skills',
      logos: [{path:'assets/cuteImage.png', legend:'colorfull and cute'},{path:'', legend:''}],
      skills_names: ['brave', 'empathic', 'giver'],
      illustrationPath: 'assets/funImage.png',
      illustrationDesc: 'crazy image'
    };
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toBe('My super skills');
    expect(compiled.querySelector('ul.skills-list li:first-child').textContent).toBe('brave');
    expect(compiled.querySelector('ul.skills-list li:nth-child(2)').textContent).toBe('empathic');
    expect(compiled.querySelector('ul.skills-list li:last-child').textContent).toBe('giver');
    expect(compiled.querySelector('section.logos span:first-child img').src).toBe('assets/cuteImage.png');
    expect(compiled.querySelector('section.logos span:first-child legend').textContent).toBe('colorfull and cute');
    expect(compiled.querySelector('section#skills > img').src).toBe('assets/funImage.png');
    expect(compiled.querySelector('section#skills > img').alt).toBe('crazy image');
  });*/
});
