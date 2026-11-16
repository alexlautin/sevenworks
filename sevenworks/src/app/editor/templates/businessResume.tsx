import React from "react";
import { contactLine } from "./shared";
import { TemplateProps } from "../../utils/types";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({family: "Arial", src: "/fonts/ARIAL.TTF"});
Font.register({family: "Calibri", src: "/fonts/calibri.ttf"});

const styles = StyleSheet.create({
  section: {
    marginBottom: 6,
  },
  header: {
    textAlign: "center",
    marginBottom: 10,
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginVertical: 5,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  role: {
    fontStyle: "italic",
  },
  listItem: {
    marginBottom: 2,
    marginLeft: 10,
  },
});

const BusinessResume = ({formData}: TemplateProps) => {
  // Helper to check if an array field has actual content
  const hasContent = (arr: Record<string, unknown>[] | undefined, fields: string[]) => {
    return Array.isArray(arr) && arr.some(item => fields.some(field => item[field] && String(item[field]).trim() !== ''));
  };

  // Define base font size, defaulting to 10 if not provided
  const baseFontSize = formData.fontSize || 10;

  // Define dynamic styles based on formData
  const dynamicStyles = StyleSheet.create({
    page: {
      fontSize: baseFontSize,
      padding: 10,
      fontFamily: formData.font || 'Arial',
    },
    headerText: {
      fontFamily: formData.font || 'Arial',
      fontSize: baseFontSize + 4, // Example: Header text is slightly larger
      fontWeight: "bold",
    },
    sectionHeader: {
      fontSize: baseFontSize, // Use base font size for section headers
      textTransform: "uppercase",
      fontWeight: "bold",
      textDecoration: "underline",
      marginBottom: 4,
    },
    contactContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: baseFontSize, // Use base font size for contact info
    },
  });

  return (
    <Document>
      <Page size="A4" style={dynamicStyles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={dynamicStyles.headerText}>
            {formData.firstName || ""} {formData.middleName ? formData.middleName + " " : ""}{formData.lastName || ""}
          </Text>
          <View style={dynamicStyles.contactContainer}>
            <Text>{formData.address || ""}</Text>
            <Text>{contactLine(formData, ["phone", "email"])}</Text>
          </View>
          <View style={styles.hr} />
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={dynamicStyles.sectionHeader}>EDUCATION</Text>
          {hasContent(formData.education, ['degree', 'institution', 'years']) ? (
            formData.education?.map((edu, idx) => (
              <View key={idx} style={styles.flexRow}>
                <View>
                  <Text style={{fontWeight: 'bold'}}>{edu.institution}</Text>
                  <Text style={styles.role}>{edu.degree}</Text>
                  {/* Add other education details if available in your data structure */}
                </View>
                <Text>{edu.years}</Text>
              </View>
            ))
          ) : null}
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={dynamicStyles.sectionHeader}>EXPERIENCE</Text>
          {hasContent(formData.experience, ['title', 'company', 'years']) ? (
            formData.experience?.map((exp, idx) => (
              <View key={idx} style={{ marginBottom: 8 }}>
                <View style={styles.flexRow}>
                  <View>
                    <Text style={{fontWeight: 'bold'}}>{exp.company}</Text>
                    <Text style={styles.role}>{exp.title}</Text>
                  </View>
                  <Text>{exp.years}</Text>
                </View>
                {/* Add bullet points/description if available */}
                {/* <Text style={styles.listItem}>• Placeholder description point.</Text> */}
              </View>
            ))
          ) : null}
        </View>

        {/* Leadership Section */}
        <View style={styles.section}>
          <Text style={dynamicStyles.sectionHeader}>LEADERSHIP AND COMMUNITY ENGAGEMENT</Text>
          {hasContent(formData.leadership, ['title', 'description']) ? (
            formData.leadership?.map((lead, idx) => (
              <View key={idx} style={{ marginBottom: 8 }}>
                <View style={styles.flexRow}>
                  <View>
                    <Text style={{fontWeight: 'bold'}}>{lead.title}</Text>
                    {/* <Text style={styles.role}>Optional Role/Subtitle</Text> */}
                  </View>
                  {/* <Text>Optional Dates</Text> */}
                </View>
                <Text style={styles.listItem}>• {lead.description}</Text>
              </View>
            ))
          ) : null}
        </View>

        {/* Honors Section */}
        <View style={styles.section}>
          <Text style={dynamicStyles.sectionHeader}>HONORS</Text>
          {Array.isArray(formData.honorsList) && formData.honorsList.some(h => h.honor && h.honor.trim() !== '') ? (
            formData.honorsList.filter(h => h.honor && h.honor.trim() !== '').map((honor, idx) => (
              <Text key={idx} style={styles.listItem}>• {honor.honor}</Text>
            ))
          ) : null}
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={dynamicStyles.sectionHeader}>ADDITIONAL SKILLS AND INTERESTS</Text>
          {formData.skillsInterests && formData.skillsInterests.trim() !== '' ? (
            <Text>{formData.skillsInterests}</Text>
          ) : null}
        </View>

        {/* Custom Personal Fields Section */}
        {Array.isArray(formData.customPersonal) && formData.customPersonal.length > 0 && (
          <View style={styles.section}>
            <Text style={dynamicStyles.sectionHeader}>ADDITIONAL INFORMATION</Text>
            {formData.customPersonal.map((field) => (
              field.label && field.value && (
                <Text key={field.id} style={{ marginBottom: 2 }}>
                  <Text style={{ fontWeight: 'bold' }}>{field.label}:</Text> {field.value}
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
