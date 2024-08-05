import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import MapView, { Marker, Callout } from "react-native-maps"
import Entypo from "@expo/vector-icons/Entypo"

import { MapSearch } from "../components/search.component"
import { useLocationContext } from "@/src/services/location/location.context"
import { usePlacesContext } from "@/src/services/places/places.context"
import { MapCallout } from "../components/map-callout.component"
import { useThemeColor } from "@/src/hooks/useThemeColor"
import { MapStackParamList } from "@/src/navigation/map.navigator"

type Props = NativeStackScreenProps<MapStackParamList, "MapScreen">

export const MapScreen = ({ navigation }: Props) => {
  const { location } = useLocationContext()
  const { places } = usePlacesContext()
  const backgroundColor = useThemeColor({}, "background")
  const markerColor = useThemeColor({}, "marker")

  const { lat, lng, viewport } = location

  const [latDelta, setLatDelta] = useState(0) // how zoomed is the map

  useEffect(() => {
    const zoomedFactor = 0.5
    const northeastLat = viewport.northeast.lat * zoomedFactor
    const southwestLat = viewport.southwest.lat * zoomedFactor

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
              <Entypo name='pin' size={24} color={markerColor} />
              <Callout
                tooltip={true}
                style={{
                  width: 136
                }}
                onPress={() =>
                  navigation.navigate("PlaceDetails", {
                    place
                  })
                }
              >
                <MapCallout place={place} />
                <View
                  style={{
                    width: 0,
                    height: 0,
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderColor: "transparent",
                    borderTopWidth: 16,
                    borderTopColor: backgroundColor,
                    borderLeftWidth: 16,
                    borderRightWidth: 16,
                    marginBottom: -8
                  }}
                />
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
