import { StyleSheet, ScrollView, TouchableOpacity, View } from "react-native"
import { theme } from "@/src/theme"
import { CompactPlaceInfo } from "../places/compact-place-info.component"
import { Place } from "@/src/models/place/place"
import { ThemedText } from "../ThemedText"
import { Spacer } from "../spacer/spacer.component"

type Props = {
  favourites: Place[]
  onNavigate: (screen: string, params?: any) => void
}

export const FavouritesBar = ({ favourites, onNavigate }: Props) => {
  if (!favourites.length) {
    return null
  }
  return (
    <View>
      <View style={styles.title}>
        <ThemedText type='title'>Favourites</ThemedText>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardsContainer}
      >
        {favourites.map((place: Place) => {
          const key = place.name
          return (
            <View key={key}>
              <TouchableOpacity
                style={styles.card}
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    place
                  })
                }
              >
                <CompactPlaceInfo place={place} />
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: theme.space[3]
  },
  title: {
    padding: theme.space[3]
  },
  card: {
    marginRight: theme.space[2]
  },
  cardsContainer: {
    marginLeft: theme.space[3],
    flexDirection: "row"
  }
})
