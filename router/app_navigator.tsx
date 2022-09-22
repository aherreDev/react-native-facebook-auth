import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppNativeParamList } from "../types";
import { HomeView, AuthView } from "../views";

const AppStack = createNativeStackNavigator<AppNativeParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="auth"
          component={AuthView}
          options={{
            title: "Sign in",
            headerBackVisible: false,
            navigationBarHidden: true,
          }}
        />
        <AppStack.Screen
          name="home"
          component={HomeView}
          options={{ navigationBarHidden: true, headerBackVisible: false }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
