import { View, Text, FlatList, StyleSheet, Pressable, Image } from "react-native";
import { router } from "expo-router";

const products = [
  {
    id: "1",
    name: "Laptop",
    price: "$1200",
    image: require("../../assets/images/laptop.jpg"),
    description: "Laptop potente para trabajo y estudio.",
  },
  {
    id: "2",
    name: "Mouse",
    price: "$25",
    image: require("../../assets/images/mouse.jpeg"),
    description: "Mouse ergonómico y preciso.",
  },
  {
    id: "3",
    name: "Teclado",
    price: "$60",
    image: require("../../assets/images/teclado.jpeg"),
    description: "Teclado mecánico retroiluminado.",
  },
];

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => router.push(`/products/${item.id}`)}
          >
            <Image source={item.image} style={styles.image} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    flexDirection: "row",
    gap: 15,
    padding: 15,
    backgroundColor: "#f1f5f9",
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

