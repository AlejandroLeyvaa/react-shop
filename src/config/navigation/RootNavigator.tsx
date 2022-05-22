import { Stack } from "../constants";
import { setRoutes } from "./routes";


export function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {setRoutes()}
    </Stack.Navigator>
  );
}
