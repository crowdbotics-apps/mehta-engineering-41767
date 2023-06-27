import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled8 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.qFXCXpTL}><ImageBackground style={styles.gixEwkqs} source={require("./qr_00g6rMbnX51zgQU8ww.png")} resizeMode="cover"></ImageBackground><Text style={styles.xkpVkwVN}>{"https://buy.stripe.com/00g6rMbnX51zgQU8ww"}</Text></View>
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
  gixEwkqs: {
    width: 228,
    height: 196,
    position: "absolute",
    left: 87.5,
    top: 315
  },
  xkpVkwVN: {
    width: 338,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 20,
    top: 155
  }
});
export default Untitled8;