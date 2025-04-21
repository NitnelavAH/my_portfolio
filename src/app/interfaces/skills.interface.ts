export interface Skill {
    type: SkillType;
    skills: SkillData[];
}

export interface SkillData {
    name: string;
    level: SkillLevel;
}

export enum SkillType {
    Languages = "languages",
    Styles = "styles",
    Frameworks = "frameworks",
    Tools = "tools",
    Optimization = "optimization",
    Testing = "testing",
    Other = "other",
    Databases = "db"
}

export enum SkillLevel {
    Good = "good",
    Medium = "medium",
    Basic = "basic",
}

export const levelOrder = {
    [SkillLevel.Good]: 1,
    [SkillLevel.Medium]: 2,
    [SkillLevel.Basic]: 3,
  };