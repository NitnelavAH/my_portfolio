import { Component, OnInit, signal } from '@angular/core';

import { Skill, SkillType, SkillLevel, levelOrder } from '../../../interfaces/skills.interface';
import { NgClass } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

const skillCategories: Skill[] = [
  {
    type: SkillType.Languages,
    skills: [
      { name: "HTML", level: SkillLevel.Good },
      { name: "CSS", level: SkillLevel.Good },
      { name: "JavaScript", level: SkillLevel.Good },
      { name: "TypeScript", level: SkillLevel.Good },
      { name: "Dart", level: SkillLevel.Medium },
      { name: "Swift", level: SkillLevel.Basic },
    ],
  },
  {
    type: SkillType.Styles,
    skills: [
      { name: "Angular Material", level: SkillLevel.Good },
      { name: "Tailwind CSS", level: SkillLevel.Medium },
    ],
  },
  {
    type: SkillType.Frameworks,
    skills: [
      { name: "Angular", level: SkillLevel.Good },
      { name: "Ionic", level: SkillLevel.Good },
      { name: "Flutter", level: SkillLevel.Medium },
      { name: "Swift UI", level: SkillLevel.Basic },
    ],
  },
  {
    type: SkillType.Tools,
    skills: [
      { name: "Firebase", level: SkillLevel.Good },
      { name: "Git", level: SkillLevel.Good },
      { name: "Capacitor", level: SkillLevel.Medium },
      { name: "Node.js", level: SkillLevel.Basic },
    ],
  },
  {
    type: SkillType.Testing,
    skills: [
      { name: "Karma", level: SkillLevel.Basic },
      { name: "Jasmine", level: SkillLevel.Basic },
    ],
  },
  {
    type: SkillType.Optimization,
    skills: [
      { name: "SEO", level: SkillLevel.Medium },
      { name: "PageSpeed Insights", level: SkillLevel.Basic },
      { name: "Screaming Frog", level: SkillLevel.Basic },
      { name: "Google Search Console", level: SkillLevel.Basic },
    ],
  },
  {
    type: SkillType.Other,
    skills: [
      { name: "Google Play Deployment", level: SkillLevel.Medium },
      { name: "App Store Publishing", level: SkillLevel.Medium },
    ],
  },
]

@Component({
  selector: 'app-skills',
  imports: [
    TranslocoModule,
    NgClass
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  public mySkills = signal<Skill[]>([]);
  public levels = SkillLevel;
  public skillLevels = Object.entries(SkillLevel);

  ngOnInit(): void {
    this.loadSkills();
  }
  public getSkillLevelClass(level: SkillLevel): string {
    const levelClasses: Record<SkillLevel, string> = {
      [SkillLevel.Basic]: 'bg-slate-500/50',
      [SkillLevel.Medium]: 'bg-indigo-700/50',
      [SkillLevel.Good]: 'bg-violet-900/50',
    };
    return levelClasses[level] || 'bg-gray-500/50'; // Default fallback class
  }

  private loadSkills() {
    const skills = skillCategories.map((s) => ({
      ...s, skills: s.skills.sort((a, b) => levelOrder[a.level] - levelOrder[b.level])
    }))
    this.mySkills.update(() => skills);
  }
}
