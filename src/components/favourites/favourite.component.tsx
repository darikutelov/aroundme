import { TouchableOpacity, StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { useFavouritesContext } from "@/src/services/favourites/favourites.context"
import { Place } from "@/src/models/place/place"

export const FavouriteIcon = ({ place }: { place: Place }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useFavouritesContext()

  const isFavourite = favourites.find((r: Place) => r.placeId === place.placeId)

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        !isFavourite ? addToFavourites(place) : removeFromFavourites(place)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 25,
    right: 25,
    zIndex: 9
  }
})
