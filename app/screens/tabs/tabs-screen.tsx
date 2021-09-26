import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {MapScreen, ProfileScreen} from "../../screens"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useStores } from "../../models"
import { color } from "../../theme"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const getTabBarIcon =
  (name: string) =>
  ({ color, size }: { color: string; size: number }) =>
    <MaterialCommunityIcons name={name} color={color} size={size} />;

const Tab = createBottomTabNavigator()
export const TabsScreen = observer(function TabsScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="map"
        component={MapScreen}
        options={{
          headerShown: false,
          title: 'Map',
          tabBarIcon: getTabBarIcon('map'),
        }}
       />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: getTabBarIcon('account'),
        }}
      />
    </Tab.Navigator>
  )
})

const styles = {
  root: {
    backgroundColor: color.palette.white,
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#f4e4de"
  }
}
