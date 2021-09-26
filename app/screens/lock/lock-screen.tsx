import React from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, TextInput, ImageBackground } from "react-native"
import {
  Button,
  Header,
  Screen,
  Text,
  GradientBackground,
  AutoImage as Image,
} from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

const logo = require('./logo.png')

export const LockScreen = observer(function LockScreen() {
  // Pull in navigation via hook
  const navigation = useNavigation()
  const goRegister = () => navigation.navigate('register')
  const goLogin = () => navigation.navigate('login')

  return (
    <Screen style={styles.root} preset="scroll">

      <GradientBackground colors={["#D7DDE8", "#757F9A"]} />

        <Image source={logo} style={styles.logo}/>




      <Button mode="contained" onPress={goLogin} style={styles.login}>
        <Text style={styles.text}> Login </Text>
      </Button>

      <Button mode="contained" onPress={goRegister} style={styles.register}>
        <Text> Register </Text>
      </Button>




    </Screen>
  )
})

const styles = StyleSheet.create({
  root: {

    flex: 1,
  },
  full: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
    // justifyContent: 'center',
  },
  input: {
    margin: 8,
    padding: 10,
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0, 0, 0, 0.08)',
  },
  text: {
    textAlign: 'center',
    margin: 8,
    color: '#000000'
  },
  logo: {
    alignSelf: "center",
    marginTop: 100,
    maxWidth: "100%",
    width: "100%",
    height: 200,
    borderRadius: 10 
  },
  login: {
    position: 'absolute',
    width: 160,
    height: 52,
    left: 16,
    top: 630,
    backgroundColor:'#ffffff',
    

  },
  register: {
    position: 'absolute',
    width: 160,
    height: 52,
    left: 215,
    right: 12,
    top: 630,
    backgroundColor: '#000000',
  },
})
