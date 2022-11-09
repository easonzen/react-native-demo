// import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import ManualInScreen from "./screens/ManualIn";
import ManualOutScreen from "./screens/ManualOut";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "首页" }}
        />
        <Stack.Screen
          name="ManualIn"
          component={ManualInScreen}
          options={{ title: "人工入库" }}
        />
        <Stack.Screen
          name="ManualOut"
          component={ManualOutScreen}
          options={{ title: "人工出库" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
