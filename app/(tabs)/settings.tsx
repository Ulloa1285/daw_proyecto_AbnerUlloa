import { View, Text, StyleSheet, Switch, Pressable } from "react-native";
import { useTheme, FontSize, ImageSize, ThemeType } from "../context/ThemeContext";

export default function SettingsScreen() {
  const { theme, fontSize, imageSize, setTheme, setFontSize, setImageSize, colors, fonts } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text, fontSize: fonts.title }]}>
        Configuración
      </Text>

      {/* TEMA */}
      <View style={[styles.section, { backgroundColor: colors.surface }]}>
        <Text style={[styles.label, { color: colors.text }]}>Modo Oscuro</Text>
        <Switch
          value={theme === "dark"}
          onValueChange={(val) => setTheme(val ? "dark" : "light")}
        />
      </View>

      {/* TAMAÑO DE LETRA */}
      <View style={[styles.section, { backgroundColor: colors.surface, flexDirection: 'column', alignItems: 'flex-start' }]}>
        <Text style={[styles.label, { color: colors.text, marginBottom: 10 }]}>Tamaño de Letras</Text>
        <View style={styles.buttonRow}>
          {(['small', 'medium', 'large'] as FontSize[]).map((size) => (
            <Pressable
              key={size}
              style={[
                styles.button,
                { backgroundColor: fontSize === size ? colors.primary : colors.surfaceSecondary }
              ]}
              onPress={() => setFontSize(size)}
            >
              <Text style={{ color: fontSize === size ? '#fff' : colors.text }}>
                {size === 'small' ? 'Pequeño' : size === 'medium' ? 'Medio' : 'Grande'}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* TAMAÑO DE IMAGENES */}
      <View style={[styles.section, { backgroundColor: colors.surface, flexDirection: 'column', alignItems: 'flex-start' }]}>
        <Text style={[styles.label, { color: colors.text, marginBottom: 10 }]}>Tamaño de Imágenes</Text>
        <View style={styles.buttonRow}>
          {(['small', 'medium', 'large'] as ImageSize[]).map((size) => (
            <Pressable
              key={size}
              style={[
                styles.button,
                { backgroundColor: imageSize === size ? colors.primary : colors.surfaceSecondary }
              ]}
              onPress={() => setImageSize(size)}
            >
              <Text style={{ color: imageSize === size ? '#fff' : colors.text }}>
                {size === 'small' ? 'Pequeño' : size === 'medium' ? 'Medio' : 'Grande'}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
});
