import React from "react";
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
  bullets?: string[]; // Adding bullets array for leadership entries
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
    fontSize: 10,
    padding: 30,
    lineHeight: 1.3,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contact: {
    marginBottom: 3,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 2,
  },
  subsection: {
    marginBottom: 5,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  bullet: {
    marginLeft: 10,
    marginBottom: 2,
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
});

const BusinessResume = ({ formData }: TemplateProps) => {
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
      fontSize: formData.fontSize || 10,
      padding: 30,
      lineHeight: 1.3,
    },
    name: {
      fontSize: (formData.fontSize || 10) + 6,
      fontWeight: "bold",
      marginBottom: 5,
    }
  });

  return (
    <Document>
      <Page size="LETTER" style={dynamicStyles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={dynamicStyles.name}>
              {formData.firstName || ""} {formData.middleName ? formData.middleName + " " : ""}
              {formData.lastName || ""}
            </Text>
            {formData.address && <Text style={styles.contact}>{formData.address}</Text>}
          </View>
          <View style={styles.headerRight}>
            {formData.email && <Text style={styles.contact}>{formData.email}</Text>}
            {formData.phone && <Text style={styles.contact}>{formData.phone}</Text>}
          </View>
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {hasContent(formData.education, ['degree', 'institution']) ? (
            formData.education?.map((edu, idx) => (
              <View key={idx} style={styles.subsection}>
                <View style={styles.flexRow}>
                  <Text style={styles.bold}>{edu.institution || ""}</Text>
                  <Text>{edu.years || ""}</Text>
                </View>
                <Text style={styles.italic}>{edu.degree || ""}</Text>
              </View>
            ))
          ) : null}
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {hasContent(formData.experience, ['title', 'company']) ? (
            formData.experience?.map((exp, idx) => (
              <View key={idx} style={styles.subsection}>
                <View style={styles.flexRow}>
                  <Text style={styles.bold}>{exp.company || ""}</Text>
                  <Text>{exp.years || ""}</Text>
                </View>
                <Text style={styles.italic}>{exp.title || ""}</Text>
                {Array.isArray(exp.bullets) && exp.bullets.map((bullet, bulletIdx) => (
                  <Text key={bulletIdx} style={styles.bullet}>• {bullet}</Text>
                ))}
              </View>
            ))
          ) : null}
        </View>

        {/* Leadership Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Leadership & Activities</Text>
          {hasContent(formData.leadership, ['title']) ? (
            formData.leadership?.map((lead, idx) => (
              <View key={idx} style={styles.subsection}>
                <View style={styles.flexRow}>
                  <Text style={styles.bold}>{lead.title || ""}</Text>
                  <Text>{lead.years || ""}</Text>
                </View>
                {lead.role && <Text style={styles.italic}>{lead.role}</Text>}
                {lead.description && <Text style={styles.bullet}>• {lead.description}</Text>}
                {Array.isArray(lead.bullets) && lead.bullets.map((bullet, bulletIdx) => (
                  <Text key={bulletIdx} style={styles.bullet}>• {bullet}</Text>
                ))}
              </View>
            ))
          ) : null}
        </View>

        {/* Honors Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Honors & Awards</Text>
          {Array.isArray(formData.honorsList) && formData.honorsList.some(h => h.honor && h.honor.trim() !== '') ? (
            formData.honorsList.filter(h => h.honor && h.honor.trim() !== '').map((honor, idx) => (
              <Text key={idx} style={styles.bullet}>• {honor.honor}</Text>
            ))
          ) : null}
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills & Interests</Text>
          {formData.skillsInterests && formData.skillsInterests.trim() !== '' ? (
            <Text>{formData.skillsInterests}</Text>
          ) : null}
        </View>

        {/* Custom Personal Fields Section if available */}
        {Array.isArray(formData.customPersonal) && formData.customPersonal.length > 0 && formData.customPersonal.some(field => field.label && field.value) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Additional Information</Text>
            {formData.customPersonal.map((field) => (
              field.label && field.value && (
                <Text key={field.id} style={styles.bullet}>
                  • <Text style={styles.bold}>{field.label}:</Text> {field.value}
                </Text>
              )
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default BusinessResume;
