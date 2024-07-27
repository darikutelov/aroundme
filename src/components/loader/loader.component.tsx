import { useThemeColor } from "@/src/hooks/useThemeColor"
import { View, StyleSheet } from "react-native"
import { ActivityIndicator } from "react-native-paper"

type Props = {
  size?: "small" | "large" | number
  color?: string
}

export function Loader({ size = "small", color }: Props) {
  const loaderColor = color ?? useThemeColor({}, "text")
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size={size} color={loaderColor} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
