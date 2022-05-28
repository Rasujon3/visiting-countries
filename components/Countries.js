import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [searched, setSearched] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSearched(data);
        setCountries(data);
      });
  }, []);
  const handleSearch = (text) => {
    const filtered = countries.filter((country) =>
      country.name.common.includes(text)
    );
    setSearched(filtered);
  };
  return (
    <ScrollView>
      <View>
        <Text style={styles.header}>Visiting Countries: {searched.length}</Text>
        <TextInput onChangeText={handleSearch} style={styles.input}></TextInput>
        {searched.map((country) => (
          <Country key={country.ccn3} country={country} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    fontSize: 40,
    color: "red",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
