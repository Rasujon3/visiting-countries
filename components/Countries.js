import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <View>
      <Text>Visiting Countries: {countries.length}</Text>
      <ScrollView>
        {countries.map((country) => (
          <Country key={country.ccn3} country={country} />
        ))}
      </ScrollView>
    </View>
  );
}
