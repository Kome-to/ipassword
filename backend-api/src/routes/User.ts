import express from 'express';
import wrapper from '../common/helpers/wrapper';
import UserController from '../controllers/User';
import authentication from '../middlewares/authentication';

const router = express.Router();

router.get('/me', [authentication], wrapper(UserController.getMe));

router.post('/password', [authentication], wrapper(UserController.createPassword));
router.delete('/password', [authentication], wrapper(UserController.deletePassword));
router.put('/password', [authentication], wrapper(UserController.updatePassword));

router.post('/note', [authentication], wrapper(UserController.createNote));
router.delete('/note', [authentication], wrapper(UserController.deleteNote));
router.put('/note', [authentication], wrapper(UserController.updateNote));

router.post('/card', [authentication], wrapper(UserController.createCard));
router.delete('/card', [authentication], wrapper(UserController.deleteCard));
router.put('/card', [authentication], wrapper(UserController.updateCard));

router.post('/group', [authentication], wrapper(UserController.createGroup));
router.get('/groups', [authentication], wrapper(UserController.getGroups));

router.get('/data', [authentication], wrapper(UserController.getData));

export default router;
