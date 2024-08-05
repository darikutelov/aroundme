import { StyleSheet } from "react-native"
import { Card } from "react-native-paper"

import { Place } from "@/src/models/place/place"
import { ThemedText } from "@/src/components/ThemedText"
import { theme } from "@/src/theme"
import { useThemeColor } from "@/src/hooks/useThemeColor"
import { ThemedView } from "@/src/components/ThemedView"
import { PlacesInfoCardDetails } from "./places.info.card.details"
import { FavouriteIcon } from "@/src/components/favourites/favourite.component"

type Props = {
  place: Place
}

export const PlaceInfoCard = ({ place }: Props) => {
  const {
    name,
    icon,
    photos,
    imageUrl,
    address,
    openningHours,
    isOpenNow,
    rating,
    isClosedTemporarily
  } = place

  const backgroundColor = useThemeColor({}, "background")

  return (
    <Card mode='contained' style={styles.card}>
      <ThemedView style={styles.cardInner}>
        {/* Favourite Icon */}
        <FavouriteIcon place={place} />
        {/* Place Image */}
        <Card.Cover
          source={{
            uri: imageUrl
          }}
          style={{ backgroundColor, ...styles.image }}
        />
        <ThemedView style={styles.section}>
          {/* Place Title */}
          <ThemedText type='title'>{name}</ThemedText>

          {/* Place Rating, Closed Temporarily, Open Now, Icon */}
          <PlacesInfoCardDetails
            rating={rating ?? 0}
            isClosedTemporarily={isClosedTemporarily ?? false}
            isOpenNow={isOpenNow ?? false}
            icon={icon ?? ""}
          />

          {/* Place Address */}
          <ThemedText>{address}</ThemedText>
        </ThemedView>
      </ThemedView>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.space[2],
    marginBottom: theme.space[3]
  },
  cardInner: {
    overflow: "hidden",
    borderRadius: theme.space[2]
  },
  image: {
    padding: theme.space[3],
    paddingBottom: theme.space[0],
    borderRadius: theme.space[2]
  },
  section: {
    padding: theme.space[3]
  }
})
