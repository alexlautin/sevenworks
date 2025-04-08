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
    padding: 20,
    fontFamily: "Arial",
    fontSize: 10,
    lineHeight: 1,
    color: "#000",
  },
  header: {
    textAlign: "center",
    marginBottom: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
  },
  contact: {
    fontSize: 10,
    marginBottom: 2,
  },
  headerLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 4,
  },
  section: {
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 2,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 4,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  leftCol: {
    flex: 1,
    marginRight: 10,
  },
  rightCol: {
    alignItems: "flex-end",
    textAlign: "right",
    whiteSpace: "nowrap",
    fontSize: 10,
  },
  role: {
    fontStyle: "italic",
  },
  bulletList: {
    paddingLeft: 12,
    marginBottom: 5,
  },
  bulletItem: {
    marginBottom: 2,
    paddingLeft: 5,
  },
  paragraph: {
    marginBottom: 2,
  },
  bold: {
    fontWeight: "bold",
  },
  underline: {
    textDecoration: "underline",
  },
});

const HumanServicesResume = ({ formData }: TemplateProps) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>First Name (Nickname) Last Name</Text>
        <Text style={styles.contact}>Emory Address • Emory Email Address • Phone Number</Text>
      </View>

      {/* EDUCATION */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Education</Text>
        <View style={styles.divider} />
        <View style={styles.flexRow}>
          <View style={styles.leftCol}>
            <Text style={styles.bold}>Emory University</Text>
            <Text style={styles.role}>Bachelor of Arts in Psychology</Text>
            <Text>Cumulative GPA: 3.69/4.00</Text>
            <Text><Text style={styles.bold}>Honors:</Text> Dean’s List, Honors List, PSI CHI Honors Society, Honors Program Candidate</Text>
          </View>
          <View style={styles.rightCol}>
            <Text style={styles.bold}>Atlanta, GA</Text>
            <Text>May 2021</Text>
          </View>
        </View>
      </View>

      {/* Related Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Related Experience</Text>
        <View style={styles.divider} />

        {/* Experience Item */}
        {[
          {
            org: "Family Culture and Adult Relationships Laboratory, Emory Psychology Department",
            role: "Research Assistant",
            location: "Atlanta, GA",
            date: "August 2020 – Present",
            bullets: [
              "Develop a study on the relationship between attachment style in undergraduate students and their relationship with future colleagues, while creating productive interactions with future colleagues by fostering a proper current attachment style.",
              "Collaborate in research on how family and culture, through their impact on emotional expression and self-definition, influence beliefs and behavior in important peer relationships.",
            ],
          },
          {
            org: "Camp Sunshine",
            role: "Camp Counselor",
            location: "New York City",
            date: "June 2020 – August 2020",
            bullets: [
              "Trained 200+ hours in skills such as wilderness survival, mental health awareness, and disability inclusion.",
              "Facilitated the personal and spiritual development of 108 neurotypical campers ages 8-18.",
              "Adapted activities to meet needs of 12 campers with various developmental disabilities.",
              "Fostered supportive and cooperative work relationships with 15 co-counselors.",
              "Executed diverse and educational programs to aid development of interpersonal relationships.",
              "Devoted 800+ to building relationships with each camper, as well as, ensuring their wellbeing.",
            ],
          },
          {
            org: "Art It Out Therapy Center",
            role: "Social Skills Camp Intern",
            location: "Marietta, GA",
            date: "June 2019 – August 2019",
            bullets: [
              "Assisted the therapist in leading week long group therapy sessions for children ages 5-14 years, who had a variety of mental differences including Autism, ADHD, and anxiety.",
              "Helped implement art therapy techniques and projects by monitoring and encouraging group participation.",
            ],
          },
        ].map((item, i) => (
          <View key={i}>
            <View style={styles.flexRow}>
              <View style={styles.leftCol}>
                <Text style={styles.bold}>{item.org}</Text>
                <Text style={styles.role}>{item.role}</Text>
              </View>
              <View style={styles.rightCol}>
                <Text style={styles.bold}>{item.location}</Text>
                <Text>{item.date}</Text>
              </View>
            </View>
            <View style={styles.bulletList}>
              {item.bullets.map((b, j) => (
                <Text key={j} style={styles.bulletItem}>• {b}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Additional Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Additional Experience</Text>
        <View style={styles.divider} />
        <View style={styles.flexRow}>
          <View style={styles.leftCol}>
            <Text style={styles.bold}>Human Health Department, Emory College of Arts and Sciences</Text>
            <Text style={styles.role}>It’s Your Health (Health 100) Teaching Assistant</Text>
          </View>
          <View style={styles.rightCol}>
            <Text style={styles.bold}>Atlanta, GA</Text>
            <Text>August 2019 – Present</Text>
          </View>
        </View>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>• Design and teach weekly instructional sessions for Health 100 students and foster a group-learning environment to communicate abstract concepts.</Text>
        </View>
      </View>

      {/* Leadership and Community Involvement */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Leadership and Community Involvement</Text>
        <View style={styles.divider} />

        {/* Repeat this format for all roles in this section */}
        {[
          {
            org: "International Honors Society in Psychology (PSI CHI), Emory University Chapter",
            role: "VP of Communications",
            location: "Atlanta, GA",
            date: "August 2020 – Present",
            bullets: [
              "Coordinate communications between PSI CHI, Emory administration and student organizations.",
              "Work with faculty sponsor and executive board members to plan chapter activities to meet PSI CHI member needs.",
            ],
          },
          {
            org: "“I Will Listen” Initiative, National Alliance on Mental Illness (NAMI)",
            role: "Campus Ambassador",
            location: "Atlanta, GA",
            date: "January 2020 – Present",
            bullets: [
              "Collaborate with JWT Ethos to create a week devoted to mental disorder awareness at Emory.",
              "Co-create mental health and mental disorder educational activities with student organizations on campus.",
            ],
          },
          {
            org: "Active Minds, Inc., Emory University",
            role: "Executive Board, Publicity Chair, Secretary",
            location: "Atlanta, GA",
            date: "August 2019 – Present",
            bullets: [
              "Organized and participated in events to promote awareness of mental health issues to reduce mental health stigma on Emory University's campus.",
            ],
          },
          {
            org: "Healthy Campus Coalition, Emory University",
            role: "Board Member",
            location: "Atlanta, GA",
            date: "February 2018 – May 2019",
            bullets: [
              "Created, ran and managed \"Be Positive Emory,\" a well-being skills training group for students.",
              "Coordinate with professors, student leaders and staff to help enhance access to Emory's Health Resources on campus.",
            ],
          },
          {
            org: "International Student Advising Board, Oxford College, Emory University",
            role: "Board Member",
            location: "Oxford, GA",
            date: "August 2017 – December 2017",
            bullets: [
              "Advised the Oxford College administration on new strategies for the International Student orientation program.",
            ],
          },
        ].map((item, i) => (
          <View key={i}>
            <View style={styles.flexRow}>
              <View style={styles.leftCol}>
                <Text style={styles.bold}>{item.org}</Text>
                <Text style={styles.role}>{item.role}</Text>
              </View>
              <View style={styles.rightCol}>
                <Text style={styles.bold}>{item.location}</Text>
                <Text>{item.date}</Text>
              </View>
            </View>
            <View style={styles.bulletList}>
              {item.bullets.map((b, j) => (
                <Text key={j} style={styles.bulletItem}>• {b}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Skills, Interests and Credentials</Text>
        <View style={styles.divider} />
        <Text><Text style={[styles.bold, styles.underline]}>Computer:</Text> SPSS; Microsoft Excel, PowerPoint and Outlook; Kantar, ComScore; Google Adwords and Analytics</Text>
        <Text><Text style={[styles.bold, styles.underline]}>Language:</Text> Fluent in English and Spanish</Text>
        <Text><Text style={[styles.bold, styles.underline]}>Certifications:</Text> First Response Safety Training, Certified student researcher, Collaborative Institution Training Initiative (CITI)</Text>
      </View>
    </Page>
  </Document>
);

export default HumanServicesResume;
