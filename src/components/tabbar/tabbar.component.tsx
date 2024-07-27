import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

import MapScreen from "@/src/features/map/screens/map.screen"
import PlacesScreen from "@/src/features/places/screens/places.screen"
import SettingsScreen from "@/src/features/settings/screens/settings.screen"
import { ParamListBase, RouteProp } from "@react-navigation/native"
import { useThemeColor } from "@/src/hooks/useThemeColor"
import { theme } from "@/src/theme"

const TAB_ICONS: { [key: string]: "icecream" | "map" | "settings" } = {
  Places: "icecream",
  Map: "map",
  Settings: "settings"
}

export default function TabBar() {
  const Tab = createBottomTabNavigator()
  const tabBarBackground = useThemeColor({}, "background")
  const iconColor = useThemeColor({}, "icon")
  const iconActiveColor = useThemeColor({}, "tabIconSelected")
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name='Places' component={PlacesScreen} />
      <Tab.Screen name='Map' component={MapScreen} />
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
