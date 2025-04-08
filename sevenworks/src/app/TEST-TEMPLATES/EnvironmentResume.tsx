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
    marginTop: 4,
    marginBottom: 10,
  },
  bulletItem: {
    marginBottom: 2,
  },
});

const EnvironmentResume = ({ formData }: TemplateProps) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Erica B. Environmental</Text>
        <Text style={styles.contact}>
          (404) 333-2121 ■ enviro@emory.edu ■ www.linkedin.com/in/erica-environmental
        </Text>
      </View>

      {/* OBJECTIVE */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>OBJECTIVE</Text>
        <Text>To obtain a full-time environmental assessment position related to wetland management and marine conservation</Text>
      </View>

      {/* EDUCATION */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>EDUCATION</Text>

        <View style={styles.flexRow}>
          <View>
            <Text><Text style={{ fontWeight: "bold" }}>Emory University</Text>, Atlanta, GA</Text>
            <Text>Bachelor of Science in Environmental Sciences; Bachelor of Arts in Biology</Text>
            <Text>Cumulative GPA: 3.5/4.0</Text>
            <Text><Text style={styles.role}>Related Coursework:</Text> Tropical Marine Ecology; Freshwater Ecology; Coastal Ecology; Ecology of Emory; Field Botany; Cell Biology; Chemistry; Environmental Assessment & Management; Ecological Economics; and, Environmental Policy</Text>
          </View>
          <View style={styles.dateLocation}>
            <Text>May 2021</Text>
          </View>
        </View>

        <View style={styles.flexRow}>
          <View>
            <Text><Text style={{ fontWeight: "bold" }}>Oxford College of Emory University</Text>, Oxford, GA</Text>
            <Text>Associate of Arts</Text>
            <Text><Text style={styles.role}>Honors:</Text> Merit List (All Semesters); Oxford College Environmental Science Award 2019; Leadership Oxford</Text>
          </View>
          <View style={styles.dateLocation}>
            <Text>May 2019</Text>
          </View>
        </View>
      </View>

      {/* RELATED EXPERIENCE */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>RELATED EXPERIENCE</Text>

        {[
          {
            title: "Carbon Sequestration Monitoring Program",
            subtitle: "Department of Environmental Sciences, Emory University",
            role: "Independent Study",
            date: "Feb 2020 – May 2020",
            bullets: [
              "Developed effective carbon sequestration program for forested creek near Emory’s Math/Science Building",
              "Selected and planted ground vegetation and shrubs during early pandemic that will aid in reforestation",
            ],
          },
          {
            title: "Emory University Campus Services",
            subtitle: "Atlanta, GA",
            role: "Environmental Engineer Intern",
            date: "May 2019 – May 2020",
            bullets: [
              "Updated Emory's greenhouse gas inventory and evaluated progress of Emory’s climate action plan",
              "Developed educational outreach material for campus hydroponic water reclamation facility (Water Hub)",
              "Presented at 2020 Sustainable Campuses Conference and Greenbuild 2019 Convention",
            ],
          },
          {
            title: "Tropical Marine Ecology Research",
            subtitle: "Discovery Bay Marine Lab, Jamaica",
            role: "Program Participant",
            date: "Jan 2020",
            bullets: [
              "Identified more than 100 marine plants, invertebrates and fish as part of Stony Brook SMAS Program",
              "Conducted research and wrote research paper on species richness on coral reef patches",
            ],
          },
          {
            title: "Skidaway Institute of Oceanography",
            subtitle: "Savannah, GA",
            role: "Research Assistant",
            date: "May – July 2019",
            bullets: [
              "Observed interacting gene regulatory networks that control iron acquisition and carbon metabolism in Vibrio fischeri",
              "Designed lab illustrating how microbes respond to nutrient limitation for training of high school Marine Biology educators",
            ],
          },
          {
            title: "Oxford Institute for Environmental Education",
            subtitle: "Oxford, GA",
            role: "Teaching Assistant",
            date: "Oct 2018 – May 2019",
            bullets: [
              "Supported professors in instructing K-12 educators on best practices for teaching Environmental Studies and Biology",
              "Prepared all labs; assisted participants in collecting, identifying and understanding benthic macro invertebrates",
            ],
          },
        ].map(({ title, subtitle, role, date, bullets }, idx) => (
          <View key={idx}>
            <View style={styles.flexRow}>
              <View>
                <Text><Text style={{ fontWeight: "bold" }}>{title}</Text>{subtitle ? `, ${subtitle}` : ""}</Text>
                <Text style={styles.role}>{role}</Text>
              </View>
              <View style={styles.dateLocation}>
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
            title: "Greeks Go Green – Emory University",
            role: "Co-President, Kappa Kappa Gamma Sorority",
            date: "Oct 2019 – Present",
            bullets: [
              "Educating Greek Life on topics such as recycling and energy and water conservation.",
              "Write and apply for grants to make the sorority and fraternity houses more sustainable and for educational events.",
            ],
          },
          {
            title: "Oxford Development & Alumni Relations Office",
            role: "Office Assistant",
            date: "Sep 2017 – May 2018",
            bullets: [
              "Prepared Alumni information for inclusion into University publications. Contacted University donors.",
            ],
          },
        ].map(({ title, role, date, bullets }, idx) => (
          <View key={idx}>
            <View style={styles.flexRow}>
              <View>
                <Text><Text style={{ fontWeight: "bold" }}>{title}</Text></Text>
                <Text style={styles.role}>{role}</Text>
              </View>
              <View style={styles.dateLocation}>
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

      {/* SKILLS & INTERESTS */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>SKILLS & INTERESTS</Text>
        <Text><Text style={{ fontWeight: "bold" }}>Lab Skills:</Text> Plant, soil and water sampling; acid washing; agarose gel electrophoresis; DNA and RNA isolation; and, PCR</Text>
        <Text><Text style={{ fontWeight: "bold" }}>Software Skills:</Text> MS Word, Excel, PowerPoint; Basic R and Python</Text>
        <Text><Text style={{ fontWeight: "bold" }}>Foreign Language:</Text> Advanced written and conversational French</Text>
        <Text><Text style={{ fontWeight: "bold" }}>Interests:</Text> SCUBA; snowboarding; tennis; running; backpacking and travel, having spent 17 years living in 4 countries</Text>
      </View>
    </Page>
  </Document>
);

export default EnvironmentResume;
