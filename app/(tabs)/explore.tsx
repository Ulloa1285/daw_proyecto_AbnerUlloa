import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { useState } from "react";

const products = [
  { id: "1", name: "Laptop" },
  { id: "2", name: "Mouse" },
  { id: "3", name: "Teclado" },
  { id: "4", name: "Monitor 24\"" },
  { id: "5", name: "Auriculares Bluetooth" },
  { id: "6", name: "Silla Gamer" },
  { id: "7", name: "Smartphone" },
  { id: "8", name: "Smartwatch" },
  { id: "9", name: "Cámara Réflex" },
  { id: "10", name: "Micrófono USB" },
  { id: "11", name: "Tablet 10\"" },
  { id: "12", name: "Disco Duro Externo 2TB" },
  { id: "13", name: "Router Wi-Fi 6" },
];

import { useTheme } from "../context/ThemeContext";

export default function ExploreScreen() {
  const [search, setSearch] = useState("");
  const { colors, fonts } = useTheme();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TextInput
        placeholder="Buscar producto..."
        placeholderTextColor={colors.textSecondary}
        style={[styles.input, { backgroundColor: colors.surfaceSecondary, color: colors.text, fontSize: fonts.base }]}
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.item, { backgroundColor: colors.surface }]}>
            <Text style={{ color: colors.text, fontSize: fonts.base }}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    backgroundColor: "#f1f5f9",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  item: {
    padding: 15,
    backgroundColor: "#e5e7eb",
    borderRadius: 10,
    marginBottom: 10,
  },
});
