import { Component } from '@angular/core';
import { MeSectionComponent } from '../../shared/components/me-section/me-section.component';
import { AboutMeComponent } from '../../shared/components/about-me/about-me.component';
import { SkillsComponent } from '../../shared/components/skills/skills.component';
import { ExperienceComponent } from '../../shared/components/experience/experience.component';

@Component({
  selector: 'app-home',
  imports: [
    MeSectionComponent,
    AboutMeComponent, 
    SkillsComponent,
    ExperienceComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
