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
  
Font.register({family: "Calibri", src: "/fonts/calibri.ttf"});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Arial",
    fontSize: 10,
    paddingTop: 28,
    paddingBottom: 15,
    paddingHorizontal: 65,
    lineHeight: 1.2,
    color: "#000",
  },
  resumeHeader: {
    marginBottom: 5,
  },
  resumeName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  headerLine: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 5,
  },
  resumeContact: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    marginBottom: 10,
  },
  section: {
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
    textDecoration: "underline",
    marginBottom: 4,
  },
  resumeFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    marginBottom: 2,
  },
  resumeDate: {
    textAlign: "right",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
  role: {
    fontStyle: "italic",
  },
  listItem: {
    marginBottom: 1,
    paddingLeft: 10,
  },
  paragraph: {
    marginBottom: 1,
  },
});

const TechnologyResume = ({ formData }: TemplateProps) => {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.resumeHeader}>
          <Text style={styles.resumeName}>Name</Text>
          <View style={styles.headerLine} />
          <View style={styles.resumeContact}>
            <Text>PO Box 100000, Atlanta GA 30322</Text>
            <Text>303-111-2222</Text>
            <Text>name@emory.edu</Text>
            <Text>http://website.com</Text>
          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          <View style={styles.resumeFlex}>
            <View>
              <Text style={styles.paragraph}><Text style={{ fontWeight: 700 }}>Emory University</Text>, Emory College, Atlanta, GA</Text>
              <Text style={styles.role}>Bachelor of Science in Mathematics and Computer Science</Text>
              <Text>Cumulative GPA: 3.89/4.00</Text>
            </View>
            <Text style={styles.resumeDate}>May 2022</Text>
          </View>
        </View>

        {/* Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>RELEVANT TECHNICAL SKILLS</Text>
          <Text style={styles.paragraph}><Text style={{ fontWeight: 700 }}>Computing Languages and Technologies</Text> – Java, C, JUnit, Spring, Windows, Unix</Text>
          <Text style={styles.paragraph}><Text style={{ fontWeight: 700 }}>Database Technologies</Text> – SQL, PL/SQL, Oracle, MySQL</Text>
          <Text style={styles.paragraph}><Text style={{ fontWeight: 700 }}>Web Development</Text> – XHTML, CSS, JavaScript, AJAX, Dojo, jQuery, PHP, APEX, XML, XSL</Text>
        </View>

        {/* Honors */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>HONORS</Text>
          <Text style={styles.paragraph}>2020 Deborah Jackson Award Recipient</Text>
          <Text style={styles.paragraph}>Dean’s Achievement Scholar</Text>
          <Text>International Baccalaureate Diploma Recipient</Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>

          {[
            {
              org: "Southwest Airlines",
              loc: "Dallas, TX",
              title: "Southwest.com Air Team Intern",
              date: "May 2021 – Aug 2021",
              bullets: [
                "Developed new back-end architecture and defect fixes for southwest.com online interface",
                "Engaged in test-driven development practices while demonstrating agile values as part of a team environment",
              ],
            },
            {
              org: "Home Depot Corporate Headquarters",
              loc: "Atlanta, GA",
              title: "Information Technology Intern",
              date: "May 2019 – Aug 2019, May 2020 – Aug 2020",
              bullets: [
                "Led several Oracle APEX applications through the development life-cycle...",
                "Designed and implemented new methods for unit tests with the Spring framework",
                "Optimized and upgraded Java back-end and JavaScript/AJAX front-end of web applications",
                "Drafted UML technical designs for existing and future projects",
              ],
            },
            {
              org: "Emory University Technology Services",
              loc: "Atlanta, GA",
              title: "Clean Room Technician",
              date: "Aug 2019 – Aug 2020, Aug 2021 – Present",
              bullets: [
                "Remove malware from computer, resolve software issues and assist with wireless network configuration",
              ],
            },
            {
              org: "Global Health, Education, and Economic Development",
              loc: "Atlanta, GA",
              title: "Technical Lead",
              date: "Jan 2019 – Present",
              bullets: [
                "Develop a website providing online applications for trips to Guatemala and Nepal",
                "Implemented collaboration tools for communication among interns and executive board",
              ],
            },
          ].map((job, i) => (
            <View key={i}>
              <View style={styles.resumeFlex}>
                <View>
                  <Text style={styles.paragraph}><Text style={{ fontWeight: 700 }}>{job.org}</Text>, {job.loc}</Text>
                  <Text style={styles.role}>{job.title}</Text>
                </View>
                <Text style={styles.resumeDate}>{job.date}</Text>
              </View>
              {job.bullets.map((b, j) => (
                <Text key={j} style={styles.listItem}>• {b}</Text>
              ))}
            </View>
          ))}
        </View>

        {/* Leadership */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>LEADERSHIP & COMMUNITY ENGAGEMENT</Text>
          {/* Same mapping structure can be applied here if needed */}
          <View style={styles.resumeFlex}>
            <View>
              <Text style={styles.paragraph}><Text style={{ fontWeight: 700 }}>Volunteer Emory</Text>, Atlanta, GA</Text>
              <Text style={styles.role}>Student Co-Director</Text>
            </View>
            <Text style={styles.resumeDate}>Aug 2018 – Present</Text>
          </View>
          <Text style={styles.listItem}>• Established, recruited participants, and led a new weekly service trip to Computers for Youth</Text>
          <Text style={styles.listItem}>• Coordinated and led a 2010 spring break trip to Leland, MS</Text>
          <Text style={styles.listItem}>• Supported major events, including Gandhi/Be the Change Day</Text>
          <Text style={styles.listItem}>• Volunteered on service trips to New Orleans, LA and Leland, MS</Text>
          <Text style={styles.listItem}>• Worked with Open Door, Briar Vista, and Jones Boys and Girls Club</Text>
        </View>

        {/* Additional Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ADDITIONAL SKILLS & INTERESTS</Text>
          <Text><Text style={styles.role}>Languages:</Text> Fluent in Spanish; Conversational in German</Text>
          <Text><Text style={styles.role}>Fine Arts:</Text> Piano (14 years – high mastery); Sketch and Charcoal Painting (8 years)</Text>
          <Text><Text style={styles.role}>Interests:</Text> Soccer; Mountain Climbing; Organic Gardening; Strategic Gaming</Text>
        </View>
      </Page>
    </Document>
  );
};

export default TechnologyResume;
