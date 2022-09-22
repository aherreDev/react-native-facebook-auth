import { NativeBaseProvider, Box } from "native-base";
import AppProvider from "./provider/app_provider";
import AppNavigator from "./router/app_navigator";

const cs = console as any;

cs.disableYellowBox = true;

export default function App() {
  return (
    <NativeBaseProvider>
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    </NativeBaseProvider>
  );
}
