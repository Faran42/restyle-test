import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@shopify/restyle";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { Home } from "./src/screens/Home";
import { theme } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        {fontsLoaded && <Home />}
      </ThemeProvider>
    </>
  );
}
