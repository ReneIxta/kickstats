import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Roster">;

import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Player } from "../models";

export default function RosterScreen({ navigation }: Props) {
  // Temporary mock data (until we connect SQLite)
  const [players, setPlayers] = useState<Player[]>([
    {
      id: "1",
      name: "Alex Garcia",
      jerseyNumber: 10,
      position: "Midfielder",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      name: "Jordan Smith",
      jerseyNumber: 7,
      position: "Forward",
      createdAt: new Date().toISOString(),
    },
  ]);

  const renderPlayer = ({ item }: { item: Player }) => (
    <View style={styles.playerCard}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>
        #{item.jerseyNumber} • {item.position}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={renderPlayer}
        ListEmptyComponent={<Text>No players yet</Text>}
      />

<TouchableOpacity
  style={styles.addButton}
  onPress={() => navigation.navigate("AddPlayer")}
>
  <Text style={styles.addButtonText}>+ Add Player</Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  playerCard: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  details: {
    marginTop: 4,
    color: "#666",
  },
  addButton: {
    backgroundColor: "#2e7d32",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
