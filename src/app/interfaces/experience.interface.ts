export interface Experience {
    startYear: number;
    endYear: number;
    current?: boolean;
    title: string;
    activities: string[];
    company: string;
    companyUrl?: string;
    skills: string[];
}