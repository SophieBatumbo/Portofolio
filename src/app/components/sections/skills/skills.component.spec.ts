import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    component.skills = {
      title: 'My super skills',
      logos: [{path:'assets/cuteImage.png', legend:'colorfull and cute'},{path:'', legend:''}],
      skills: [
        {title:'brave', description:"fatty queen"}, 
        {title:'empathic', description:""}, 
        {title:'giver', description:""}
      ],
      illustration : { 
        path: 'assets/funImage.png', 
        altText: 'crazy image' 
      }
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display illustration of skills section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const illustrationSkills:HTMLImageElement | null = compiled.querySelector('section#skills > img');

    expect(illustrationSkills).toBeTruthy();

    expect(illustrationSkills?.src?.endsWith('assets/funImage.png'))
    .withContext('Source of picture is not pointing the good file.')
    .toBe(true);
    expect(illustrationSkills?.alt?.trim())
    .withContext('Alternative text is not provided')
    .toBe('crazy image');
  });

  it('should display title of section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h2');

    expect(title).toBeTruthy(); 
    expect(title?.textContent?.trim()).withContext('Title of Skill section is not provided').toBe("My super skills");
  });

  it('should display logos of hard skills', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logoSkills = compiled.querySelector('section.logos');
    const logoImg = logoSkills?.querySelector('img');
    const logoCaption = logoSkills?.querySelector('figcaption');
    const logoImgs = logoSkills?.querySelectorAll('img');
    


    expect(logoSkills).toBeTruthy();
    expect(logoImg).toBeTruthy();
    expect(logoCaption).toBeTruthy();
    expect(logoImgs).toBeTruthy();

    expect(logoImg?.src?.endsWith('assets/cuteImage.png'))
    .withContext('Source of picture is not pointing the good file.')
    .toBe(true);
    expect(logoCaption?.textContent?.trim())
    .withContext('Caption of hard skill logo is not provided')
    .toBe('colorfull and cute');
    expect(logoImgs?.length).withContext('Not all logos are displayed').toBe(2);
  });

  it('should display list of skills', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const skills = compiled.querySelector('ul.skills-list');
    const skillTitle1 = skills?.querySelector('.skills-list-elem:first-child .skills-list-elem-title');
    const skillDesc1 = skills?.querySelector('.skills-list-elem:first-child .skills-list-elem-desc');
    const skillTitle2 = skills?.querySelector('.skills-list-elem:nth-child(2) .skills-list-elem-title');
    const skillTitle3 = skills?.querySelector('.skills-list-elem:last-child .skills-list-elem-title');

    expect(skills).toBeTruthy();
    expect(skillTitle1).toBeTruthy();
    expect(skillDesc1).toBeTruthy();
    expect(skillTitle2).toBeTruthy();
    expect(skillTitle3).toBeTruthy();

    expect(skillTitle1?.textContent?.trim()).withContext('Skill title is not provided').toBe('brave');
    if (skillDesc1) {
    expect(skillDesc1?.textContent?.trim()).withContext('Skill description is not provided').toBe('fatty queen');
    } else {
      fail('Skill description element is missing');
    }
    expect(skillTitle2?.textContent?.trim()).withContext('Skill title is not provided').toBe('empathic');
    expect(skillTitle3?.textContent?.trim()).withContext('Skill title is not provided').toBe('giver');
  });
});
