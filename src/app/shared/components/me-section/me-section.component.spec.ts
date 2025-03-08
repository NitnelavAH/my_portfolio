import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeSectionComponent } from './me-section.component';

describe('MeSectionComponent', () => {
  let component: MeSectionComponent;
  let fixture: ComponentFixture<MeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
