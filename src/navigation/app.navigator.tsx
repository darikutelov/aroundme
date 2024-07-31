import { NavigationContainer } from "@react-navigation/native"
import { TabBar } from "@/src/navigation/tabbar.component"

export function AppNavigator() {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  )
}
