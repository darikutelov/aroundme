import { StyleSheet } from "react-native"
import { ThemedView } from "../ThemedView"
import { theme } from "@/src/theme"

type Position = "Top" | "Bottom" | "Left" | "Right"

type Props = {
  size: "small" | "medium" | "large" | "xl" | "xxl"
  position: Position
}

const sizeMap = {
  small: 1,
  medium: 2,
  large: 3,
  xl: 4,
  xxl: 5
}

export function Spacer({ size, position }: Props) {
  const sizeIndex = sizeMap[size]
  return <ThemedView style={styles({ position, sizeIndex }).spacer} />
}

const styles = ({
  position,
  sizeIndex
}: {
  position: Position
  sizeIndex: number
}) =>
  StyleSheet.create({
    spacer: {
      [`padding${position}`]: theme.space[sizeIndex]
    }
  })
