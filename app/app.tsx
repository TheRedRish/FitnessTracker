import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

interface UserProfile {
  name: string;
  age: number;
  weight: number;
  height: number;
}

const App = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    age: 0,
    weight: 65,
    height: 0,
  });

  const [newWeight, setNewWeight] = useState<number>(userProfile.weight);
  const [textValue, setTextValue] = useState<string>("");

  // test function, placeholder
  function nothing(){
    var x = 0;
  }

  // Fetch user profile on app load
  useEffect(() => {
    // Fetch data from a file
    GetUser(69);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness & Wellness Tracker</Text>

      <Text style={styles.label}>Name: {userProfile.name}</Text>
      <Text style={styles.label}>Age: {userProfile.age}</Text>
      <Text style={styles.label}>Weight: {newWeight} kg</Text>
      <Text style={styles.label}>Height: {userProfile.height} cm</Text>

      <TextInput
        id="weightUpdate"
        style={styles.input}
        value={textValue}
        placeholder="Update weight"
        keyboardType="numeric"
        onChangeText={setTextValue}
      />
      <Button title="Update Weight" onPress={() => {
        setNewWeight(Number.parseFloat(textValue));
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    paddingLeft: 10,
    marginBottom: 20,
  },
});

export type { UserProfile as MyUserProfile }
export default App;