import { changePassword, forgotPassword, resetPassword } from '@/controllers/password';
import { read } from '@/controllers/signin';
import { create } from '@/controllers/signup';
import { update } from '@/controllers/verify-email';
import express, { Router } from 'express';

const router: Router = express.Router();

export function authRoutes(): Router {
  router.post('/signup', create);
  router.post('/signin', read);
  router.put('/verify-email', update);
  router.put('/forgot-password', forgotPassword);
  router.put('/reset-password/:token', resetPassword);
  router.put('/change-password', changePassword);

  return router;
}
