import React from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, TextInput} from "react-native"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import {
  Button,
  Header,
  Screen,
  Text,
  GradientBackground,
  AutoImage as Image,
} from "../../components"

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

export const LogOnScreen = observer(function LogOnScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate('tabs')

  return (
    <Screen style={styles.root} preset="scroll">
      <Text preset="header" text="Hello" />
      <Button mode="contained" onPress={nextScreen} style={styles.button}>
          <Text> Sign In </Text>
      </Button>
    </Screen>
  )
})
