import { useState } from "react"
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList
} from "react-native"

import PlaceInfoCard from "../components/place-info-card/places.info.card"
import { theme } from "@/src/theme"
import { useColorScheme } from "@/src/hooks/useColorScheme"
import { usePlacesContext } from "@/src/services/places/places.context"
import { Loader } from "@/src/components/loader/loader.component"
import { Search } from "../components/search.component"

export default function PlacesScreen() {
  const colorScheme = useColorScheme()
  const isDark = colorScheme === "dark"
  const { places, isLoading, error } = usePlacesContext()

  return (
    <SafeAreaView style={styles(isDark).container}>
      <Search />
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={places}
          renderItem={({ item: myPlace }) => <PlaceInfoCard place={myPlace} />}
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
