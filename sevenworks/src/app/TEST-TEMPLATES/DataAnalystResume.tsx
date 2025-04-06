import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { TemplateProps } from "./types";

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
    lineHeight: 1.2,
    padding: 20,
  },
  resumeHeader: {
    textAlign: "center",
    marginBottom: 12,
  },
  resumeName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  resumeContact: {
    fontSize: 10,
    marginBottom: 8,
  },
  headerLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 5,
  },
  resumeTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  section: {
    marginBottom: 12,
  },
  sectionHeader: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 4,
    marginTop: 8,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 2,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  resumeRole: {
    fontStyle: "italic",
  },
  listItem: {
    marginLeft: 12,
    marginBottom: 2,
  },
  paragraph: {
    marginBottom: 4,
  }
});

const DataAnalystResume = ({ formData }: TemplateProps) => {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.resumeHeader}>
          <Text style={styles.resumeName}>Student Name</Text>
          <Text style={styles.resumeContact}>
            Atlanta, GA | 915-232-5578 | first.last@emory.edu | linkedin.com/in/firstnamelastname | github.com/xxxx
          </Text>
          <View style={styles.headerLine} />
        </View>

        {/* Title */}
        <Text style={styles.resumeTitle}>Data Analyst Intern</Text>
        <Text style={styles.paragraph}>
          Motivated and detail-oriented aspiring data analyst with a strong foundation in data visualization and statistical analysis, 
          complemented by a passion for problem-solving. Eager to apply technical skills in programming, data manipulation, and analytical 
          techniques to contribute to innovative projects. Committed to continuous learning and collaboration within a team environment 
          while delivering high-quality insights that enhance decision-making and support organizational goals.
        </Text>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Education</Text>
          <View style={styles.flexRow}>
            <View>
              <Text>Bachelor of Science in Quantitative Theory & Methodology, Emory University (Expected May 2026)</Text>
            </View>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Core Competencies & Technical Skills</Text>
          <Text style={styles.resumeRole}>
            Core Competencies: Data Visualization, Statistical Analysis, Big Data, Database Design, Documentation & Reporting, 
            Machine Learning, Artificial Intelligence, Automation, Data Cleaning
          </Text>
          <Text style={styles.resumeRole}>
            Technical Skills: Excel, SQL, R, Python
          </Text>
        </View>

        {/* Technical Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Technical Projects</Text>
          <View style={styles.flexRow}>
            <View>
              <Text>Employee Performance Dashboard</Text>
              <Text>Project Link | Completed: Month Year</Text>
              <Text>Technologies: SQL, Python, Excel</Text>
            </View>
          </View>
          <Text style={styles.listItem}>• Developed a comprehensive employee performance dashboard using SQL and Python.</Text>
          <Text style={styles.listItem}>• Reduced reporting time by automating data processes and enhancing visualizations.</Text>

          <View style={styles.flexRow}>
            <View>
              <Text>Customer Satisfaction Survey Analysis</Text>
              <Text>Project Link | Completed: Month Year</Text>
              <Text>Technologies: R, Excel</Text>
            </View>
          </View>
          <Text style={styles.listItem}>• Processed and analyzed survey data in R to assess satisfaction levels.</Text>
          <Text style={styles.listItem}>• Built an interactive Excel dashboard to share insights with management.</Text>
        </View>

        {/* Professional Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Professional Experience</Text>
          <View style={styles.flexRow}>
            <View>
              <Text>Tech Company LLC</Text>
              <Text style={styles.resumeRole}>Data Analyst Intern</Text>
            </View>
            <Text>2023</Text>
          </View>
          <Text style={styles.listItem}>• Collected, cleaned, and analyzed data from various sources ensuring accuracy.</Text>
          <Text style={styles.listItem}>• Built dashboards with Tableau/Excel resulting in a 15% project efficiency boost.</Text>
          <Text style={styles.listItem}>• Collaborated cross-functionally to optimize reporting processes by 20%.</Text>
        </View>

        {/* Involvement */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Involvement & Engagement</Text>
          <Text>Vice President, Data Club</Text>
        </View>
      </Page>
    </Document>
  );
};

export default DataAnalystResume;
