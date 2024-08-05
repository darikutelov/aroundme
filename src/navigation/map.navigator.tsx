import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack"

import { PlacesScreen } from "@/src/features/places/screens/places.screen"
import { PlaceDetailScreen } from "@/src/features/places/screens/place-details.screen"
import { Place } from "@/src/models/place/place"
import { MapScreen } from "@/src/features/map/screens/map.screen"

export type MapStackParamList = {
  MapScreen: undefined
  PlaceDetails: { place: Place }
}

const MapStack = createStackNavigator<MapStackParamList>()

export const MapNavigator = () => {
  return (
    <MapStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS
      }}
    >
      <MapStack.Screen name='MapScreen' component={MapScreen} />
      <MapStack.Screen name='PlaceDetails' component={PlaceDetailScreen} />
    </MapStack.Navigator>
  )
}
