import { LOGIN_VIEW } from "../../../../config/navigation/routes/paths";
import { ReactNavigatorRoutes } from "../../../../domain/models/ReactNavigator";
import { LoginContainer } from "../infrastructure/ui/containers/login/Login";

const loginRoutes: ReactNavigatorRoutes[] = [
  {
      path: LOGIN_VIEW,
      component: LoginContainer
  },
];

export { loginRoutes };