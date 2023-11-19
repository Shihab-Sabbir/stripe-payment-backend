import express from 'express';
import authRoutes from '../app/modules/auth/auth.route';
import stripeRoutes from '../app/modules/stripe/stripe.route';
import auth from '../app/middlewares/auth';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/stripe',
    route: stripeRoutes,
  },
];

defaultRoutes.forEach(route => {
  if (route.path === '/auth') {
    router.use(route.path, route.route);
  } else {
    router.use(route.path, auth(), route.route);
  }
});

export default router;
