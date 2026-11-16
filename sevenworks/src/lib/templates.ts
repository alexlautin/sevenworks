// Template catalog (metadata only, so pages can list templates without loading react-pdf).
// The PDF components live in app/editor/templates/registry.ts under the same ids.

export const CATEGORIES = [
  "Business",
  "STEM",
  "Health & Human Services",
  "Law & Policy",
  "Creative & Environment",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface TemplateInfo {
  id: string;
  name: string;
  category: Category;
  blurb: string;
}

export const TEMPLATES: TemplateInfo[] = [
  { id: "business", name: "Business", category: "Business", blurb: "Split header, classic sections for finance and consulting." },
  { id: "data-analytics", name: "Data Analytics", category: "STEM", blurb: "Skills up top, projects called out for analyst roles." },
  { id: "data-science", name: "Data Science", category: "STEM", blurb: "Leads with technical skills and data science projects." },
  { id: "software-engineering", name: "Software Engineering", category: "STEM", blurb: "Skills first, projects and experience with clear dates." },
  { id: "technology", name: "Technology", category: "STEM", blurb: "Competencies and technical projects before education." },
  { id: "it-consulting", name: "IT Consulting", category: "STEM", blurb: "Expertise summary and key client projects." },
  { id: "health", name: "Health", category: "Health & Human Services", blurb: "Clinical and research experience for pre-health students." },
  { id: "human-services", name: "Human Services", category: "Health & Human Services", blurb: "Community engagement and relevant experience." },
  { id: "law", name: "Law", category: "Law & Policy", blurb: "Bold name, legal experience and activities." },
  { id: "public-policy", name: "Public Policy", category: "Law & Policy", blurb: "Compact layout with honors under education." },
  { id: "international-affairs", name: "International Affairs", category: "Law & Policy", blurb: "Experience, leadership and language skills." },
  { id: "journalism", name: "Journalism", category: "Creative & Environment", blurb: "Reporting experience and multimedia projects." },
  { id: "museum", name: "Museum & Arts", category: "Creative & Environment", blurb: "Exhibitions and projects for cultural institutions." },
  { id: "environment", name: "Environment", category: "Creative & Environment", blurb: "Research and field projects for sustainability work." },
];

export const DEFAULT_TEMPLATE_ID = "business";

export function getTemplateInfo(id: string | null | undefined): TemplateInfo {
  return TEMPLATES.find((t) => t.id === id) ?? TEMPLATES.find((t) => t.id === resolveLegacyId(id))!;
}

// Older saved resumes stored free-form template ids from Firestore; map them onto the catalog.
export function resolveLegacyId(raw: string | null | undefined): string {
  const id = (raw ?? "").toLowerCase();
  if (TEMPLATES.some((t) => t.id === id)) return id;
  const rules: [RegExp, string][] = [
    [/data[-_ ]?sci/, "data-science"],
    [/data|analyt/, "data-analytics"],
    [/swe|software/, "software-engineering"],
    [/tech[-_ ]?it|consult|\bit\b/, "it-consulting"],
    [/tech/, "technology"],
    [/human/, "human-services"],
    [/health|medic/, "health"],
    [/law|legal/, "law"],
    [/gpp|policy|govern/, "public-policy"],
    [/international|affairs/, "international-affairs"],
    [/journal/, "journalism"],
    [/museum|art/, "museum"],
    [/environment|sustain/, "environment"],
  ];
  return rules.find(([re]) => re.test(id))?.[1] ?? DEFAULT_TEMPLATE_ID;
}
