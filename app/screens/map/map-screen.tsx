import React from "react"
import { observer } from "mobx-react-lite"
import { Alert, StyleSheet, View, TouchableOpacity, Button, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import { Screen } from "../../components"
import { color } from "../../theme"

const david = require("./david.png")
const pfp = require("./pfp.png")

export const MapScreen = observer(function MapScreen() {

  return (
    <Screen
      style={styles.root}
      preset="scroll"
    >
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 40.65106817642467,
          longitude: -73.97016405272372,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
      <Marker
        coordinate={{
          latitude : 40.629771,
          longitude : -74.000838}}
        image={david}
      >
        <Callout>
          <Text style={styles.userTitle}> David Zhao </Text>
          <Text> Neurologist </Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude : 40.642483,
          longitude : -73.935669}}
        image={pfp}
        >
          <Callout>
            <Text style={styles.userTitle}> Ayan Reza </Text>
            <Text> Surgeon </Text>
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
