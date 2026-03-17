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
  {
    id: "4",
    name: "Monitor 24\"",
    price: "$150",
    image: { uri: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop" },
    description: "Monitor Full HD ideal para productividad.",
  },
  {
    id: "5",
    name: "Auriculares Bluetooth",
    price: "$85",
    image: { uri: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" },
    description: "Sonido envolvente con cancelación de ruido.",
  },
  {
    id: "6",
    name: "Silla Gamer",
    price: "$200",
    image: { uri: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=400&fit=crop" },
    description: "Silla ergonómica para largas sesiones.",
  },
  {
    id: "7",
    name: "Smartphone",
    price: "$800",
    image: { uri: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop" },
    description: "Teléfono inteligente de última generación.",
  },
  {
    id: "8",
    name: "Smartwatch",
    price: "$250",
    image: { uri: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" },
    description: "Reloj inteligente con monitor de salud.",
  },
  {
    id: "9",
    name: "Cámara Réflex",
    price: "$550",
    image: { uri: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop" },
    description: "Cámara profesional para fotografía de alta calidad.",
  },
  {
    id: "10",
    name: "Micrófono USB",
    price: "$120",
    image: { uri: "https://images.unsplash.com/photo-1590602847861-f35f18d1debf?w=400&h=400&fit=crop" },
    description: "Micrófono de condensador para podcast y streaming.",
  },
  {
    id: "11",
    name: "Tablet 10\"",
    price: "$300",
    image: { uri: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop" },
    description: "Tablet ligera y potente para entretenimiento.",
  },
  {
    id: "12",
    name: "Disco Duro Externo 2TB",
    price: "$90",
    image: { uri: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&h=400&fit=crop" },
    description: "Almacenamiento portátil de gran capacidad.",
  },
  {
    id: "13",
    name: "Router Wi-Fi 6",
    price: "$110",
    image: { uri: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=400&fit=crop" },
    description: "Router de alta velocidad y amplio alcance.",
  },
];

import { useTheme } from "../context/ThemeContext";

export default function ProductsScreen() {
  const { colors, fonts, images } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.card, { backgroundColor: colors.surface }]}
            onPress={() => router.push(`/products/${item.id}`)}
          >
            <Image 
              source={item.image} 
              style={[
                styles.image, 
                { width: images.width, height: images.height, borderRadius: images.borderRadius }
              ]} 
            />
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={[styles.name, { color: colors.text, fontSize: fonts.header }]}>{item.name}</Text>
              <Text style={{ color: colors.textSecondary, fontSize: fonts.base, marginTop: 4 }}>{item.price}</Text>
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

