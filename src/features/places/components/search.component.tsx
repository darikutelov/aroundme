import { useEffect, useState } from "react"
import { View, StyleSheet } from "react-native"
import { Searchbar } from "react-native-paper"

import { useLocationContext } from "@/src/services/location/location.context"
import { theme } from "@/src/theme"
import { useColorScheme } from "@/src/hooks/useColorScheme"

export const Search = () => {
  const { keyword, search } = useLocationContext()
  const [searchKeyword, setSearchKeyword] = useState(keyword)

  const colorScheme = useColorScheme()
  const isDark = colorScheme === "dark"

  return (
    <View style={styles.container}>
      <Searchbar
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
