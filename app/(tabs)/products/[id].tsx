import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

const products = [
  {
    id: "1",
    name: "Laptop",
    price: "$1200",
    image: require("../../../assets/images/laptop.jpg"),
    description: "Laptop potente para trabajo y estudio.",
  },
  {
    id: "2",
    name: "Mouse",
    price: "$25",
    image: require("../../../assets/images/mouse.jpeg"),
    description: "Mouse ergonómico y preciso.",
  },
  {
    id: "3",
    name: "Teclado",
    price: "$60",
    image: require("../../../assets/images/teclado.jpeg"),
    description: "Teclado mecánico retroiluminado.",
  },
];

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Producto no encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={product.image} style={styles.image} />

      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>

      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    color: "#16a34a",
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: "#374151",
    marginTop: 10,
  },
});
