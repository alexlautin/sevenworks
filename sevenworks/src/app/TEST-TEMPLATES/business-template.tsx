import React from "react";
import { TemplateProps } from "../editor/types";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 40,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 5,
  },
  contactInfo: {
    fontSize: 12,
    marginTop: 10,
    lineHeight: 1.5,
  },
  content: {
    fontSize: 12,
    lineHeight: 1.5,
  },
});

export default function BusinessTemplate({ formData }: TemplateProps) {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {formData?.firstName || "FIRST"} {formData?.middleName || "MIDDLE"} {formData?.lastName || "LAST"}
          </Text>
          <View style={styles.contactInfo}>
            <Text>Email: {formData?.email || "email@email.com"}</Text>
            <Text>Phone: {formData?.phone || "(111) 111-1111"}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text>
            {formData?.content || "No content provided."}
          </Text>
        </View>
      </Page>
    </Document>
  );
};