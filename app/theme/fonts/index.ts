import * as Font from "expo-font"

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  await Font.loadAsync({
    Comfortaa: require("./Comfortaa-Regular.ttf"),
    "Comfortaa": require("./Comfortaa-Regular.ttf"),
    Roboto: require("./Roboto-Regular.ttf"),
    "Roboto": require("./Roboto-Regular.ttf"),
    RobotoBold: require("./Roboto-Bold.ttf"),
    "RobotoBold": require("./Roboto-Bold.ttf"),
  })
}
