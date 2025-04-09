export interface formValues {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    content?: string;
}

export interface ExperienceEntry {
    company?: string;
    location?: string;
    duration?: string;
    role?: string;
    details?: string[];
}

export interface TemplateProps {
    formData: {
        font?: string;
        firstName?: string;
        middleName?: string;
        lastName?: string;
        address?: string;
        phone?: string;
        email?: string;
        educationSchool?: string;
        educationGraduation?: string;
        educationDegree?: string;
        educationDescription?: string;
        educationGPA?: string;
        leadership?: string;
        ubsProgram?: string;
        honors?: string;
        skillsInterests?: string;
        experience?: ExperienceEntry[];
        content?: string;
    };
    additionalSections?: Array<{
        id: number;
        label: string;
        value: string;
    }>
}