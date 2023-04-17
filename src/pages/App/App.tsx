import React, { useState } from "react";
import { SafeAreaView, Text, } from "react-native";
import Fonts from "../../styles/Fonts";
import Colors from "../../styles/Colors";
import BusinessCard from "../../components/BusinessCard";
import styles from "./App.style";
import Header from "../../components/Header";

const App: React.FC = () => {
  const [name, setName] = useState("Şuayip");

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={{
        fontFamily: Fonts.defaultRegularFontFamily,
        color: Colors.defaultDarkColor
      }}>Selamm</Text>
      <BusinessCard
        name={name}
        title="Software Developer"
        phone="000"
        email=""
        getName={() => console.log(name)} /> */}
      <Header title="Başlık" />
    </SafeAreaView>
  )
}

export default App;