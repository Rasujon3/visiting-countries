import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Country({ country }) {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Country: {country.name.common}</Text>
      <Image
        source={{
          uri: country.flags.png,
        }}
        style={{ height: 200, width: 200 }}
      ></Image>
    </View>
  );
}
