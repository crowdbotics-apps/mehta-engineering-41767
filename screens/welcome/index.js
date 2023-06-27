import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, SafeAreaView, Image } from "react-native";

const AboutTheAppScreen = () => {
  const navigation = useNavigation();
  const [ImageSource, setImageSource] = useState();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  useEffect(() => {
    setText1("I understand that uses my dolor sit amet, consectetur adipiscing elit. Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam. Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia elit est libero sed. Commodo viverra et, neque augue augue mauris, nunc ut nec.");
    setText2("I understand that uses my dolor sit amet, consectetur adipiscing elit. Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam. Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia elit est libero sed. Commodo viverra et, neque augue augue mauris, nunc ut nec.");
    setImageSource(require("./assets/Frame21.png"));
  }, []);
  return <SafeAreaView style={styles.container}>
      <View style={styles.imgScroller}>
        <Image source={ImageSource} />
        <Image style={styles.threeDots} source={require("./assets/3Dots.png")} />
      </View>
      <View style={styles.textContainer}></View>
      <View style={styles.ypUtWRFy}>
        <Text style={styles.RAqsYivI}>{"\n          {\"Welcome to the Mehta Engineering App! This is where you can make all payments for rent and fees.\"}\n        "}</Text>
        <ImageBackground style={styles.DPpEmgzX} source={require("./mehta_logo1.jpg")} resizeMode="cover"></ImageBackground>
        <Pressable onPress={() => {
        navigation.navigate("Untitled14");
      }}>
          <View style={styles.pLosKTHA}></View>
        </Pressable>
        <Text style={styles.nuhQMktJ}>{"Make a Payment!"}</Text>
      <ImageBackground style={styles.fTzwqmYh} source={require("./mehta2.png")} resizeMode="cover"></ImageBackground></View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#ffffff"
  },
  imgScroller: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },
  threeDots: {
    marginTop: 20
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
    left: 30,
    top: 200,
    textAlign: "left",
    fontFamily: "Crimson Text",
    color: "#3b0a0a"
  },
  DPpEmgzX: {
    width: 311,
    height: 176,
    position: "absolute",
    left: 22.5,
    top: 17
  },
  pLosKTHA: {
    height: 44,
    width: 214,
    backgroundColor: "#ffffff",
    borderRadius: 21,
    color: "#777777",
    position: "absolute",
    left: 71,
    top: 462,
    borderWidth: 4,
    borderColor: "#3e1c1c",
    opacity: 1
  },
  nuhQMktJ: {
    width: 161,
    height: 50,
    lineHeight: 14,
    fontSize: 20,
    borderRadius: 0,
    color: "#3e1c1c",
    textAlign: "center",
    position: "absolute",
    left: 97.5,
    top: 475
  },
  fTzwqmYh: {
    width: 353,
    height: 133,
    position: "absolute",
    left: 0,
    top: 292
  }
});
export default AboutTheAppScreen;