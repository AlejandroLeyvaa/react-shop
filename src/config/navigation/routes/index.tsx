import { Stack } from "../../constants";

export const setRoutes = () => {
  const routes: any[] = [];

  return routes.map((module: any, index: number) => {
    const Component: any = module.component;
    
    return(
      <Stack.Screen key={`route-${index}`} name={module.path} component={Component} />
    );
  });
};
