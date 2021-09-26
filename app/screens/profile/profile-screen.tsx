import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, TextInput } from "react-native"
import {
  Button,
  Header,
  Screen,
  Text,
  GradientBackground,
  AutoImage as Image,
} from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

const profilePic = require("./david.png")

export const ProfileScreen = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={styles.root} preset="scroll">
      <Image source={profilePic} style={styles.profilepic}/>
      
      <Text style={styles.title}>
        David
      </Text>

      <Text style={styles.text1}>
        Skills
      </Text>

      <Text style={styles.text}>
        Therapy, De-escalation, Sympathizing
      </Text>

      <Text style={styles.text1}>
        Contact
      </Text>

      <Text style={styles.text}>
          shellhacks@guardian.com
      </Text>


    </Screen>
  )
})

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  full: {
    flex: 1,
  },

  input: {
    margin: 8,
    padding: 15,
    borderWidth: 2,
    borderColor: 'black',
    fontSize: 15,
  },
  button: {
    margin: 8,
    backgroundColor: "#000000",
  },
  text1: {
    textAlign: "center",
    color: 'black',
    fontSize: 22,
    fontFamily: "Comfortaa",
    marginTop: 15,
    fontWeight: 'bold',
  },
  text: {
    textAlign: "center",
    color: 'black',
    fontSize: 22,
    fontFamily: "Comfortaa",
    marginTop: 15,
    marginBottom: 17,
   
  },
  title: {
    textAlign: "center",
    color: 'black',
    fontSize: 36,
    fontFamily: "Comfortaa",
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 8,
    marginRight: 8,
  },
  profilepic: {
    alignSelf: 'center'

  },
})