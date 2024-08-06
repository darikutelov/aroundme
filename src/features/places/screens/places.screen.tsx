import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native"

import { PlaceInfoCard } from "../components/place-info-card/places.info.card"
import { theme } from "@/src/theme"
import { useColorScheme } from "@/src/hooks/useColorScheme"
import { usePlacesContext } from "@/src/services/places/places.context"
import { Loader } from "@/src/components/loader/loader.component"
import { Search } from "../components/search.component"
import { PlaceStackParamList } from "@/src/navigation/places.navigator"
import { useState } from "react"
import { FavouritesBar } from "@/src/components/favourites/favourites-bar.component"
import { useFavouritesContext } from "@/src/services/favourites/favourites.context"

type Props = NativeStackScreenProps<PlaceStackParamList, "PlacesList">

export const PlacesScreen = ({ navigation }: Props) => {
  const [isFavouritesToggled, setIsFavouritesToggled] = useState(false)

  const colorScheme = useColorScheme()
  const { places, isLoading, error } = usePlacesContext()
  const { favourites } = useFavouritesContext()
  const isDark = colorScheme === "dark"
  return (
    <SafeAreaView style={styles(isDark).container}>
      <Search
        isFavouritesToggled={isFavouritesToggled}
        onFavoritesToggle={() => setIsFavouritesToggled(!isFavouritesToggled)}
      />
      {isFavouritesToggled && (
        <FavouritesBar favourites={favourites} onNavigate={() => {}} />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={places}
          renderItem={({ item: myPlace }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PlaceDetails", {
                  place: myPlace
                })
              }
            >
              <PlaceInfoCard place={myPlace} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: theme.space[3] }}
        />
      )}
    </SafeAreaView>
  )
}

const styles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: isDark
        ? theme.colors.dark.secondarySystemBackground
        : theme.colors.light.secondarySystemBackground
    }
  })
