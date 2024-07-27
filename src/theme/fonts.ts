export type Fonts = typeof fonts
export type FontsWeight = typeof fontWeights
export type FontsSize = typeof fontSizes

export const fonts = {
  body: "Oswald_400Regular",
  heading: "Lato_400Regular",
  monospace: "Oswald_400Regular"
}

type FontsWeights = {
  [key: string]: "400" | "500" | "700"
}

export const fontWeights: FontsWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
}

export const fontSizes = {
  caption: 12,
  button: 14,
  body: 16,
  title: 20,
  h5: 24,
  h4: 34,
  h3: 45,
  h2: 56,
  h1: 112
}
