import express from 'express';
import { UserControler } from './user.controler';
import { UserValidation } from './user.validations';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();

router.post(
  '/signup',
  validateRequest(UserValidation.create),
  UserControler.insertIntoDB
);

export const UserRoutes = router;
