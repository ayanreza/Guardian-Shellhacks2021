import React from "react"
import { observer } from "mobx-react-lite"
import { Alert, StyleSheet, View, TouchableOpacity, Button, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import { Screen } from "../../components"
import { color } from "../../theme"

const david = require("./david.png")
const stranger1 = require("./stranger1.png")
const stranger2 = require("./stranger2.png")
const stranger3 = require("./stranger3.png")
const shyguy = require("./pfp.png")
var mapStyle = [
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#db43c9"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]

export const MapScreen = observer(function MapScreen() {

  return (
    <Screen
      style={styles.root}
      preset="scroll"
    >
      <MapView
        style={styles.map}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 40.65106817642467,
          longitude: -73.97016405272372,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
        coordinate={{
          latitude : 40.65106817642467,
          longitude : -73.97016405272372}}
        image={david}
        >
          <Callout>
            <Text style={styles.userTitle}> David Z </Text>
            <Text> Nurse Practitioner </Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude : 40.642483,
            longitude : -73.935669}}
          image={shyguy}
          >
            <Callout>
              <Text style={styles.userTitle}> Ayan Reza </Text>
              <Text> Feet Pain </Text>
            </Callout>
        </Marker>
        <Marker
        coordinate={{
          latitude : 40.66038498781322,
          longitude : -73.98079629155337}}
        image={stranger1}
        >
          <Callout>
            <Text style={styles.userTitle}> Joseph Cooper </Text>
            <Text> Depression </Text>
          </Callout>
        </Marker>
        <Marker
        coordinate={{
          latitude : 40.64575812611341,
          longitude : -73.98290650270394}}
        image={stranger2}
        >
          <Callout>
            <Text style={styles.userTitle}> Ellen Olson </Text>
            <Text> Neighbor Dispute </Text>
          </Callout>
        </Marker>
        <Marker
        coordinate={{
          latitude : 40.63563877744478,
          longitude : -73.96031221228705}}
        image={stranger3}
        >
          <Callout>
            <Text style={styles.userTitle}> Maxine Moss </Text>
            <Text> Anxiety Attack </Text>
          </Callout>
        </Marker>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            People in Need of Service
          </Text>
        </View>
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
  },
  text: {
    fontSize: 20,
    fontFamily: "Comfortaa",
    backgroundColor: '#ECEFF1',
    padding: 12

  },
  textContainer: {
    marginTop: 20,
    padding: 12,
    alignItems: 'center'
  }
})
