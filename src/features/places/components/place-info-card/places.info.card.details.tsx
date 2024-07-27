import { StyleSheet, Image } from "react-native"
import { SvgXml } from "react-native-svg"

import { ThemedText } from "@/src/components/ThemedText"
import { ThemedView } from "@/src/components/ThemedView"
import { Spacer } from "@/src/components/spacer/spacer.component"
import { theme } from "@/src/theme"

import { star } from "@/assets/images/star"
import { open } from "@/assets/images/open"
import { useThemeColor } from "@/src/hooks/useThemeColor"

type Props = {
  icon: string
  isOpenNow: boolean
  rating: number
  isClosedTemporarily: boolean
}

export default function PlacesInfoCardDetails({
  rating,
  isClosedTemporarily,
  isOpenNow,
  icon
}: Props) {
  const ratingArray = Array.from(new Array(Math.round(rating)))

  const errorColor = useThemeColor({}, "error")
  return (
    <ThemedView style={styles.section}>
      <ThemedView style={styles.rating}>
        {ratingArray.map((_, index) => (
          <SvgXml
            key={`star-${index}`}
            xml={star}
            width={theme.space[3]}
            height={theme.space[3]}
          />
        ))}
      </ThemedView>
      <ThemedText style={styles.icons}>
        {isClosedTemporarily && (
          <ThemedText style={{ color: errorColor }}>
            CLOSED TEMPORARILY
          </ThemedText>
        )}
        <Spacer size='large' position='Right' />
        {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
        <Spacer size='large' position='Right' />
        <Image source={{ uri: icon }} style={{ width: 20, height: 20 }} />
      </ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row"
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.space[1],
    paddingBottom: theme.space[1]
  },
  icons: {
    flexDirection: "row",
    alignItems: "center"
  },
  spacer: {
    paddingLeft: theme.space[2]
  }
})
