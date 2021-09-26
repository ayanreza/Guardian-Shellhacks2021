import {AuthenticationContext} from "../services/authentication/authentication.context";
import React, {useContext} from "react";
import { View } from "react-native";

export * from "./welcome/welcome-screen"
export * from "./demo/demo-screen"
export * from "./demo/demo-list-screen"
export * from "./error/error-boundary"
// export other screens here

export const LoginScreenTest = () => {

  const {onLogin} = useContext(AuthenticationContext)
  const loginAttempt = () => {
      onLogin("email@gmail.com", "password")
       console.log("Reached onLogin")}

}