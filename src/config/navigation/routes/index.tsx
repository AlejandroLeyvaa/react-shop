import * as React from "react";
import { Text, View } from "react-native";
import * as LoginRoutes from "../../../infrastructure/modules/Login/config/loginRoutes";
import { LoginContainer } from "../../../infrastructure/modules/Login/infrastructure/ui/containers/login/Login";
import { AuthContext } from "../../context/AuthContext";
import { AuthStatus, AUTH_STATUSES } from "../../utils/authStatuses";
import { Stack } from "../../utils/stack";

export const setRoutes = () => {

  const { status } = React.useContext(AuthContext);

  const routes: any[] = [
    ...LoginRoutes.loginRoutes
  ];

  return routes.map((module: any, index: number) => {
    const Component: any = module.component;

    return (
      <Stack.Screen key={`route-${index}`} name={module.path}>
        {(props: any) => {

          if (status === AUTH_STATUSES.CHECKING) {
            return (
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>
                  Checking...
                </Text>
              </View>);
          }

          if (status === AUTH_STATUSES.AUTHENTICATED) {
            return <Component {...props} />
          }

          if(status === AUTH_STATUSES.NOT_AUTHENTICATED) {
            return (
              <LoginContainer />
            );
          }

        }}
      </Stack.Screen>
    );
  });
};
