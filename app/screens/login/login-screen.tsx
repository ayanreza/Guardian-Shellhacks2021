import React from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, TextInput} from "react-native"
import {
  Button,
  Header,
  Screen,
  Text,
  GradientBackground,
  AutoImage as Image,
} from "../../components"
import { useNavigation, useTheme} from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

export const LoginScreen = observer(function LoginScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const signIn = () => navigation.navigate('tabs')
  const { colors } = useTheme();

  return (
    <Screen style={styles.root} preset="scroll">
      <Text style={styles.title}>
        Log In
      </Text>
      <TextInput
        placeholder="Username"
        style={[
          styles.input
        ]}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[
          styles.input
        ]}
      />
      <Button mode="contained" onPress={signIn} style={styles.button}>
        <Text style={styles.text}>
          Log In
        </Text>
      </Button>
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
  content: {
    flex: 1,
    padding: 16,
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
  text: {
    textAlign: 'center',
    margin: 8,
    fontSize: 15,
    fontWeight: 'bold',
  },
  title: {
    color: 'black',
    fontSize: 36,
    fontFamily: "Comfortaa",
    marginTop: 100,
    marginBottom: 30,
    marginLeft: 8,
  }
})
