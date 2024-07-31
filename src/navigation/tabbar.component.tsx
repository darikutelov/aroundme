import { ParamListBase, RouteProp } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

import { PlacesNavigator } from "@/src/navigation/places.navigator"
import { MapScreen } from "@/src/features/map/screens/map.screen"
import { SettingsScreen } from "@/src/features/settings/screens/settings.screen"
import { useThemeColor } from "@/src/hooks/useThemeColor"
import { theme } from "@/src/theme"

const TAB_ICONS: { [key: string]: "place" | "map" | "settings" } = {
  Places: "place",
  Map: "map",
  Settings: "settings"
}

export const TabBar = () => {
  const Tab = createBottomTabNavigator()
  const tabBarBackground = useThemeColor({}, "background")
  const iconColor = useThemeColor({}, "icon")
  const iconActiveColor = useThemeColor({}, "tabIconSelected")

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name='Map' component={MapScreen} />
      <Tab.Screen name='Places' component={PlacesNavigator} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  )

  function screenOptions({ route }: { route: RouteProp<ParamListBase> }) {
    return {
      tabBarIcon: ({
        focused,
        color,
        size
      }: {
        focused: boolean
        color: string
        size: number
      }) => {
        return setIcon(route, focused, color, size)
      },
      tabBarActiveTintColor: iconActiveColor,
      tabBarInactiveTintColor: iconColor,
      headerShown: false,
      tabBarStyle: {
        backgroundColor: tabBarBackground,
        height: theme.space[6],
        borderTopWidth: 0,
        shadowColor: "transparent"
      },
      tabBarShowLabel: false
    }
  }

  function setIcon(
    route: RouteProp<ParamListBase, string>,
    focused: boolean,
    color: string,
    size: number
  ) {
    return (
      <MaterialIcons name={TAB_ICONS[route.name]} size={size} color={color} />
    )
  }
}
