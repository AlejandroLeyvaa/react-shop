import * as React from 'react';
import { Stack } from "../utils/stack";
import { setRoutes } from "./routes";
import { LOGIN_VIEW } from './routes/paths';


export function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {setRoutes()}
    </Stack.Navigator>
  );
}
