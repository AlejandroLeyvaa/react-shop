import * as React from "react";
import { Text, View } from "react-native";
import * as LoginRoutes from "../../../infrastructure/modules/Login/config/loginRoutes";
import * as AlgorithmsRoutes from "../../../infrastructure/modules/Algorithms/config/algorithmsRoutes";
import { LoginContainer } from "../../../infrastructure/modules/Login/infrastructure/ui/containers/login/Login";
import { AuthContext } from "../../context/AuthContext";

import { Stack } from "../../utils/stack";
import { AUTH_ACTION_TYPES } from '../../context/constants/index';

export const setRoutes = () => {

  const { status } = React.useContext(AuthContext);

  const routes: any[] = [
    ...LoginRoutes.loginRoutes,
    ...AlgorithmsRoutes.algorithmsRoutes
  ];

  return routes.map((module: any, index: number) => {
    const Component: any = module.component;

    const { status } = React.useContext( AuthContext );

    console.log('STATUS', status);
    
    return (
      <Stack.Screen key={`route-${index}`} name={module.path}>
        {(props: any) => {

          if (status === AUTH_ACTION_TYPES.CHECKING) {
            return (
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>
                  Checking...
                </Text>
              </View>);
          }

          if (status === AUTH_ACTION_TYPES.AUTHENTICATED) {
            return <Component {...props} />
          }

          if (status === AUTH_ACTION_TYPES.NOT_AUTHENTICATED) {
            return (
              <LoginContainer />
            );
          }

        }}
      </Stack.Screen>
    );
  });
};
