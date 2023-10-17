import { Router } from 'express';
import weatherRoute from "./weather.route";

const router = Router();

const defaultRoutes = [
  {
    path: '/weather',
    route: weatherRoute
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
})

export default router;