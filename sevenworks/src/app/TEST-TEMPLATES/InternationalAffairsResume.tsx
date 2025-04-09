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
    padding: 20,
    lineHeight: 1,
    color: "#000",
  },
  resumeHeader: {
    textAlign: "center",
    marginBottom: 2,
  },
  resumeName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  resumeContact: {
    fontSize: 11,
    marginBottom: 2,
  },
  section: {
    marginBottom: 2,
  },
  sectionHeader: {
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 4,
  },
  resumeFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 0,
  },
  resumeDateLocation: {
    flexDirection: "column",
    alignItems: "flex-end",
    textAlign: "right",
    whiteSpace: "nowrap",
    fontSize: 11,
    lineHeight: 1.2,
  },
  resumeRole: {
    fontStyle: "italic",
    marginTop: 0,
    marginBottom: 0,
  },
  bulletList: {
    marginTop: 0,
    paddingLeft: 15,
    marginBottom: 10,
  },
  bulletItem: {
    fontSize: 11,
    lineHeight: 1.2,
    marginBottom: 2,
  },
  paragraph: {
    margin: 0,
    lineHeight: 1.2,
  },
});

const InternationalAffairsResume = ({ formData }: TemplateProps) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={styles.resumeHeader}>
        <Text style={styles.resumeName}>HENRY STUDENT</Text>
        <Text style={styles.resumeContact}>Atlanta, GA 30322</Text>
        <Text style={styles.resumeContact}>(404) 555-1234 hstudent@emory.edu</Text>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>EDUCATION</Text>
        <View style={styles.resumeFlex}>
          <View>
            <Text style={{ fontWeight: "bold" }}>EMORY UNIVERSITY</Text>
            <Text>Bachelor of Arts in International Studies</Text>
            <Text>Cumulative GPA: 3.89/4.00</Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Honors and Awards:</Text> Dean’s List (7 semesters); Phi Beta Kappa
            </Text>
          </View>
          <View style={styles.resumeDateLocation}>
            <Text style={{ fontWeight: "bold" }}>Atlanta, GA</Text>
            <Text style={{ fontWeight: "bold" }}>May 2021</Text>
          </View>
        </View>
      </View>

      {/* Related Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>RELATED EXPERIENCE</Text>

        {[
          {
            org: "CARE International",
            role: "Policy Intern",
            loc: "Atlanta, GA",
            date: "Jan 2021 – Present",
            bullets: [
              "Research global women’s health care policy initiatives for use in preparing organization position papers",
              "Strengthen writing skills by drafting press releases for media advising of research findings as published by the organization",
              "Make presentations to organization leadership to present research findings and recommendations for policy statements",
            ],
          },
          {
            org: "International Rescue Committee",
            role: "Volunteer (remote position)",
            loc: "Atlanta, GA",
            date: "Sep 2020 – Dec 2020",
            bullets: [
              "Virtually tutor 14 children of refugees in school subjects, including English, math, and writing",
              "Provide support to refugees from various countries through referrals for needed services and connections to organizations for assistance with housing, food procurement, and employment opportunities",
              "Created new relationships with 12 organizations to provide resources to organization's clients in light of COVID-19 challenges",
              "Managed organization social media feeds to build following and market services. Increased following by 15 – 22% across various platforms",
            ],
          },
          {
            org: "The Carter Center",
            role: "Democracy Program Intern (internship completed remotely)",
            loc: "Atlanta, GA",
            date: "Jan 2020 – May 2020",
            bullets: [
              "Researched upcoming foreign elections to identify potential risks to fair and democratic elections",
              "Made presentations to program directors to advise of findings",
              "One of two interns selected to participate in overseeing of elections in Ghana, however trip cancelled due to COVID-19 pandemic outbreak in March 2020",
            ],
          },
          {
            org: "Latin American Association",
            role: "Policy Research Intern",
            loc: "Atlanta, GA",
            date: "Jun 2019 – Aug 2019",
            bullets: [
              "Investigated allegations of torture in remote villages in central Honduras and El Salvador based on news reports and internal sources, and reported on findings to program staff",
              "Participated in interviews of newly-arrived refugees from Latin-American countries to Atlanta",
              "Provided resources for finding shelter, seeking asylum or citizenship, and finding employment",
              "Organized and coordinated various fundraising events for the organization, including logistics and guest list management. Events raised nearly $500,000 for organization initiatives",
            ],
          },
        ].map(({ org, role, loc, date, bullets }) => (
          <View key={org}>
            <View style={styles.resumeFlex}>
              <View>
                <Text style={{ fontWeight: "bold" }}>{org}</Text>
                <Text style={styles.resumeRole}>{role}</Text>
              </View>
              <View style={styles.resumeDateLocation}>
                <Text style={{ fontWeight: "bold" }}>{loc}</Text>
                <Text style={{ fontWeight: "bold" }}>{date}</Text>
              </View>
            </View>
            <View style={styles.bulletList}>
              {bullets.map((item, i) => (
                <Text key={i} style={styles.bulletItem}>• {item}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Leadership Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>LEADERSHIP & COMMUNITY SERVICE</Text>
        <View style={styles.resumeFlex}>
          <Text style={{ fontWeight: "bold" }}>Executive Board Member, Emory PRIDE</Text>
        </View>
        <Text style={styles.bulletItem}>• Host events on campus to encourage more inclusive environment for LGBTQ students at Emory</Text>

        <View style={styles.resumeFlex}>
          <Text style={{ fontWeight: "bold" }}>Volunteer, Habitat for Humanity</Text>
        </View>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>ADDITIONAL SKILLS</Text>
        <Text style={styles.bulletItem}>• Fluent in Spanish (speaking, writing, and reading)</Text>
        <Text style={styles.bulletItem}>• Proficient in MS Word, Excel, PowerPoint, and conducting internet research</Text>
        <Text style={styles.bulletItem}>• Skilled in use of social media including Facebook, Twitter, Instagram, and WordPress blogging</Text>
        <Text style={styles.bulletItem}>• Traveled extensively throughout South America, including Argentina, Chile, Ecuador, and Brazil</Text>
      </View>
    </Page>
  </Document>
);

export default InternationalAffairsResume;
