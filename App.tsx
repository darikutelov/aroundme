import { StatusBar } from "expo-status-bar"
import { Provider as PaperProvider } from "react-native-paper"

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  NavigationContainer
} from "@react-navigation/native"

import {
  useFonts as useFontOlswald,
  Oswald_400Regular
} from "@expo-google-fonts/oswald"
import {
  useFonts as useFontLato,
  Lato_400Regular,
  Lato_700Bold
} from "@expo-google-fonts/lato"

import { useColorScheme } from "@/src/hooks/useColorScheme"
import { MD3DarkThemeCustomized, MD3LightThemeCustomized } from "@/src/theme"
import TabBar from "./src/components/tabbar/tabbar.component"
import { PlacesContextProvider } from "./src/services/places/places.context"
import { LocationContextProvider } from "./src/services/location/location.context"

export default function App() {
  const colorScheme = useColorScheme()
  const isDark = colorScheme === "dark"

  const [oswaldLoaded] = useFontOlswald({
    Oswald_400Regular
  })

  const [latoLoaded] = useFontLato({
    Lato_400Regular,
    Lato_700Bold
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }
  return (
    <>
      <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
        <PaperProvider
          theme={isDark ? MD3DarkThemeCustomized : MD3LightThemeCustomized}
        >
          <LocationContextProvider>
            <PlacesContextProvider>
              <NavigationContainer>
                <TabBar />
              </NavigationContainer>
            </PlacesContextProvider>
          </LocationContextProvider>
        </PaperProvider>
      </ThemeProvider>
      <StatusBar style='auto' />
    </>
  )
}
