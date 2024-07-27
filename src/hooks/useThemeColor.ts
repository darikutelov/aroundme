/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from "react-native"

import { theme as AppTheme } from "@/src/theme"

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof AppTheme.colors.light &
    keyof typeof AppTheme.colors.dark
) {
  const theme = useColorScheme() ?? "light"
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return AppTheme.colors[theme][colorName]
  }
}
