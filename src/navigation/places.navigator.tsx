import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack"

import { PlacesScreen } from "@/src/features/places/screens/places.screen"
import { PlaceDetailScreen } from "@/src/features/places/screens/place-details.screen"
import { Place } from "@/src/models/place/place"

export type PlaceStackParamList = {
  PlacesList: undefined
  PlaceDetails: { place: Place }
}

const PlacesStack = createStackNavigator<PlaceStackParamList>()

export function PlacesNavigator() {
  return (
    <PlacesStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS
      }}
    >
      <PlacesStack.Screen name='PlacesList' component={PlacesScreen} />
      <PlacesStack.Screen name='PlaceDetails' component={PlaceDetailScreen} />
    </PlacesStack.Navigator>
  )
}
