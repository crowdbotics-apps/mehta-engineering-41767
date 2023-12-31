import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";

const AboutTheAppScreen = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  useEffect(() => {
    setText1("I understand that uses my dolor sit amet, consectetur adipiscing elit. Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam. Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia elit est libero sed. Commodo viverra et, neque augue augue mauris, nunc ut nec.");
    setText2("I understand that uses my dolor sit amet, consectetur adipiscing elit. Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam. Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia elit est libero sed. Commodo viverra et, neque augue augue mauris, nunc ut nec.");
  }, []);
  return <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}></View>
      <View style={styles.ypUtWRFy}>
        <Text style={styles.RAqsYivI}>
          {'          "Welcome to the Mehta Engineering App! This is where you can make all payments for rent and fees."'}
        </Text>
        <ImageBackground style={styles.DPpEmgzX} source={require("./mehta_logo1.png")} resizeMode="cover"></ImageBackground>
        <Pressable onPress={() => {}}>
          <View style={styles.pLosKTHA}></View>
        </Pressable>
        <Text style={styles.nuhQMktJ}>{"Make a Payment!"}</Text>
        <ImageBackground style={styles.fTzwqmYh} source={require("./mehta2.png")} resizeMode="cover"></ImageBackground>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#ffffff"
  },
  textContainer: {
    paddingHorizontal: 20
  },
  ypUtWRFy: {
    height: 636,
    width: 356,
    backgroundColor: "#ffffff",
    borderRadius: 0,
    color: "#777777"
  },
  RAqsYivI: {
    width: 239,
    height: 80,
    lineHeight: 26,
    fontSize: 17,
    borderRadius: 0,
    position: "absolute",
    left: 54,
    top: 233,
    textAlign: "left",
    fontFamily: "Crimson Text",
    color: "#3b0a0a"
  },
  DPpEmgzX: {
    width: 426,
    height: 293,
    position: "absolute",
    left: -33,
    top: 2
  },
  pLosKTHA: {
    height: 44,
    width: 214,
    backgroundColor: "#ffffff",
    borderRadius: 21,
    color: "#777777",
    position: "absolute",
    left: 67,
    top: 544,
    borderWidth: 4,
    borderColor: "#3e1c1c",
    opacity: 1
  },
  nuhQMktJ: {
    width: 161,
    height: 20,
    lineHeight: 14,
    fontSize: 20,
    borderRadius: 0,
    color: "#3e1c1c",
    textAlign: "center",
    position: "absolute",
    left: 97.5,
    top: 557
  },
  fTzwqmYh: {
    width: 474,
    height: 244,
    position: "absolute",
    left: -60,
    top: 254
  }
});
export default AboutTheAppScreen;