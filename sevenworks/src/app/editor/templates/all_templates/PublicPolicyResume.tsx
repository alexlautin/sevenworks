import React from "react";
import { contactLine } from "../shared";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

// Define proper formData interface
interface EducationEntry {
  degree: string;
  institution: string;
  years: string;
}

interface ExperienceEntry {
  title: string;
  company: string;
  years: string;
  bullets?: string[]; // Adding bullets array for experience entries
}

interface LeadershipEntry {
  title: string;
  description?: string;
  role?: string;
  years?: string;
  bullets?: string[]; // Adding bullets array for leadership entries, similar to experience
}

interface FormData {
  font?: string;
  fontSize?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  address?: string;
  phone?: string;
  email?: string;
  education?: EducationEntry[];
  experience?: ExperienceEntry[];
  leadership?: LeadershipEntry[];
  honorsList?: { honor: string }[];
  skillsInterests?: string;
  customPersonal?: { id: number; label: string; value: string }[];
  [key: string]: unknown;
}

// Use this interface explicitly for the component props
interface TemplateProps {
  formData: FormData;
}

Font.register({
  family: "Arial",
  fonts: [
    { src: "/fonts/ARIAL.TTF", fontWeight: "normal" },
    { src: "/fonts/ARIALBD.TTF", fontWeight: "bold" },
    { src: "/fonts/ARIALI.TTF", fontStyle: "italic" },
    { src: "/fonts/ARIALBI.TTF", fontWeight: "bold", fontStyle: "italic" },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Arial",
    fontSize: 11,
    padding: 20,
    lineHeight: 1.2,
    color: "#000",
  },
  resumeHeader: {
    textAlign: "center",
    marginBottom: 8,
  },
  resumeName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
  },
  resumeContactLinear: {
    fontSize: 11,
    marginBottom: 2,
  },
  section: {
    marginBottom: 12,
  },
  sectionHeader: {
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: 8,
    marginBottom: 2,
  },
  resumeFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 1,
  },
  resumeDateLocation: {
    flexDirection: "column",
    alignItems: "flex-end",
    textAlign: "right",
    fontSize: 11,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
  },
  resumeRole: {
    fontStyle: "italic",
    marginTop: 0,
    marginBottom: 0,
  },
  bulletItem: {
    marginBottom: 1,
    marginLeft: 5,
    paddingLeft: 5,
  },
  paragraph: {
    marginBottom: 2,
  },
  title: {
    fontWeight: "bold",
  }
});

const PublicPolicyResume = ({ formData }: TemplateProps) => {
  // Helper function to check if a data array has content
  const hasContent = (arr: any[] | undefined, fields: string[]) => {
    return Array.isArray(arr) && arr.length > 0 && arr.some(item => 
      fields.some(field => item[field] && String(item[field]).trim() !== '')
    );
  };

  // Set proper font size and font family based on formData
  const dynamicStyles = StyleSheet.create({
    page: {
      fontFamily: formData.font || "Arial",
      fontSize: formData.fontSize || 11,
      padding: 20,
      lineHeight: 1.2,
    },
    name: {
      fontSize: (formData.fontSize || 11) + 3,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 2,
    }
  });

  return (
    <Document>
      <Page size="LETTER" style={dynamicStyles.page}>
        {/* Header */}
        <View style={styles.resumeHeader}>
          <Text style={styles.resumeName}>
            {formData.firstName || ""} {formData.middleName ? formData.middleName + " " : ""}
            {formData.lastName || ""}
          </Text>
          <Text style={styles.resumeContactLinear}>
            {formData.address || ""}
          </Text>
          <Text style={styles.resumeContactLinear}>
            {contactLine(formData, ["email", "phone"])}
          </Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>EDUCATION</Text>
          {hasContent(formData.education, ['degree', 'institution']) ? (
            formData.education?.map((edu, idx) => (
              <View key={idx}>
                <View style={styles.resumeFlex}>
                  <View>
                    <Text><Text style={styles.title}>{edu.institution || ""}</Text></Text>
                    <Text>{edu.degree || ""}</Text>
                    {idx === 0 && Array.isArray(formData.honorsList) && formData.honorsList.some(h => h.honor?.trim()) && <Text style={{fontWeight:"bold"}}><Text style={styles.resumeRole}>Honors and Awards</Text></Text>}
                  </View>
                  <View style={styles.resumeDateLocation}>
                    <Text>{edu.years || ""}</Text>
                  </View>
                </View>
                {idx === 0 && (
                  <>
                    {Array.isArray(formData.honorsList) && formData.honorsList.some(h => h.honor && h.honor.trim() !== '') ? (
                      formData.honorsList.map((honor, idx) => (
                        <Text key={idx} style={styles.bulletItem}>• {honor.honor}</Text>
                      ))
                    ) : null}
                  </>
                )}
              </View>
            ))
          ) : null}
        </View>

        {/* Professional Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>PROFESSIONAL EXPERIENCE</Text>

          {hasContent(formData.experience, ['title', 'company']) ? (
            formData.experience?.map((exp, idx) => (
              <View key={idx}>
                <View style={styles.resumeFlex}>
                  <View>
                    <Text><Text style={styles.title}>{exp.company || ""}</Text></Text>
                    <Text style={styles.resumeRole}>{exp.title || ""}</Text>
                  </View>
                  <View style={styles.resumeDateLocation}>
                    <Text>{exp.years || ""}</Text>
                  </View>
                </View>
                {Array.isArray(exp.bullets) && exp.bullets.length > 0 ? (
                  exp.bullets.map((bullet, idx) => (
                    <Text key={idx} style={styles.bulletItem}>• {bullet}</Text>
                  ))
                ) : null}
              </View>
            ))
          ) : null}
        </View>

        {/* Leadership & Service */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>LEADERSHIP & SERVICE</Text>
          
          {hasContent(formData.leadership, ['title', 'description', 'bullets']) ? (
            formData.leadership?.map((lead, idx) => (
              <View key={idx}>
                <View style={styles.resumeFlex}>
                  <View>
                    <Text><Text style={styles.title}>{lead.title || ""}</Text>{lead.role && <Text>, <Text style={styles.resumeRole}>{lead.role}</Text></Text>}</Text>
                  </View>
                  <View style={styles.resumeDateLocation}>
                    <Text>{lead.years || (idx === 0 ? "Aug 2019 - Present" : idx === 1 ? "Feb 2019 - May 2020" : "Aug 2019 - May 2020")}</Text>
                  </View>
                </View>
                {Array.isArray(lead.bullets) && lead.bullets.length > 0 ? (
                  lead.bullets.map((bullet, bulletIdx) => (
                    <Text key={bulletIdx} style={styles.bulletItem}>• {bullet}</Text>
                  ))
                ) : lead.description ? (
                  <Text style={styles.bulletItem}>• {lead.description}</Text>
                ) : null}
              </View>
            ))
          ) : null}
        </View>

        {/* Additional Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>ADDITIONAL SKILLS</Text>
          {formData.skillsInterests && formData.skillsInterests.trim() !== '' ? (
            <Text>{formData.skillsInterests}</Text>
          ) : null}
        </View>

        {/* Custom Personal Fields Section if available */}
        {Array.isArray(formData.customPersonal) && formData.customPersonal.length > 0 && formData.customPersonal.some(field => field.label && field.value) && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>ADDITIONAL INFORMATION</Text>
            {formData.customPersonal.map((field) => (
              field.label && field.value && (
                <Text key={field.id} style={styles.bulletItem}>
                  • <Text style={{ fontWeight: 'bold' }}>{field.label}:</Text> {field.value}
                </Text>
              )
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default PublicPolicyResume;
