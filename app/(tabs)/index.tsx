import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Catálogo de Productos</Text>
      <Text style={styles.subtitle}>
        Bienvenido, explora y revisa nuestros productos disponibles.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Productos disponibles</Text>
        <Text style={styles.cardValue}>3</Text>
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
