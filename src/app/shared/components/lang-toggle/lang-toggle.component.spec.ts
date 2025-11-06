import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangToggleComponent } from './lang-toggle.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { getTranslocoModule } from '../../../transloco-testing.module';



describe('LangToggleComponent', () => {

  let fixture: ComponentFixture<LangToggleComponent>;
  let compiled: HTMLElement;
  let component: LangToggleComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangToggleComponent, getTranslocoModule()],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();
    fixture = TestBed.createComponent(LangToggleComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component toggle', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
