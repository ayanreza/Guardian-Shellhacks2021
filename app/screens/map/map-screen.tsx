import React from "react"
import { observer } from "mobx-react-lite"
import { Alert, StyleSheet, View, TouchableOpacity, Button, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import { Screen } from "../../components"
import { color } from "../../theme"


export const MapScreen = observer(function MapScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={styles.root} preset="scroll">
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 40.713990,
          longitude: -73.932472,
          latitudeDelta: 0.25,
          longitudeDelta: 0.25,
        }}
      >
      <Marker
        coordinate={{
          latitude : 40.629771,
          longitude : -74.000838}}
      >
        <Callout>
          <Text style={styles.userTitle}> David Zhao </Text>
          <Text> Class of 2021</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude : 40.642483,
          longitude : -73.935669}}
        >
          <Callout>
            <Text style={styles.userTitle}> Atiar Rahman </Text>
            <Text> Class of 2017</Text>
          </Callout>
        </Marker>
      </MapView>
    </Screen>
  )
})

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"

  },
  map: {
    width: "100%",
    height: "100%",
  },
  container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
  logo: {
    alignSelf: "center",
    marginVertical: 50,
    maxWidth: "100%",
    width: 50,
    height: 50,
  },
  userTitle: {
    fontWeight: "bold",
    fontSize: 16,

  },
  userDescription: {
    fontSize: 12,
  }
})
