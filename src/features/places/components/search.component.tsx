import { useEffect, useState } from "react"
import { View, StyleSheet } from "react-native"
import { Searchbar } from "react-native-paper"

import { useLocationContext } from "@/src/services/location/location.context"
import { theme } from "@/src/theme"
import { useColorScheme } from "@/src/hooks/useColorScheme"

type Props = {
  isFavouritesToggled: boolean
  onFavoritesToggle: () => void
}

export const Search = ({ isFavouritesToggled, onFavoritesToggle }: Props) => {
  const { keyword, search } = useLocationContext()
  const [searchKeyword, setSearchKeyword] = useState(keyword)

  const colorScheme = useColorScheme()
  const isDark = colorScheme === "dark"

  useEffect(() => setSearchKeyword(keyword), [keyword])

  return (
    <View style={styles.container}>
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavoritesToggle}
        placeholder='Search for a location'
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword)
        }}
        onChangeText={(text) => {
          setSearchKeyword(text)
        }}
        style={styles.search}
        inputStyle={{
          color: isDark ? theme.colors.dark.text : theme.colors.light.text
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: theme.space[3]
  },
  search: {
    borderRadius: 8
  }
})
