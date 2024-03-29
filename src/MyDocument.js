import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import MyTimeout from "./MyTimeout";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = (props) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <MyTimeout />
      </View>
      <View style={styles.section}>
        <Text>Props.Time {props.timeout}</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
