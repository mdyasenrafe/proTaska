import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./src/screens/Splash";
import Login from "./src/screens/onboarding/Login";
import Signup from "./src/screens/onboarding/Signup";
import Verificaiton from "./src/screens/onboarding/Verificaiton";
import ForgetPassword from "./src/screens/onboarding/ForgetPassword";

export default function App() {
  const [loaded] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    DMSansMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DmSansBold: require("./assets/fonts/DMSans-Bold.ttf"),
  });
  if (!loaded) return null;

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Verification" component={Verificaiton} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
