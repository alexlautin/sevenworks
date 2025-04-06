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
    padding: 20,
    lineHeight: 1.2,
    color: "#000",
  },
  header: {
    textAlign: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contact: {
    fontSize: 10,
    marginBottom: 5,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    maringTop: 0,
    marginBottom: 10,
  },
  title: {
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
    marginBottom: 2,
    marginTop: 10,
    textTransform: "uppercase",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 6,
  },
  paragraph: {
    marginBottom: 5,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  role: {
    fontStyle: "italic",
  },
  listItem: {
    marginLeft: 10,
    marginBottom: 2,
  },
});

const SWEResume = ({ formData }: TemplateProps) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Student Name</Text>
        <Text style={styles.contact}>
          Atlanta, GA | 915-232-5578 | first.last@emory.edu | linkedin.com/in/firstnamelastname | github.com/xxxx
        </Text>
        <View style={styles.line} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Software Engineering Intern</Text>

      {/* Summary */}
      <Text style={styles.paragraph}>
        Motivated and detail-oriented aspiring data analyst with a strong foundation in data visualization and statistical
        analysis, complemented by a passion for problem-solving. Eager to apply technical skills in programming, data
        manipulation, and analytical techniques to contribute to innovative projects. Committed to continuous learning and
        collaboration within a team environment while delivering high-quality insights that enhance decision-making and
        support organizational goals.
      </Text>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Education</Text>
        <View style={styles.divider} />
        <Text>
          <Text style={{ fontWeight: "bold" }}>
            Bachelor of Science in Computer Science, Emory University (Expected May 2026)
          </Text>
        </Text>
      </View>

      {/* Core Competencies & Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Core Competencies & Technical Skills</Text>
        <View style={styles.divider} />
        <Text style={styles.role}>
          <Text style={{ fontWeight: "bold" }}>Core Competencies: </Text>
          Debugging & Testing, Data Structures & Algorithms, Front-End, Back-End, Project Management, Programming
          Languages, User Experience, Artificial Intelligence
        </Text>
        <Text style={styles.role}>
          <Text style={{ fontWeight: "bold" }}>Technical Skills: </Text>Excel, SQL, R, Python
        </Text>
      </View>

      {/* Technical Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Technical Projects</Text>
        <View style={styles.divider} />

        <Text style={{ fontWeight: "bold" }}>Smart Recipe Recommender</Text>
        <Text style={styles.role}>GitHub Link | Completed: Month Year</Text>
        <Text style={styles.role}>Technologies: Python, Flask, React, MongoDB</Text>
        <Text style={styles.listItem}>
          • Created a web application that suggests personalized recipes based on users' dietary preferences and available
          ingredients.
        </Text>
        <Text style={styles.listItem}>
          • Designed and optimized a search algorithm that improved query processing speed by 50% for high-traffic requests.
        </Text>

        <Text style={{ fontWeight: "bold", marginTop: 8 }}>Weather Data Analyzer</Text>
        <Text style={styles.role}>GitHub Link | Completed: Month Year</Text>
        <Text style={styles.role}>Technologies: Python, Pandas, AWS Lambda, S3</Text>
        <Text style={styles.listItem}>
          • Developed a pipeline to process and analyze large weather datasets, reducing processing time by 75% using AWS
          Lambda and S3.
        </Text>
        <Text style={styles.listItem}>
          • Leveraged real-time data streaming, increasing data update frequency by 3x and enabling real-time trend analysis.
        </Text>
      </View>

      {/* Professional Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Professional Experience</Text>
        <View style={styles.divider} />
        <View style={styles.flexRow}>
          <View>
            <Text style={styles.role}>Tech Company LLC</Text>
            <Text>Software Engineer Intern</Text>
          </View>
          <Text style={styles.role}>2023</Text>
        </View>
        <Text style={styles.listItem}>
          • Acted as a software engineer intern for an IT consulting firm, contributing to the development of scalable
          software solutions for clients across the healthcare and finance industries, and successfully deployed 1 new pilot
          product.
        </Text>
        <Text style={styles.listItem}>
          • Developed and integrated RESTful APIs in Python, enhancing front-end application response times by 30% and
          supporting improved user engagement for over 5,000 monthly users.
        </Text>
        <Text style={styles.listItem}>
          • Collaborated with a team of 5 to design and implement a customer-facing web app using React and Node.js,
          streamlining user access to key features and boosting retention rates by 15%.
        </Text>
      </View>

      {/* Involvement */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Involvement & Engagement</Text>
        <View style={styles.divider} />
        <Text>Vice President, Data Club</Text>
        <Text>Member, Women in STEM</Text>
        <Text>Volunteer, Second Harvest</Text>
      </View>
    </Page>
  </Document>
);

export default SWEResume;
