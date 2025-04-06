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
    padding: 10,
    lineHeight: 1.2,
    color: "#000",
  },
  resumeHeader: {
    textAlign: "center",
    marginBottom: 10,
  },
  resumeName: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  resumeContact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    marginBottom: 2,
  },
  contactLeft: {
    textAlign: "left",
  },
  contactRight: {
    textAlign: "right",
  },
  headerLine: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginVertical: 5,
  },
  section: {
    marginBottom: 6,
  },
  sectionHeader: {
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    textDecoration: "underline",
    marginBottom: 4,
  },
  resumeFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  resumeDate: {
    textAlign: "right",
    whiteSpace: "nowrap",
  },
  role: {
    fontStyle: "italic",
  },
  listItem: {
    marginLeft: 0,
    marginBottom: 2,
    paddingRight: 5,
  },
});

const BusinessResume = ({ formData }: TemplateProps) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={styles.resumeHeader}>
        <Text style={styles.resumeName}>Jo B. Seeker</Text>
        <View style={styles.resumeContact}>
          <View style={styles.contactLeft}>
            <Text>5032 Forbes Avenue</Text>
            <Text>Atlanta, GA 30322</Text>
          </View>
          <View style={styles.contactRight}>
            <Text>(404) 555-2121</Text>
            <Text>intern@emory.edu</Text>
          </View>
        </View>
        <View style={styles.headerLine} />
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>EDUCATION</Text>
        <View style={styles.resumeFlex}>
          <View>
            <Text>Emory University, Atlanta, GA</Text>
            <Text style={styles.role}>Bachelor of Arts in Economics</Text>
            <Text>Relevant Coursework: Accounting, Regression, Multivariate Analysis, Microeconomics</Text>
            <Text>GPA: 3.7/4.0</Text>
          </View>
          <Text style={styles.resumeDate}>May 2022</Text>
        </View>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>EXPERIENCE</Text>

        <View style={styles.resumeFlex}>
          <View>
            <Text>Morgan Stanley, Private Wealth Management – Boise, ID</Text>
            <Text style={styles.role}>Financial Advising Intern</Text>
          </View>
          <Text style={styles.resumeDate}>May – August 2020</Text>
        </View>
        <Text style={styles.listItem}>• Researched equities and debt securities, issuing securities, and investment company products and economic analysis through studying the Series 7 License Exam Manual</Text>
        <Text style={styles.listItem}>• Utilized Morgan Stanley resources to enhance understanding of financial service providers</Text>

        <View style={styles.resumeFlex}>
          <View>
            <Text>Piper Jaffray, Private Client Services – Boise, ID</Text>
            <Text style={styles.role}>Financial Advising Team Assistant</Text>
          </View>
          <Text style={styles.resumeDate}>May – August 2019</Text>
        </View>
        <Text style={styles.listItem}>• Contributed to a team achieving $1 million in new assets under management each month</Text>
        <Text style={styles.listItem}>• Utilized Excel, Bloomberg, and other software to complete various operational tasks</Text>
        <Text style={styles.listItem}>• Prepared quarterly newsletters and client meeting materials such as stock research</Text>
        <Text style={styles.listItem}>• Determined and executed the most efficient method for contacting clients</Text>
      </View>

      {/* Leadership Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>LEADERSHIP AND COMMUNITY ENGAGEMENT</Text>

        <View style={styles.resumeFlex}>
          <View>
            <Text>Undergraduate Finance Association</Text>
            <Text style={styles.role}>Events and Sports Coordinator</Text>
          </View>
          <Text style={styles.resumeDate}>November 2020 – Present</Text>
        </View>
        <Text style={styles.listItem}>• Help coordinate events to foster finance interest and professional development</Text>
        <Text style={styles.listItem}>• Increased membership by planning events targeted at athletes</Text>

        <View style={styles.resumeFlex}>
          <View>
            <Text>Emory University Solutions High School Conversion Project</Text>
            <Text style={styles.role}>Finance Committee Member</Text>
          </View>
          <Text style={styles.resumeDate}>September 2019 – Present</Text>
        </View>
        <Text style={styles.listItem}>• Assist in launching $21 million neighborhood development project</Text>
        <Text style={styles.listItem}>• Research low income tax credit requirements</Text>

        <View style={styles.resumeFlex}>
          <View>
            <Text>UBS Freshman Frenzy Program – New York, NY</Text>
            <Text style={styles.role}>Participant</Text>
          </View>
          <Text style={styles.resumeDate}>June 2019</Text>
        </View>
        <Text style={styles.listItem}>• Selected among 25 students for immersive 4-day finance experience</Text>
        <Text style={styles.listItem}>• Explored financial areas and participated in trading simulations</Text>
      </View>

      {/* Honors Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>HONORS</Text>
        <Text style={styles.listItem}>• Marine Corps Outstanding Achievement Award</Text>
        <Text style={styles.listItem}>• Co-Captain and 2020 MVP, Emory Women's Varsity Soccer</Text>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>ADDITIONAL SKILLS AND INTERESTS</Text>
        <Text><Text style={styles.role}>Languages:</Text> Intermediate in written and spoken Spanish</Text>
        <Text><Text style={styles.role}>Computing:</Text> Excel, Word, PowerPoint, Minitab, Adobe Acrobat Reader, Outlook</Text>
        <Text><Text style={styles.role}>Interests:</Text> Photography, Travel, Table Tennis, Soccer, Yoga</Text>
      </View>
    </Page>
  </Document>
);

export default BusinessResume;
