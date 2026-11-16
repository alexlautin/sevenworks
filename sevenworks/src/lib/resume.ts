// Shared resume types.

export interface ExperienceEntry {
  title: string;
  company: string;
  years: string;
  bullets?: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  years: string;
}

export interface LeadershipEntry {
  title: string;
  role?: string;
  years?: string;
  description?: string;
  bullets?: string[];
}

export interface CustomField {
  id: number;
  label: string;
  value: string;
}

export interface ResumeData {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  font?: string;
  fontSize?: number;
  education?: EducationEntry[];
  experience?: ExperienceEntry[];
  leadership?: LeadershipEntry[];
  honorsList?: { honor: string }[];
  skillsInterests?: string;
  customPersonal?: CustomField[];
  [key: string]: unknown;
}

export interface Resume {
  id: string;
  name: string;
  templateId: string;
  formData: ResumeData;
  updatedAt: number;
}

export type ResumeSummary = Omit<Resume, "formData">;
