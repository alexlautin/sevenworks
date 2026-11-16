// Maps catalog ids (lib/templates.ts) to their react-pdf components.
import type { ReactElement } from "react";
import type { DocumentProps } from "@react-pdf/renderer";
import type { ResumeData } from "@/lib/resume";
import { resolveLegacyId } from "@/lib/templates";
import BusinessResume from "./all_templates/BusinessResume";
import DataAnalystResume from "./all_templates/DataAnalystResume";
import DataScienceResume from "./all_templates/DataScienceResume";
import SWEResume from "./all_templates/SWEResume";
import TechnologyResume from "./all_templates/TechnologyResume";
import ITConsultingResume from "./all_templates/ITConsultingResume";
import HealthResume from "./all_templates/HealthResume";
import HumanServicesResume from "./all_templates/HumanServicesResume";
import LegalResume from "./all_templates/LegalResume";
import PublicPolicyResume from "./all_templates/PublicPolicyResume";
import InternationalAffairsResume from "./all_templates/InternationalAffairsResume";
import JournalismResume from "./all_templates/JournalismResume";
import MuseumResume from "./all_templates/MuseumResume";
import EnvironmentResume from "./all_templates/EnvironmentResume";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TemplateComponent = (props: { formData: any }) => ReactElement<DocumentProps>;

const COMPONENTS: Record<string, TemplateComponent> = {
  business: BusinessResume,
  "data-analytics": DataAnalystResume,
  "data-science": DataScienceResume,
  "software-engineering": SWEResume,
  technology: TechnologyResume,
  "it-consulting": ITConsultingResume,
  health: HealthResume,
  "human-services": HumanServicesResume,
  law: LegalResume,
  "public-policy": PublicPolicyResume,
  "international-affairs": InternationalAffairsResume,
  journalism: JournalismResume,
  museum: MuseumResume,
  environment: EnvironmentResume,
};

const FONTS = new Set(["Arial", "Helvetica", "Times-Roman", "Courier"]);

// Cleans editor data before it reaches a template: numeric font size, known font, arrays always present.
export function normalizeForPdf(data: ResumeData): ResumeData {
  const size = Number(data.fontSize);
  return {
    ...data,
    font: data.font && FONTS.has(data.font) ? data.font : "Arial",
    fontSize: Number.isFinite(size) && size >= 8 && size <= 16 ? size : 10,
    education: Array.isArray(data.education) ? data.education : [],
    experience: Array.isArray(data.experience) ? data.experience : [],
    leadership: Array.isArray(data.leadership) ? data.leadership : [],
    honorsList: Array.isArray(data.honorsList) ? data.honorsList : [],
    customPersonal: Array.isArray(data.customPersonal) ? data.customPersonal : [],
  };
}

export function renderTemplate(templateId: string, data: ResumeData): ReactElement<DocumentProps> {
  const Component = COMPONENTS[resolveLegacyId(templateId)];
  return <Component formData={normalizeForPdf(data)} />;
}
