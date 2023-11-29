import express from 'express';
import wrapper from '../common/helpers/wrapper';
import AuthController from '../controllers/Auth';

const router = express.Router();

router.post('/login', wrapper(AuthController.login));
router.post('/register', wrapper(AuthController.register));

export default router;
