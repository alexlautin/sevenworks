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
    lineHeight: 1.1,
    padding: 30,
  },
  resumeHeader: {
    marginBottom: 12,
  },
  resumeName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  contact: {
    fontSize: 10,
    marginBottom: 12,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#000",
    marginBottom: 6,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  rightColumn: {
    alignItems: "flex-end",
    textAlign: "right",
  },
  role: {
    fontStyle: "italic",
  },
  bulletList: {
    marginTop: 4,
    marginBottom: 8,
    paddingLeft: 10,
  },
  bulletItem: {
    marginBottom: 2,
  },
});

const HealthResume = ({ formData }: TemplateProps) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={styles.resumeHeader}>
        <Text style={styles.resumeName}>Juan Garcia</Text>
        <Text style={styles.contact}>
          49 Rockyford Rd | Atlanta, GA 30317 | juan.garcia@gmail.com | 404-555-7783 | linkedin.com/in/juangarcia
        </Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.divider} />
        <View style={styles.flexRow}>
          <View>
            <Text style={styles.sectionTitle}>Emory University</Text>
            <Text>Bachelor of Science in Biology</Text>
            <Text>Cumulative GPA: 3.43/4.00</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text>May 2021</Text>
            <Text>Atlanta, GA</Text>
          </View>
        </View>
      </View>

      {/* Healthcare & Research */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Healthcare & Research Experience</Text>
        <View style={styles.divider} />

        {/* Entry 1 */}
        <View style={styles.flexRow}>
          <View>
            <Text style={styles.sectionTitle}>Whitehead Biomedical Research Building</Text>
            <Text style={styles.role}>Lab Technician</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text>August 2019–Present</Text>
            <Text>Atlanta, GA</Text>
          </View>
        </View>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>• Perform experiments utilizing skills in PCR, gel electrophoresis, western blot, dissection, and autoclaving</Text>
          <Text style={styles.bulletItem}>• Prepare up to 15 buffers, bacterial cultures, and other solutions daily</Text>
          <Text style={styles.bulletItem}>• Gained an understanding of protein assays and inventory tracking in a lab setting</Text>
          <Text style={styles.bulletItem}>• Received training in OSHA and proper sterilization techniques</Text>
        </View>

        {/* Entry 2 */}
        <View style={styles.flexRow}>
          <View>
            <Text style={styles.sectionTitle}>Johnson Orthodontics</Text>
            <Text style={styles.role}>Health Assistant</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text>May 2019–August 2019</Text>
            <Text>Savannah, GA</Text>
          </View>
        </View>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>• Oversaw equipment sterilization and assisted with x-rays and filing</Text>
          <Text style={styles.bulletItem}>• Welcomed 50+ patients daily while maintaining professionalism</Text>
          <Text style={styles.bulletItem}>• Ensured compliance with OSHA guidelines and HIPAA standards</Text>
        </View>

        {/* Entry 3 */}
        <View style={styles.flexRow}>
          <View>
            <Text style={styles.sectionTitle}>Emory University</Text>
            <Text style={styles.role}>SIRE Researcher</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text>January–December 2017</Text>
            <Text>Atlanta, GA</Text>
          </View>
        </View>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>• Recruited 30 participants for a study on synesthesia and cross-modal correspondences</Text>
          <Text style={styles.bulletItem}>• Presented research at Emory SIRE Symposium and Society for Neuroscience Conference</Text>
        </View>
      </View>

      {/* Additional Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Additional Experience</Text>
        <View style={styles.divider} />
        <View style={styles.flexRow}>
          <View>
            <Text style={styles.sectionTitle}>Target</Text>
            <Text style={styles.role}>Sales Associate</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text>Summers 2016–2018</Text>
            <Text>Atlanta, GA</Text>
          </View>
        </View>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>• Led store opening/closing routines and trained 10+ new hires</Text>
          <Text style={styles.bulletItem}>• Earned promotion due to customer service performance</Text>
          <Text style={styles.bulletItem}>• Trained over 10 new hires on inventory management, maintaining the cash register and customer service</Text>
        </View>
      </View>

      {/* Leadership */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Leadership & Community Engagement</Text>
        <View style={styles.divider} />

        {[
          ["Pre-Health Mentoring Office,", "Peer Health Mentor", "January 2019–Present"],
          ["Alpha Epsilon Delta Pre-Health Honor Society,", "Member", "August 2018–Present"],
          ["Centro Latino,", "Advisory Board / Member", "September 2018–Present"],
          ["Emory Residence Life,", "Sophomore Advisor", "August 2018–May 2019"],
          ["Alternative Spring Break,", "Participant", "Spring 2018"],
        ].map(([org, role, date], i) => (
          <View key={i} style={styles.flexRow}>
            <View>
              <Text><Text style={styles.sectionTitle}>{org}</Text> <Text style={styles.role}>{role}</Text></Text>
            </View>
            <View style={styles.rightColumn}>
              <Text>{date}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Honors */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Honors & Awards</Text>
        <View style={styles.divider} />
        <Text>• PwC/Fran Weiss Scholarship - awarded due to community service and academic excellence</Text>
        <Text>• National Merit Scholar</Text>
        <Text>• Eagle Scout (May 2017)</Text>
      </View>
    </Page>
  </Document>
);

export default HealthResume;
