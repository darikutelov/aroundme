import { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import MapView, { Marker, Callout } from "react-native-maps"

import { MapSearch } from "../components/search.component"
import { useLocationContext } from "@/src/services/location/location.context"
import { usePlacesContext } from "@/src/services/places/places.context"

export const MapScreen = () => {
  const { location } = useLocationContext()
  const { places } = usePlacesContext()

  const { lat, lng, viewport } = location

  const [latDelta, setLatDelta] = useState(0) // how zoomed is the map

  useEffect(() => {
    const northeastLat = viewport.northeast.lat
    const southwestLat = viewport.southwest.lat

    setLatDelta(northeastLat - southwestLat)
  }, [location, viewport])

  return (
    <>
      <MapSearch />
      <MapView
        style={styles.container}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02
        }}
      >
        {places.map((place) => {
          const { name, geometry } = place
          return (
            <Marker
              key={name}
              title={name}
              coordinate={{
                latitude: geometry.location.lat,
                longitude: geometry.location.lng
              }}
            >
              <Callout>
                <View>
                  <Text>{name}</Text>
                </View>
              </Callout>
            </Marker>
          )
        })}
      </MapView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  }
})
