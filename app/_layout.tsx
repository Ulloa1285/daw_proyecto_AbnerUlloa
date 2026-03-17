import { Stack as ExpoStack } from "expo-router";
import { ThemeProvider } from "./context/ThemeContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ExpoStack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
