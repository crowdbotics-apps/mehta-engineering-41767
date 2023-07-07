import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, Webview } from "react-native";

const Untitled8 = () => {
  const linkdestination = "https://buy.stripe.com/00g6rMbnX51zgQU8ww";
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.qFXCXpTL}></View>
        <View style={styles.igCMmXva}>
          <Webview source={{
          uri: "https://buy.stripe.com/00g6rMbnX51zgQU8ww"
        }} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#000000"
  },
  qFXCXpTL: {
    height: 631,
    width: 403,
    backgroundColor: "#ffffff",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: -4,
    top: 1
  },
  igCMmXva: {
    flex: 1
  }
});
export default Untitled8;