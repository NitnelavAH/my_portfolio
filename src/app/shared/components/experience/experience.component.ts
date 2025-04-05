import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { Experience } from '../../../interfaces/experience.interface';

const experiences: Experience[] = [
  {
    startYear: 2022,
    endYear: 2023,
    title: 'Full Stack Developer',
    activities: [
      'Developed and maintained web applications using Angular and Node.js.',
      'Collaborated with cross-functional teams to define, design, and ship new features.',
      'Participated in code reviews and contributed to team knowledge sharing.'
    ],
    company: 'Tech Company',
    companyUrl: 'https://techcompany.com',
    skills: [
      'Angular',
      'Node.js',
      'TypeScript',
      'JavaScript'
    ]
  },
  {
    startYear: 2021,
    endYear: 2022,
    title: 'Frontend Developer',
    activities: [
      'Implemented responsive web designs using HTML, CSS, and JavaScript.',
      'Worked closely with designers to ensure high-quality user experiences.',
      'Optimized applications for maximum speed and scalability.'
    ],
    company: 'Design Studio',
    companyUrl: 'https://designstudio.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript'
    ]
  }
];

@Component({
  selector: 'app-experience',
  imports: [
    TranslocoModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  public experiences: Experience[] = experiences;

}
