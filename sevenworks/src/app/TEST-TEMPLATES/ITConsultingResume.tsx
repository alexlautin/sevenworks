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
    borderBottom: "1px solid black",
    marginBottom: 4,
  },
  resumeFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 5,
  },
  resumeDate: {
    textAlign: "right",
    whiteSpace: "nowrap",
  },
  role: {
    fontStyle: "italic",
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 0,
  },
  degree: {
    fontStyle: "italic"
  },
  listItem: {
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 2,
    paddingLeft: 5,
  },
});

const ITConsultingResume = ({ formData }: TemplateProps) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={styles.resumeHeader}>
        <Text style={styles.resumeName}>Pat C. Student</Text>
        <View style={styles.headerLine} />
        <View style={styles.resumeContact}>
          <View style={styles.contactLeft}>
            <Text>605 Asbury Circle MSC 12345</Text>
            <Text>Atlanta, Georgia 30322</Text>
          </View>
          <View style={styles.contactRight}>
            <Text>patc@emory.edu</Text>
            <Text>(678) 123-1000</Text>
          </View>
        </View>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>EDUCATION</Text>
        <View style={styles.resumeFlex}>
          <View>
            <Text><Text style={styles.title}>Emory University</Text>, Atlanta, Georgia</Text>
            <Text style={styles.degree}>Bachelor of Arts in Computer Science</Text>
            <Text>GPA: 3.81/4.0</Text>
            <Text><Text style={styles.title}>Relevant Coursework:</Text> Introduction to Computer Science I & II, Assembler Programming, Calculus I & II, Financial Accounting, Data and Decision Analytics, Linear Algebra, Multivariable Calculus</Text>
          </View>
          <Text style={styles.resumeDate}>May 2021</Text>
        </View>
      </View>

      {/* Programming Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>PROGRAMMING SKILLS</Text>
        <View style={styles.resumeFlex}>
            <View>
                <Text>Proficient in Java; Familiar with HTML, CSS, Swift, Python</Text>
            </View>
        </View>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>PROGRAMMING PROJECTS</Text>
        <View style={styles.resumeFlex}>
          <View>
            <Text style={styles.title}>FlashSale Mobile and Web Application Projects</Text>
          </View>
          <Text style={styles.resumeDate}>Nov 2020</Text>
        </View>
        <Text style={styles.listItem}>• Worked alongside teammates to develop prototypes of our social market place application</Text>

        <View style={styles.resumeFlex}>
          <View>
            <Text style={styles.title}>Task Manager and Space Invader Mobile Application Projects</Text>
          </View>
          <Text style={styles.resumeDate}>Oct 2020</Text>
        </View>
        <Text style={styles.listItem}>• Created a task manager using table view and a game using SpriteKit to learn and familiarize myself with Swift.</Text>

        <View style={styles.resumeFlex}>
          <View>
            <Text style={styles.title}>Personal Portfolio Website Project</Text>
          </View>
          <Text style={styles.resumeDate}>Apr 2020</Text>
        </View>
        <Text style={styles.listItem}>• Designed website for my personal portfolio using HTML to familiarize myself with CSS, Bootstrap, and JavaScript.</Text>

        <View style={styles.resumeFlex}>
          <View>
            <Text style={styles.title}>Note-taking Application Project</Text>
          </View>
          <Text style={styles.resumeDate}>Nov 2019</Text>
        </View>
        <Text style={styles.listItem}>• Created a fully functioning note-taking application in Java with custom features to suit my needs and to develop my skills in object-oriented programming.</Text>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>EXPERIENCE</Text>
        <View style={styles.resumeFlex}>
          <View>
            <Text><Text style={styles.role}>Finalist at HackATL,</Text> Atlanta, Georgia</Text>
          </View>
          <Text style={styles.resumeDate}>Nov 2020</Text>
        </View>
        <Text style={styles.listItem}>• Competed in the largest hackathon in Southeastern United States and placed 2nd among over 200 participants.</Text>
        <Text style={styles.listItem}>• Designed and created a functioning prototype of a mobile and web application for my team's project idea.</Text>

        <View style={styles.resumeFlex}>
          <View>
            <Text><Text style={styles.role}>Mentor at Zhang Dou Hua Media Co., Ltd,</Text> Atlanta, Georgia</Text>
          </View>
          <Text style={styles.resumeDate}>Mar 2019 – Present</Text>
        </View>
        <Text style={styles.listItem}>• Mentored 3-4 Chinese students a week, teaching the English language, preparing them for success when studying abroad.</Text>

        <View style={styles.resumeFlex}>
          <View>
            <Text><Text style={styles.role}>Summer Analyst at Accenture</Text> Bangkok, Thailand</Text>
          </View>
          <Text style={styles.resumeDate}>Jul 2020</Text>
        </View>
        <Text style={styles.listItem}>• Researched and presented digital marketing solutions for signature clients in the Thai airline and retail industries.</Text>
        <Text style={styles.listItem}>• Edited and translated manuals and instructions from Thai to English.</Text>
      </View>


      {/* Leadership Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>LEADERSHIP AND COMMUNITY ENGAGEMENT</Text>
        <View style={styles.resumeFlex}>
          <View>
            <Text><Text style={styles.role}>Publicity Chair for Thai Student Association, </Text> Emory University</Text>
          </View>
          <Text style={styles.resumeDate}>Jan 2019 – Present</Text>
        </View>
        <Text style={styles.listItem}>• Chartered Emory University's first Thai Student Association with the mission to raise awareness for Thai culture while giving back to the Thai community through fundraising and donating to Thai charities.</Text>
        <Text style={styles.listItem}>• Spearhead marketing efforts by designing flyers, posters, and online event pages.</Text>
        <Text style={styles.listItem}>• Participate in weekly executive board meetings to plan for future events.</Text>

        <View style={styles.resumeFlex}>
          <View>
            <Text><Text style={styles.role}>Volunteer for Volunteer Emory,</Text> Emory University</Text>
          </View>
          <Text style={styles.resumeDate}>Sep 2019 – Present</Text>
        </View>
        <Text style={styles.listItem}>• Engage in weekly service trips to various destinations assisting local charities.</Text>
        <Text style={styles.listItem}>• Paved trails and collected litter at Clyde Shepherd Nature Preserve, and sent messages of hope to sick children and their families with the Sending Smiles foundation.</Text>

        <View style={styles.resumeFlex}>
          <View>
            <Text><Text style={styles.role}>Member of Hack Emory,</Text> Emory University</Text>
          </View>
          <Text style={styles.resumeDate}>Sep 2019 – Present</Text>
        </View>
        <Text style={styles.listItem}>• Contribute to weekly meetings to learn and share ideas and projects among students with similar interests.</Text>
        <Text style={styles.listItem}>• Work with peers to learn new programming languages and develop web and mobile applications.</Text>

        <View style={styles.resumeFlex}>
          <View>
            <Text><Text style={styles.role}>Marketing Chair for Ambassadors for Global Awareness,</Text> Emory University</Text>
          </View>
          <Text style={styles.resumeDate}>Sep 2018 – May 2019</Text>
        </View>
        <Text style={styles.listItem}>• Served alongside the local PartnershipInAction core team to educate and fundraise for global issues.</Text>
        <Text style={styles.listItem}>• Focus efforts to alleviate world hunger, poverty, and illiteracy in accordance to Aga Khan Foundation's solutions.</Text>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>ADDITIONAL SKILLS AND INTERESTS</Text>
        <View style={styles.resumeContact}>
          <View style={styles.contactLeft}>
            <Text><Text style={styles.title}>Languages:</Text> Fluent in English and Thai; Working proficiency in Mandarin</Text>
            <Text><Text style={styles.title}>Martial Arts:</Text> First Dan Black Belt Taekwondo</Text>
          </View>
          <View style={styles.contactRight}>
            <Text><Text style={styles.title}>Fine Arts:</Text> Drawing and Sketching</Text>
            <Text><Text style={styles.title}>Interests:</Text> App Development, Design, Traveling</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default ITConsultingResume;
