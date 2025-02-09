import React, { useState, useRef } from "react";
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Alert } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { createProperty } from '../src/graphql/mutations';

export default function PropertyDetailsScreen({ navigation }) {
  const [formData, setFormData] = useState({
    property_name: "",
    house_number: "",
    city: "",
    region: "",
    postcode: "",
    country: "",
    owner_name: "",
    owner_phone: "",
  });

  // Refs for navigation between input fields
  const houseNumberRef = useRef();
  const cityRef = useRef();
  const regionRef = useRef();
  const postcodeRef = useRef();
  const countryRef = useRef();
  const ownerNameRef = useRef();
  const ownerPhoneRef = useRef();

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const saveProperty = async () => {
    try {
      await API.graphql(
        graphqlOperation(createProperty, { input: formData })
      );
      Alert.alert("Success", "Property details saved successfully!");
      setFormData({
        property_name: "",
        house_number: "",
        city: "",
        region: "",
        postcode: "",
        country: "",
        owner_name: "",
        owner_phone: "",
      });
    } catch (error) {
      console.error("Error saving property details: ", error);
      Alert.alert("Error", "Failed to save property details.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Property Details</Text>

      <Text style={styles.label}>Name of the Property</Text>
      <TextInput
        style={styles.input}
        value={formData.property_name}
        onChangeText={(text) => handleInputChange("property_name", text)}
        returnKeyType="next"
        onSubmitEditing={() => houseNumberRef.current.focus()}
      />

      <Text style={styles.label}>House No., Building Name</Text>
      <TextInput
        style={styles.input}
        value={formData.house_number}
        onChangeText={(text) => handleInputChange("house_number", text)}
        ref={houseNumberRef}
        returnKeyType="next"
        onSubmitEditing={() => cityRef.current.focus()}
      />

      <Text style={styles.label}>City</Text>
      <TextInput
        style={styles.input}
        value={formData.city}
        onChangeText={(text) => handleInputChange("city", text)}
        ref={cityRef}
        returnKeyType="next"
        onSubmitEditing={() => regionRef.current.focus()}
      />

      <Text style={styles.label}>Region</Text>
      <TextInput
        style={styles.input}
        value={formData.region}
        onChangeText={(text) => handleInputChange("region", text)}
        ref={regionRef}
        returnKeyType="next"
        onSubmitEditing={() => postcodeRef.current.focus()}
      />

      <Text style={styles.label}>Postcode</Text>
      <TextInput
        style={styles.input}
        value={formData.postcode}
        onChangeText={(text) => handleInputChange("postcode", text)}
        ref={postcodeRef}
        returnKeyType="next"
        onSubmitEditing={() => countryRef.current.focus()}
      />

      <Text style={styles.label}>Country</Text>
      <TextInput
        style={styles.input}
        value={formData.country}
        onChangeText={(text) => handleInputChange("country", text)}
        ref={countryRef}
        returnKeyType="next"
        onSubmitEditing={() => ownerNameRef.current.focus()}
      />

      <Text style={styles.label}>Owner Name</Text>
      <TextInput
        style={styles.input}
        value={formData.owner_name}
        onChangeText={(text) => handleInputChange("owner_name", text)}
        ref={ownerNameRef}
        returnKeyType="next"
        onSubmitEditing={() => ownerPhoneRef.current.focus()}
      />

      <Text style={styles.label}>Phone No.</Text>
      <TextInput
        style={styles.input}
        value={formData.owner_phone}
        onChangeText={(text) => handleInputChange("owner_phone", text)}
        ref={ownerPhoneRef}
        keyboardType="phone-pad"
        returnKeyType="done"
      />

      <Button title="Add to My Tenancy" onPress={saveProperty} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});
