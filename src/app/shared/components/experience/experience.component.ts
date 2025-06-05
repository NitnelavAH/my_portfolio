import { Component, inject, OnInit, signal } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Experience } from '../../../interfaces/experience.interface';
import { v4 as uuidv4 } from 'uuid';
import { SubSink } from 'subsink';
import { distinctUntilChanged } from 'rxjs';

const experiences: Experience[] = [
  {
    id: uuidv4(),
    startYear: 2021,
    endYear: -1,
    title: 'Frontend Developer',
    activities: [
      'Developed web & mobile apps (eCommerce, TMS, content managers, quoters, etc) using Angular, Ionic & Flutter.',
      'Optimized performance with lazy loading, SSR, and SEO best practices.',
      'Enhanced UI/UX with Angular Material, Tailwind, responsive design, and rapid prototyping (MVP development, quick iterations). Developed features using a top- down approach.',
      'Unit and integration testing using Jasmine & Karma.',
      'Implemented payment integrations with Mercado Pago and others.'
    ],
    company: 'Bambú Mobile',
    companyUrl: 'https://bambu-mobile.com',
    skills: [
      'Angular',
      'TypeScript',
      'Ionic',
      'Flutter',
      'Firebase',
      'SEO',
      'Angular Material',
      'Tailwind',
      'SSR'
    ]
  },
  {
    id: uuidv4(),
    startYear: 2019,
    endYear: 2021,
    title: 'FullStack Developer',
    activities: [
      'Developed a news website & mobile app for an independent newspaper in Taxco city using Angular & Ionic.',
      'Integrated real-time news updates, push notifications.'
    ],
    company: 'El Foro de Taxco',
    companyUrl: 'https://elforodetaxco.com.mx',
    skills: [
      'Angular',
      'TypeScript',
      'Ionic',
      'Firebase Hosting',
      'Firestore',
    ]
  },
  {
    id: uuidv4(),
    startYear: 2019,
    endYear: 2020,
    title: 'Frontend Developer',
    activities: [
      'Developed citizen service apps(panic button, event info, complaints) using Ionic v4 (Angular) & Cordova.',
      'Integrated GPS, Camera, Push Notifications via Capacitor/Cordova plugins.'
    ],
    company: 'GOBTI',
    skills: [
      'Angular',
      'TypeScript',
      'Ionic',
      'Cordova',
      'Firestore',
      'Flutter'
    ]
  },

];
const experiencesEs: Experience[] = [
  {
    id: uuidv4(),
    startYear: 2021,
    endYear: -1,
    title: 'Frontend Developer',
    activities: [
      'Desarrollo de aplicaciones web y móviles(eCommerce, TMS, gestores de contenido, cotizadores, etc), usando Angular, Ionic y Flutter.',
      'Rendimiento optimizado con carga diferida, SSR y mejores prácticas de SEO.',
      'UI/UX mejoradas con Angular Material, Tailwind, diseño responsivo y creación rápida de prototipos (desarrollo de MVP, iteraciones rápidas).',
      'Testing con Karma & Jasmine',
      'Integración de pasarelas de pago',

    ],
    company: 'Bambú Mobile',
    companyUrl: 'https://bambu-mobile.com',
    skills: [
      'Angular',
      'TypeScript',
      'Ionic',
      'Flutter',
      'Firebase',
      'SEO',
      'Angular Material',
      'Tailwind',
      'SSR'
    ]
  },
  {
    id: uuidv4(),
    startYear: 2019,
    endYear: 2021,
    title: 'FullStack Developer',
    activities: [
      'Sitio web de noticias y una aplicación móvil para un periódico independiente en la ciudad de Taxco utilizando Angular y Ionic.',
      'Actualización de noticias en tiempo real y notificaciones push.',
      'Despliegues en Firebase Hosting y Google Play.',

    ],
    company: 'El Foro de Taxco',
    companyUrl: 'https://elforodetaxco.com.mx',
    skills: [
      'Angular',
      'TypeScript',
      'Ionic',
      'Firebase Hosting',
      'Firestore',
    ]
  },
  {
    id: uuidv4(),
    startYear: 2019,
    endYear: 2020,
    title: 'Frontend Developer',
    activities: [
      'Desarrollo de aplicaciones enfocadas en servicios a la ciudanania(boton panico, información de trámites y/o eventos, denuncia ciudadana, etc) con Ionic v4 (Angular) y Cordova.',
      'GPS, cámara y notificaciones push integrados mediante plugins Capacitor/Cordova.'

    ],
    company: 'GOBTI',
    skills: [
      'Angular',
      'TypeScript',
      'Ionic',
      'Cordova',
      'Firestore',
      'Flutter'
    ]
  },

];

@Component({
  selector: 'app-experience',
  imports: [
    TranslocoModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {

  public experiences = signal<Experience[]>(experiences);
  private translocoService = inject(TranslocoService);

  private subs = new SubSink();

  ngOnInit(): void {
    this.subs.add(
      this.translocoService.langChanges$.pipe(distinctUntilChanged()).subscribe(() => this.loadExperiences())
    );
  }

  private loadExperiences() {
    console.log('first')
    const lang = this.translocoService.getActiveLang();

    if (lang === 'en') {
      this.experiences.update(() => experiences);
    } else {
      this.experiences.update(() => experiencesEs);
    }
  }

}
