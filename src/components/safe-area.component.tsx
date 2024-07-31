import { ReactNode } from "react"
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import { useColorScheme } from "@/src/hooks/useColorScheme"
import { theme } from "@/src/theme"

type Props = {
  children: ReactNode
}

export const SafeArea = ({ children }: Props) => {
  const isDark = useColorScheme() === "dark"

  return (
    <SafeAreaView style={styles(isDark).container}>{children}</SafeAreaView>
  )
}

const styles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: isDark
        ? theme.colors.dark.secondarySystemBackground
        : theme.colors.light.secondarySystemBackground
    }
  })
