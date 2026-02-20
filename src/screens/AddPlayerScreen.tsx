import { Picker } from '@react-native-picker/picker';
import { POSITIONS } from '../constants/positions';
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

  const [error, setError] = useState("");

const handleSavePlayer = () => {
  if (!name.trim()) {
    setError("Player name is required");
    return;
  }

  if (!number.trim()) {
    setError("Jersey number is required");
    return;
  }

  const parsedNumber = Number(number);
  if (isNaN(parsedNumber) || parsedNumber <= 0) {
    setError("Jersey number must be a valid number");
    return;
  }

  if (!position) {
    setError("Please select a position");
    return;
  }

  setError("");

  const id = Crypto.randomUUID();

  addPlayer({
    id,
    name: name.trim(),
    jerseyNumber: parsedNumber,
    position,
    createdAt: new Date().toISOString(),
  });
  navigation.goBack();
};

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Player name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Jersey Number</Text>
      <TextInput
        style={styles.input}
        placeholder="10"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <Text style={styles.label}>Position</Text>
      <Picker
        selectedValue={position}
        onValueChange={(itemValue) => setPosition(itemValue)}
      >
      <Picker.Item label="Select Position..." value="" enabled={false} />
        {POSITIONS.map((pos) => (
          <Picker.Item key={pos} label={pos} value={pos} />
        ))}
      </Picker>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSavePlayer}>
        <Text style={styles.buttonText}>Save Player</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
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
  error: { color: "red", marginTop: 8, marginBottom: 8 },
});
