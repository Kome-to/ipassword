import express from 'express';
import wrapper from '../common/helpers/wrapper';
import UserController from '../controllers/User';
import authentication from '../middlewares/authentication';

const router = express.Router();

router.get('/me', [authentication], wrapper(UserController.getMe));

router.post('/password', [authentication], wrapper(UserController.createPassword));

router.post('/note', [authentication], wrapper(UserController.createNote));

router.post('/card', [authentication], wrapper(UserController.createCard));

router.post('/group', [authentication], wrapper(UserController.createGroup));
router.get('/groups', [authentication], wrapper(UserController.getGroups));

router.get('/data', [authentication], wrapper(UserController.getData));

export default router;
