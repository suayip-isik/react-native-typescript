import React, { useState } from "react";
import { SafeAreaView, Text, } from "react-native";
import Fonts from "../styles/Fonts";
import Colors from "../styles/Colors";
import BusinessCard from "../components/BusinessCard";

const App: React.FC = () => {
  const [name, setName] = useState("Şuayip");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{
        fontFamily: Fonts.defaultRegularFontFamily,
        color: Colors.defaultDarkColor
      }}>Selamm</Text>
      <BusinessCard
        name={name}
        title="Software Developer"
        phone="000"
        email=""
        getName={() => console.log(name)} />
    </SafeAreaView>
  )
}

export default App;