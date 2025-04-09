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
    lineHeight: 1,
    color: "#000",
    padding: 20,
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contact: {
    fontSize: 9,
    marginTop: 2,
    marginBottom: 0,
  },
  section: {
    marginTop: 0,
    marginBottom: 5,
  },
  sectionHeader: {
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 4,
    marginTop: 5,
    borderBottom: "1px solid black",
    paddingBottom: 2,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  dateLocation: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    textAlign: "right",
  },
  role: {
    fontStyle: "italic",
  },
  paragraph: {
    marginBottom: 4,
  },
  bulletList: {
    marginLeft: 15,
    marginTop: 0,
    marginBottom: 4,
  },
  bulletItem: {
    marginBottom: 2,
  },
});

const JournalismResume = ({ formData }: TemplateProps) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>JANE R. JOURNALIST</Text>
        <Text style={styles.contact}>
          1 Emory Way | Atlanta, GA 30322 | (404) 514-2387 | jjourn@emory.edu | www.linkedin.com/in/jane-journalist
        </Text>
      </View>

      {/* OBJECTIVE */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>OBJECTIVE</Text>
        <Text>Utilize my strong research and reporting skills to obtain a full-time multimedia reporter role at a major metro daily</Text>
      </View>

      {/* EDUCATION */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>EDUCATION</Text>

        <View style={styles.flexRow}>
          <View>
            <Text style={{ fontWeight: "bold" }}>Emory University</Text>
            <Text>Bachelor of Science in Environmental Sciences; Bachelor of Arts in Biology</Text>
            <Text>GPA: 3.5/4.0; Dean's List (2 semesters)</Text>
            <Text><Text style={styles.role}>Related Coursework:</Text> Intro to Digital Video; Mass Media and Social Influences; Documentary Filmmaking I & II; Gender, Race, and Inequality; Racial Violence in America; Georgia Civil Rights Cold Cases</Text>
          </View>
          <View style={styles.dateLocation}>
            <Text>Atlanta, GA</Text>
            <Text>May 2021</Text>
          </View>
        </View>
      </View>

      {/* RELATED EXPERIENCE */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>RELATED EXPERIENCE</Text>
        {[
          {
            title: "The Emory Wheel",
            role: "Staff Feature Writer",
            location: "Atlanta, GA",
            date: "Oct 2019 – Present",
            bullets: [
              "Average two feature articles weekly (print and video content) for student-run weekly campus digital newspaper",
              "Pitched and wrote more than 25 feature stories and news articles since start of pandemic in March 2020",
              "Received 225 follows for Dec 2020 feature about Emory alum and showrunner for Netflix series Bridgerton"
            ],
          },
          {
            title: "Elle Magazine",
            role: "Remote Beauty Writer Intern",
            location: "New York, NY",
            date: "May – Aug 2020",
            bullets: [
              "Worked remotely to research and report weekly on industry trends and features stories",
              "Represented the publication at Zoom press conferences, launches, and industry events",
              "Interviewed and maintained relationships with prestige market beauty executives",
              "Coordinated annual Beauty Top 100 Survey by working with Public Relations directors and Elle Paris Bureau to ensure entries were received and re-written for publication",
              "Served as photography liaison to assign photographers, schedule shoots, and select art for stories",
              "Nominated for Fashion First award for excellent performance as remote intern"
            ],
          },
          {
            title: "CNN International Network, Special Projects",
            role: "Special Projects Intern (cut short due to pandemic)",
            location: "Atlanta, GA",
            date: "Jan – Mar 2020",
            bullets: [
              "Worked with producers to create high-end sales tapes and promotions",
              "Assisted in production of special projects and catalogued sound bytes from videotape for future airing",
            ],
          },
          {
            title: "NBC News 8",
            role: "Production Assistant/Associate Producer Intern",
            location: "Akron, OH",
            date: "May – Jul 2019",
            bullets: [
              "Collaborated with Investigative Team reporters to formulate pitches and assist with story production",
              "Wrote copy and helped producers to select for noon, 5 and 6 pm broadcasts",
              "Interacted with assignment desk, producers, and reporters on story pitches and breaking news",
            ],
          },
          {
            title: "CNN Student Bureau",
            role: "Correspondent",
            location: "Atlanta, GA",
            date: "Jan – Aug 2018",
            bullets: [
              "Wrote, produced, and reported for CNN-aired story about college student abuse of prescription drugs",
            ],
          },
          {
            title: "The Raileigh News & Observer",
            role: "Student Writer/Reporter",
            location: "Rayleigh, NC",
            date: "Summers 2017, 2018",
            bullets: [
              "Published more than 20 news and feature stories as high school student covering Triangle region",
            ],
          },
        ].map(({ title, role, location, date, bullets }, idx) => (
          <View key={idx}>
            <View style={styles.flexRow}>
              <View>
                <Text style={{ fontWeight: "bold" }}>{title}</Text>
                <Text style={styles.role}>{role}</Text>
              </View>
              <View style={styles.dateLocation}>
                <Text>{location}</Text>
                <Text>{date}</Text>
              </View>
            </View>
            <View style={styles.bulletList}>
              {bullets.map((b, i) => (
                <Text key={i} style={styles.bulletItem}>• {b}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* LEADERSHIP */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>LEADERSHIP & COMMUNITY ENGAGEMENT</Text>
        {[
          {
            title: "Asian American Journalists Association",
            role: "Atlanta Chapter Member",
            date: "Oct 2019 – Present",
          },
          {
            title: "Gamma Xi Gamma Sorority",
            role: "Publicity Chair",
            date: "Aug 2020 – Present",
          },
          {
            title: "Volunteer Emory",
            role: "Volunteer",
            date: "Sep 2018 – Apr 2019",
          },
        ].map(({ title, role, date }, idx) => (
          <View key={idx}>
            <View style={styles.flexRow}>
              <View>
                <Text><Text style={{ fontWeight: "bold" }}>{title}</Text>, <Text style={styles.role}>{role}</Text></Text>
              </View>
              <View style={styles.dateLocation}>
                <Text>{date}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* SKILLS & INTERESTS */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>SKILLS & INTERESTS</Text>
        <Text><Text style={{ fontWeight: "bold" }}>Software Skills:</Text> Proficient in MS Word, Excel, PowerPoint; Wordpress, Adobe Premiere, InDesign, Photoshop; basic podcast skills with Audacity; online research using LexisNexis, other online dbases</Text>
        <Text><Text style={{ fontWeight: "bold" }}>Social Media Skills:</Text> Proficient in HootSuit and Twitter, Instagram</Text>
        <Text><Text style={{ fontWeight: "bold" }}>Language Skills:</Text> Intermediate conversational and written French; basic conversational Spanish</Text>
        <Text><Text style={{ fontWeight: "bold" }}>Interests:</Text> Freelance writing on entertainment, travel, and fashion; fashion and set still photography; British lit</Text>
      </View>
    </Page>
  </Document>
);

export default JournalismResume;
