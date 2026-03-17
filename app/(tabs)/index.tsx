import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function HomeScreen() {
  const { colors, fonts } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text, fontSize: fonts.title }]}>
        📦 Catálogo de Productos
      </Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary, fontSize: fonts.base }]}>
        Bienvenido, explora y revisa nuestros productos disponibles.
      </Text>

      <View style={[styles.card, { backgroundColor: colors.surface }]}>
        <Text style={[styles.cardTitle, { color: colors.textSecondary, fontSize: fonts.base }]}>
          Productos disponibles
        </Text>
        <Text style={[styles.cardValue, { color: colors.text, fontSize: fonts.value }]}>
          13
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#f1f5f9",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    color: "#334155",
  },
  cardValue: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 5,
  },
});
