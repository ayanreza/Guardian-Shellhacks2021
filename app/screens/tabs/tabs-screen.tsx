import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {MapScreen, ProfileScreen} from "../../screens"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useStores } from "../../models"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

const Tab = createBottomTabNavigator()
export const TabsScreen = observer(function TabsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Tab.Navigator>
      <Tab.Screen name="map" component={MapScreen}
       />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
})
