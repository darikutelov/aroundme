import { StyleSheet } from "react-native"
import { Svg, Image as ImageSvg } from "react-native-svg"
import { Place } from "@/src/models/place/place"
import { ThemedText } from "../ThemedText"
import { ThemedView } from "../ThemedView"
import { theme } from "@/src/theme"

type Props = {
  place: Place
}

export const CompactPlaceInfo = ({ place }: Props) => {
  return (
    <ThemedView style={styles.container}>
      <Svg width={120} height={100} style={styles.image}>
        <ImageSvg
          width={"100%"}
          height={"100%"}
          preserveAspectRatio='xMidYMid slice'
          href={{ uri: place.imageUrl }}
        />
      </Svg>
      <ThemedText
        type='caption'
        numberOfLines={2}
        ellipsizeMode='tail'
        style={styles.text}
      >
        {place.name}
      </ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: theme.space[2],
    maxWidth: 136,
    alignItems: "center",
    borderRadius: theme.space[2],
    overflow: "hidden"
  },
  image: {
    borderRadius: theme.space[2],
    overflow: "hidden"
  },
  text: {
    textAlign: "center",
    paddingTop: theme.space[2]
  }
})
