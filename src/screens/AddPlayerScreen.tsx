import { addPlayer } from "../storage/playerStorage";
import * as Crypto from 'expo-crypto';
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "AddPlayer">;

export default function AddPlayerScreen({ navigation }: Props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");

  const handleSave = () => {
    if (!name || !number || !position) {
      return;
    }
    const id = Crypto.randomUUID();

    addPlayer({
      id,
      name,
      jerseyNumber: parseInt(number),
      position: position as any,
      createdAt: ""
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Player name"
        value={name}
        onChangeText={setName}
      />

      <Text>Jersey Number</Text>
      <TextInput
        style={styles.input}
        placeholder="10"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <Text>Position</Text>
      <TextInput
        style={styles.input}
        placeholder="Midfielder"
        value={position}
        onChangeText={setPosition}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Player</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 6,
  },
  button: {
    backgroundColor: "#2e7d32",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: "white", fontWeight: "600", fontSize: 16 },
});
