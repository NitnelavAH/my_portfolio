import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { Component, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { getTranslocoModule } from '../../../transloco-testing.module';
import { LangToggleComponent } from '../lang-toggle/lang-toggle.component';

@Component({
  selector: 'app-lang-toggle',
  standalone: true,
  template: `<h1>Mocked component</h1>`
})
class LangToggleComponentMock {}

describe('NavBarComponent', () => {

  let fixture: ComponentFixture<NavBarComponent>;
  let compiled: HTMLElement;
  let component: NavBarComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent, getTranslocoModule()],
      providers: [provideExperimentalZonelessChangeDetection(), provideRouter([])]
    }).overrideComponent(NavBarComponent, {
      add: {
        imports: [LangToggleComponentMock]
      },
      remove: {
        imports: [LangToggleComponent]
      }
    }).compileComponents();
    fixture = TestBed.createComponent(NavBarComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should render the lang-toogle`, () => {
    expect(compiled.querySelector('app-lang-toggle')).not.toBeNull();
  });

  //TODO routerlinks buttons test
});
