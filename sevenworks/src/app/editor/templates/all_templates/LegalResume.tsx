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

// Register fonts
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
    lineHeight: 1.2,
  },
  header: {
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 10,
    textAlign: "center",
    marginBottom: 15,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 2,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  itemTitle: {
    fontWeight: "bold",
  },
  itemRole: {
    fontStyle: "italic",
  },
  institution: {
    flexGrow: 1,
  },
  dateLocation: {
    textAlign: "right",
    width: "30%",
  },
  bullet: {
    marginLeft: 10,
    marginBottom: 3,
  },
  itemContent: {
    flexGrow: 1,
    marginBottom: 8,
  },
});

const LegalResume = ({ formData }: TemplateProps) => {
  // Helper function to check if a data array has content
  const hasContent = (arr: object[] | undefined, fields: string[]) => {
    return Array.isArray(arr) && arr.length > 0 && arr.some(item => 
      fields.some(field => (item as Record<string, unknown>)[field] && String((item as Record<string, unknown>)[field]).trim() !== '')
    );
  };

  // Set proper font size and font family based on formData
  const dynamicStyles = StyleSheet.create({
    page: {
      fontFamily: formData.font || "Arial",
      fontSize: formData.fontSize || 10,
      padding: 30,
      lineHeight: 1.2,
    },
    name: {
      fontSize: (formData.fontSize || 10) + 8,
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase",
      marginBottom: 5,
    }
  });

  return (
    <Document>
      <Page size="LETTER" style={dynamicStyles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={dynamicStyles.name}>
            {formData.firstName || ""} {formData.middleName ? `${formData.middleName} ` : ""}
            {formData.lastName || ""}
          </Text>
          <Text style={styles.contactInfo}>
            {contactLine(formData)}
          </Text>
        </View>

        {/* EDUCATION */}
        <View>
          <Text style={styles.sectionHeader}>EDUCATION</Text>
          
          {hasContent(formData.education, ['degree', 'institution']) ? (
            // Use actual education data from formData
            formData.education?.map((edu, idx) => (
              <View key={idx} style={styles.flexRow}>
                <View style={styles.institution}>
                  <Text style={styles.itemTitle}>{edu.institution || ""}</Text>
                  <Text>{edu.degree || ""}</Text>
                </View>
                <View style={styles.dateLocation}>
                  <Text>{edu.years || ""}</Text>
                </View>
              </View>
            ))
          ) : null}
        </View>

        {/* LEGAL EXPERIENCE */}
        <View>
          <Text style={styles.sectionHeader}>LEGAL EXPERIENCE</Text>
          
          {hasContent(formData.experience, ['title', 'company']) ? (
            // Map through actual experience data
            formData.experience?.map((exp, idx) => (
              <View key={idx} style={styles.itemContent}>
                <View style={styles.flexRow}>
                  <View style={styles.institution}>
                    <Text style={styles.itemTitle}>{exp.company || ""}</Text>
                    <Text style={styles.itemRole}>{exp.title || ""}</Text>
                  </View>
                  <View style={styles.dateLocation}>
                    <Text>{exp.years || ""}</Text>
                  </View>
                </View>
                {Array.isArray(exp.bullets) && exp.bullets.length > 0 ? (
                  exp.bullets.map((bullet, bulletIdx) => (
                    <Text key={bulletIdx} style={styles.bullet}>• {bullet}</Text>
                  ))
                ) : null}
              </View>
            ))
          ) : null}
        </View>

        {/* LEADERSHIP & ACTIVITIES */}
        <View>
          <Text style={styles.sectionHeader}>LEADERSHIP & ACTIVITIES</Text>
          
          {hasContent(formData.leadership, ['title']) ? (
            // Map through actual leadership data
            formData.leadership?.map((lead, idx) => (
              <View key={idx} style={styles.itemContent}>
                <View style={styles.flexRow}>
                  <View style={styles.institution}>
                    <Text style={styles.itemTitle}>{lead.title || ""}</Text>
                    {lead.role && <Text style={styles.itemRole}>{lead.role}</Text>}
                  </View>
                  <View style={styles.dateLocation}>
                    <Text>{lead.years || ""}</Text>
                  </View>
                </View>
                {Array.isArray(lead.bullets) && lead.bullets.length > 0 ? (
                  lead.bullets.map((bullet, bulletIdx) => (
                    <Text key={bulletIdx} style={styles.bullet}>• {bullet}</Text>
                  ))
                ) : null}
              </View>
            ))
          ) : null}
        </View>

        {/* HONORS & AWARDS */}
        <View>
          <Text style={styles.sectionHeader}>HONORS & AWARDS</Text>
          
          {Array.isArray(formData.honorsList) && formData.honorsList.some(h => h.honor && h.honor.trim() !== '') ? (
            // Map through actual honors data
            formData.honorsList.filter(h => h.honor && h.honor.trim() !== '').map((honor, idx) => (
              <Text key={idx} style={styles.bullet}>• {honor.honor}</Text>
            ))
          ) : null}
        </View>

        {/* SKILLS & INTERESTS */}
        <View>
          <Text style={styles.sectionHeader}>SKILLS & INTERESTS</Text>
          
          {formData.skillsInterests && formData.skillsInterests.trim() !== '' ? (
            // Use actual skills and interests data
            <Text>{formData.skillsInterests}</Text>
          ) : null}
        </View>

        {/* Custom Personal Fields Section if available */}
        {Array.isArray(formData.customPersonal) && formData.customPersonal.length > 0 && formData.customPersonal.some(field => field.label && field.value) && (
          <View>
            <Text style={styles.sectionHeader}>ADDITIONAL INFORMATION</Text>
            {formData.customPersonal.map((field) => (
              field.label && field.value && (
                <Text key={field.id} style={styles.bullet}>
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

export default LegalResume;
