import { colors } from "./colors"
import { space, lineHeights } from "./spacing"
import { sizes } from "./sizes"
import { fonts, fontWeights, fontSizes } from "./fonts"
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper"

export type Theme = typeof theme

export const theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights
}

export const MD3LightThemeCustomized = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    elevation: {
      ...MD3LightTheme.colors.elevation,
      level3: theme.colors.light.background
    }
  }
}

export const MD3DarkThemeCustomized = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    elevation: {
      ...MD3DarkTheme.colors.elevation,
      level3: theme.colors.dark.background
    }
  }
}
