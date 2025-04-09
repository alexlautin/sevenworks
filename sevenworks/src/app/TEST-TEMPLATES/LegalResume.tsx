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
    fontSize: 11,
    lineHeight: 1.2,
    padding: 20,
    maxWidth: "7.5in",
    color: "#000",
  },
  header: {
    textAlign: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
  },
  contact: {
    fontSize: 11,
    marginBottom: 0,
  },
  section: {
    marginBottom: 5,
  },
  sectionHeader: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 0,
    paddingTop: 4,
  },
  flexLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    marginBottom: 2,
  },
  dateLocation: {
    textAlign: "right",
    whiteSpace: "nowrap",
    fontSize: 11,
    flexShrink: 0,
  },
  role: {
    fontStyle: "italic",
  },
  listItem: {
    marginLeft: 15,
    marginBottom: 2,
  },
  paragraph: {
    marginBottom: 2,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 0,
  }
});

const LegalResume = ({ formData }: TemplateProps) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>MARGEAUX L. STUDENT</Text>
        <Text style={styles.contact}>New York, NY 10012</Text>
        <Text style={styles.contact}>mlstudent@emory.edu 414-444-6453</Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>EDUCATION</Text> 
        <View style={styles.flexLine}>
          <View>
            <Text><Text style={styles.title}>Emory University,</Text> Atlanta GA</Text>
            <Text>Bachelor of Arts, Art History, Minor: Italian Studies</Text>
            <Text>Major GPA: 3.91/4.00; Cumulative GPA: 3.59/4.00</Text>
          </View>
          <Text style={styles.dateLocation}>May 2021</Text>
        </View>

        <View style={styles.flexLine}>
          <View>
          <Text><Text style={styles.title}>John Cabot University,</Text> Rome, Italy</Text>
            <Text>Art History Study Abroad Program</Text>
          </View>
          <Text style={styles.dateLocation}>Aug 2019 – Dec 2019</Text>
        </View>
      </View>

      {/* Related Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>RELATED EXPERIENCE</Text>

        <View style={styles.flexLine}>
          <Text>
            <Text style={styles.title}>Atwater & Bibbley LLP</Text>, New York, NY</Text>
          <Text style={styles.dateLocation}>Jan 2021 – Present</Text>
        </View>
        <Text style={styles.role}>Legal Assistant</Text>
        <Text style={styles.listItem}>• Conduct legal research using legal databases to find case law for use in building cases</Text>
        <Text style={styles.listItem}>• Communicate with clients by phone and email to gather case information</Text>
        <Text style={styles.listItem}>• Assist in preparing depositions of witnesses</Text>

        <View style={styles.flexLine}>
          <Text>
            <Text style={styles.title}>Federal Defender Program</Text>, Atlanta, GA </Text>
            <Text style={styles.dateLocation}>Sep 2020 – Dec 2020</Text>
        </View>
        <Text style={styles.role}>Intern (remote)</Text>
        <Text style={styles.listItem}>• Worked on federal death row cases, conducted research and reviewed evidence</Text>
        <Text style={styles.listItem}>• Drafted ~15 legal briefs and memoranda, received top feedback</Text>
        <Text style={styles.listItem}>• Created exhibits and attended court hearings</Text>
        <Text style={styles.listItem}>• Learned WestLaw and LexisNexis</Text>

        <View style={styles.flexLine}>
          <Text>
            <Text style={styles.title}>Pre-Law Scholars Program, Howard Law</Text>, Washington, DC</Text>
            <Text style={styles.dateLocation}>Jun 2019 – Aug 2019</Text>
        </View>
        <Text style={styles.role}>Program Scholar</Text>
        <Text style={styles.listItem}>• Took Contracts, Legal Research, Criminal and Constitutional Law</Text>
        <Text style={styles.listItem}>• Attended lectures by judges and justices</Text>
        <Text style={styles.listItem}>• Shadowed a real estate attorney</Text>

        <View style={styles.flexLine}>
          <Text>
            <Text style={styles.title}>Dekalb County Child Advocacy Center</Text>, Decatur, GA </Text>
          <Text style={styles.dateLocation}>Jan 2019 – May 2019</Text>
        </View>
        <Text style={styles.role}>Intern</Text>
        <Text style={styles.listItem}>• Researched child abuse and neglect cases</Text>
        <Text style={styles.listItem}>• Helped prepare interview questions for children</Text>
        <Text style={styles.listItem}>• Attended court hearings with attorneys</Text>
      </View>

      {/* Leadership */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>LEADERSHIP & COMMUNITY ENGAGEMENT</Text>
        <Text style={styles.paragraph}>Black Pre-Law Society, Vice President & Publicity Chair</Text>
        <Text style={styles.paragraph}>Alpha Epsilon Phi Sorority, New Member Educator</Text>
        <Text style={styles.paragraph}>Student Alumni Association, Senior Gift Chair</Text>
        <Text style={styles.paragraph}>CASA (Court-Appointed Special Advocate), Volunteer in Training</Text>
        <Text style={styles.paragraph}>Emory READ, Volunteer</Text>
      </View>

      {/* Additional Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>ADDITIONAL SKILLS</Text>
        <Text>• Proficient in MS Word, Excel, PowerPoint</Text>
        <Text>• Fluent in French; Conversational in Spanish</Text>
        <Text>• Social media: Facebook, Twitter, YouTube, WordPress</Text>
      </View>
    </Page>
  </Document>
);

export default LegalResume;
