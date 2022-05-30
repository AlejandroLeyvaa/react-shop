import { LOGIN_VIEW, ALGORITHMS_VIEW } from '../../../../config/navigation/routes/paths';
import { ReactNavigatorRoutes } from "../../../../domain/models/ReactNavigator";
import { AlgorithmsContainer } from "../infrastructure/ui/containers/algorithms/Algorithms";

const algorithmsRoutes: ReactNavigatorRoutes[] = [
  {
      path: ALGORITHMS_VIEW,
      component: AlgorithmsContainer
  },
];

export { algorithmsRoutes };