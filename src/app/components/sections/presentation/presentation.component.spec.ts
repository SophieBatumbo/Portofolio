import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationComponent } from './presentation.component';

describe('PresentationComponent', () => {
  let component: PresentationComponent;
  let fixture: ComponentFixture<PresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentationComponent);
    component = fixture.componentInstance;
    component.presentation = {
      title: "Hi all, I'm Sophie",
      description: "blablabla",
      links: [
        {
          url:'',
          targetAttribute: '_blank'
        },{
          url:'',
          targetAttribute: '_blank'
        }
      ]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h1');
  
    expect(title).toBeTruthy(); 
    expect(title?.textContent?.trim())
    .withContext('Application title is not provided')
    .toBe("Hi all, I'm Sophie");
  });
});
