import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePointComponent } from './timeline-point.component';

describe('TimelinePointComponent', () => {
  let component: TimelinePointComponent;
  let fixture: ComponentFixture<TimelinePointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelinePointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelinePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
