import React from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, TextInput } from "react-native"
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

export const LockScreen = observer(function LockScreen() {
  // Pull in navigation via hook
  const navigation = useNavigation()
  const goRegister = () => navigation.navigate('register')
  const goLogin = () => navigation.navigate('login')

  return (
    <Screen style={styles.root} preset="scroll">
      <Button mode="contained" onPress={goLogin} style={styles.button}>
        <Text> Login </Text>
      </Button>
      <Button mode="contained" onPress={goRegister} style={styles.button}>
        <Text> Register </Text>
      </Button>
    </Screen>
  )
})

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#3d7ea4",
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
  button: {
    margin: 8,
    backgroundColor: "#c77457",
  },
  text: {
    textAlign: 'center',
    margin: 8,
  },
  logo: {
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 25,
    maxWidth: "100%",
    width: "100%",
    height: 100,
    borderRadius: 10
  }
})
