import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  template: `<h1>Mocked Navbar</h1>`
})
class NavBarComponentMock { }

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).overrideComponent(AppComponent, {
      add: {
        imports: [NavBarComponentMock]
      },
      remove: {
        imports: [NavBarComponent]
      }
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should render the navbar and router-outlet`, () => {
    expect(compiled.querySelector('app-nav-bar')).not.toBeNull();
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });
});
