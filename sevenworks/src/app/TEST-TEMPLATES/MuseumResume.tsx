import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
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
    lineHeight: 1.1,
    color: "#000",
    padding: 20,
  },
  resumeHeader: {
    textAlign: "center",
    marginBottom: 4,
  },
  resumeName: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 6,
  },
  resumeContact: {
    fontSize: 11,
    marginBottom: 2,
  },
  headerLine: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    marginVertical: 2,
  },
  section: {
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "normal",
    marginTop: 5,
    marginBottom: 2,
  },
  sectionDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 6,
  },
  resumeFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  resumeDetails: {
    flexGrow: 1,
    minWidth: "70%",
  },
  resumeDateLocation: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    textAlign: "right",
    whiteSpace: "nowrap",
    flexShrink: 0,
    lineHeight: 1.2,
  },
  resumeRole: {
    fontStyle: "italic",
  },
  location: {
    fontSize: 11,
  },
  date: {
    fontSize: 11,
  },
  list: {
    paddingLeft: 4,
    marginTop: 0,
    marginBottom: 6,
  },
  listItem: {
    paddingLeft: 2,
    marginBottom: 2,
  },
  paragraph: {
    marginBottom: 2,
  },
});

const MuseumResume = ({ formData }: TemplateProps) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <View style={styles.resumeHeader}>
        <Text style={styles.resumeName}>MARGEAUX STUDENT</Text>
        <Text style={styles.resumeContact}>
          Emory PO Box 4321, Atlanta GA 30322 • 1894 Drew Lane, Washington, DC
          22321
        </Text>
        <Text style={styles.resumeContact}>
          mlstudent@emory.edu • 404-721-0000 • Margeaux Student | LinkedIn
        </Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        <View style={styles.sectionDivider} />
        <View style={styles.resumeFlex}>
          <View>
            <Text>Emory University, Atlanta, GA</Text>
            <Text>Bachelor of Arts in Art History, Arts Management Concentration; Minor in Italian Studies</Text>
            <Text>GPA: 3.85/4.00; Cumulative GPA: 3.63/4.00; Dean's List (3 semesters)</Text>
            <Text>
              <Text style={styles.resumeRole}>Related Courses:</Text> Arts Administration, Non-Profit Marketing, Principles of Organization & Management
            </Text>
            <Text>
              <Text style={styles.resumeRole}>Honors:</Text> Varner Scholarship, Dean's List (4 semesters)
            </Text>
          </View>
          <View style={styles.resumeDateLocation}>
            <Text style={styles.date}>May 2020</Text>
          </View>
        </View>

        <View style={styles.resumeFlex}>
          <Text>John Cabot University, Study Abroad Program in Art History, Rome Italy</Text>
          <View style={styles.resumeDateLocation}>
            <Text style={styles.date}>Aug 2019 – Dec 2019</Text>
          </View>
        </View>
      </View>

      {/* Arts Related Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ARTS RELATED EXPERIENCE</Text>
        <View style={styles.sectionDivider} />

        {/* Guggenheim */}
        <View style={styles.resumeFlex}>
          <View>
            <Text>Solomon R. Guggenheim Museum, New York, NY</Text>
            <Text style={styles.resumeRole}>Intern, Education & Library/Archives Department (Remote/Virtual)</Text>
          </View>
          <View style={styles.resumeDateLocation}>
            <Text style={styles.date}>May 2020 – Aug 2020</Text>
          </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Conduct research and write fact sheets on select works of Kandisky Collections virtual exhibit</Text>
          <Text style={styles.listItem}>• Help prepare wall texts, write lot notes, and presentation of Frank Lloyd Wright's Usonian House & Pavillion</Text>
          <Text style={styles.listItem}>• Contribute to planning of 37th Museum Mile Festival, create outdoor, socially distant activities for families</Text>
          <Text style={styles.listItem}>• Participate in weekly Museum Cultures Seminar Programs that include staff lectures and virtual field trips</Text>
        </View>

        {/* Susan Inglett Gallery */}
        <View style={styles.resumeFlex}>
          <View>
            <Text>Susan Inglett Gallery, New York, NY</Text>
            <Text style={styles.resumeRole}>Gallery Intern</Text>
          </View>
          <View style={styles.resumeDateLocation}>
            <Text style={styles.date}>May 2019 – Sep 2019</Text>
          </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Assisted gallery owner with daily business operations, including inventory, loans, and contact list</Text>
          <Text style={styles.listItem}>• Led gallery tours and interfaced directly with public at front desk and during exhibits</Text>
          <Text style={styles.listItem}>• Increased social media engagement by 50% and updated website content</Text>
        </View>

        {/* Carlos Museum */}
        <View style={styles.resumeFlex}>
          <View>
            <Text>C. Carlos Museum, Atlanta, GA</Text>
            <Text style={styles.resumeRole}>Volunteer, Education Department</Text>
          </View>
          <View style={styles.resumeDateLocation}>
            <Text style={styles.date}>Jan 2018 – May 2018</Text>
          </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Led tours for groups of 15–25 elementary school-aged children and teachers</Text>
          <Text style={styles.listItem}>• Presented facts about exhibits and answered patron questions</Text>
          <Text style={styles.listItem}>• Helped host "Mummies and Milkshakes" and "Artful Stories" family programs</Text>
        </View>
      </View>

      {/* Additional Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ADDITIONAL EXPERIENCE</Text>
        <View style={styles.sectionDivider} />

        <View style={styles.resumeFlex}>
          <View>
            <Text>Walden School, Atlanta, GA</Text>
            <Text style={styles.resumeRole}>Volunteer</Text>
          </View>
          <View style={styles.resumeDateLocation}>
            <Text style={styles.date}>May 2016 – Aug 2018</Text>
          </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Interacted with Autistic children, providing social and academic support</Text>
          <Text style={styles.listItem}>• Designed classroom exhibits and organized materials</Text>
        </View>

        <View style={styles.resumeFlex}>
          <View>
            <Text>Island Republic Restaurant, Washington, DC</Text>
            <Text style={styles.resumeRole}>Head Waitress</Text>
          </View>
          <View style={styles.resumeDateLocation}>
            <Text style={styles.date}>Summers 2016, 2017</Text>
          </View>
        </View>
        <Text style={styles.listItem}>• Trained 3 new staff and coordinated work schedules</Text>
      </View>

      {/* Leadership */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>LEADERSHIP & ACTIVITIES</Text>
        <View style={styles.sectionDivider} />

        <View style={styles.resumeFlex}>
          <Text>Student Alumni Association, Senior Gift Chair</Text>
          <Text style={styles.date}>Aug 2019 – May 2020</Text>
        </View>
        <View style={styles.resumeFlex}>
          <Text>Emory Arts Underground, Marketing Coordinator</Text>
          <Text style={styles.date}>Jan 2018 – May 2020</Text>
        </View>
        <View style={styles.resumeFlex}>
          <Text>Kappa Alpha Theta Sorority, New Member Educator</Text>
          <Text style={styles.date}>Sep 2019 – May 2020</Text>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SKILLS</Text>
        <View style={styles.sectionDivider} />
        <Text>Computer skills: MS Word, Excel, PowerPoint, Adobe Photoshop, Zoom, Microsoft Teams</Text>
        <Text>Language skills: Intermediate Italian; basic conversational French</Text>
        <Text>Interests: Travel (Italy, France, Spain, Australia), painting, photography, tennis</Text>
      </View>
    </Page>
  </Document>
);

export default MuseumResume;
